'use strict';
// Extracted from UFSL; see CODE-REVIEW.md.
  const numeric = v => typeof v === 'number' && Number.isFinite(v);
  const positiveRank = v => Number.isInteger(v) && v > 0;
  const round = (v, digits = 6) => numeric(v) ? Number(v.toFixed(digits)) : null;
  const recordValid = r => r && ['wins', 'losses', 'ties'].every(k => Number.isInteger(r[k]) && r[k] >= 0);
  const games = r => recordValid(r) ? r.wins + r.losses + r.ties : null;
  const pct = r => games(r) > 0 ? (r.wins + r.ties / 2) / games(r) : null;
  const sum = (rows, fn) => rows.length ? round(rows.reduce((n, r) => n + fn(r), 0)) : null;
  const divide = (n, d) => numeric(n) && d > 0 ? round(n / d) : null;
  const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const norm = v => String(v).trim().toLowerCase().replace(/\s+/g, '');
  function extreme(rows, fn, direction) {
    const values = rows.map(r => ({ season: r.season, team: r.team, source: r.source, value: fn(r) })).filter(r => numeric(r.value));
    if (!values.length) return null;
    const value = Math[direction](...values.map(r => r.value));
    return { value: round(value), seasons: values.filter(r => Math.abs(r.value - value) < 1e-9).map(r => ({ ...r, value: round(r.value) })) };
  }
  function aggregateMemberSeasons(input) {
    const rows = [...input].sort((a, b) => a.season - b.season);
    if (new Set(rows.map(r => r.season)).size !== rows.length) throw new Error('Duplicate member-season');
    const completed = rows.filter(r => r.completed);
    const records = rows.filter(r => recordValid(r.record));
    const completedRecords = completed.filter(r => recordValid(r.record));
    const percentages = completedRecords.filter(r => numeric(pct(r.record)));
    const pf = rows.filter(r => numeric(r.record?.pointsFor));
    const pa = rows.filter(r => numeric(r.record?.pointsAgainst));
    const paired = rows.filter(r => numeric(r.record?.pointsFor) && numeric(r.record?.pointsAgainst));
    const pfGames = pf.filter(r => games(r.record) > 0), paGames = pa.filter(r => games(r.record) > 0);
    const regular = completed.filter(r => positiveRank(r.regularFinish));
    const final = completed.filter(r => positiveRank(r.finalFinish));
    const years = rows.map(r => r.season);
    const summary = { documentedSeasons: rows.length, completedDocumentedSeasons: completed.length,
      seasons: years, firstDocumentedSeason: years[0] ?? null, latestDocumentedSeason: years.at(-1) ?? null,
      careerSpan: years.length ? years.at(-1) - years[0] + 1 : null };
    let streak = [], streaks = [];
    for (const year of years) { if (streak.length && year !== streak.at(-1) + 1) { streaks.push(streak); streak = []; } streak.push(year); }
    if (streak.length) streaks.push(streak);
    const longest = streaks.length ? Math.max(...streaks.map(s => s.length)) : null;
    summary.longestConsecutiveSeasons = longest;
    summary.consecutiveSeasonStreaks = streaks.filter(s => s.length === longest);
    for (const k of ['wins', 'losses', 'ties']) summary[k] = sum(records, r => r.record[k]);
    summary.games = sum(records, r => games(r.record));
    summary.winningPercentage = divide(summary.wins === null ? null : summary.wins + summary.ties / 2, summary.games);
    summary.pointsFor = sum(pf, r => r.record.pointsFor);
    summary.pointsAgainst = sum(pa, r => r.record.pointsAgainst);
    summary.scoringDifferential = paired.length > 0 && paired.length === pf.length && paired.length === pa.length ? round(summary.pointsFor - summary.pointsAgainst) : null;
    summary.averagePFPerSeason = divide(summary.pointsFor, pf.length);
    summary.averagePAPerSeason = divide(summary.pointsAgainst, pa.length);
    summary.averageDifferentialPerSeason = divide(sum(paired, r => r.record.pointsFor - r.record.pointsAgainst), paired.length);
    summary.pfPerDocumentedGame = divide(sum(pfGames, r => r.record.pointsFor), sum(pfGames, r => games(r.record)));
    summary.paPerDocumentedGame = divide(sum(paGames, r => r.record.pointsAgainst), sum(paGames, r => games(r.record)));
    const award = (key, eligible, condition) => {
      summary[key + 'Seasons'] = eligible.filter(condition).map(r => r.season);
      summary[key] = eligible.length ? summary[key + 'Seasons'].length : null;
    };
    for (const [key, n] of [['championship', 1], ['runnerUp', 2], ['thirdPlace', 3]]) award(key, final, r => r.finalFinish === n);
    summary.championships = summary.championship;
    delete summary.championship;
    award('finals', final, r => r.finalFinish <= 2);
    award('podium', final, r => r.finalFinish <= 3);
    for (const key of ['championship', 'finals', 'podium']) summary[key + 'Rate'] = divide(key === 'championship' ? summary.championships : summary[key], final.length);
    for (const [key, n] of [['regularFirst', 1], ['regularSecond', 2], ['regularThird', 3]]) award(key, regular, r => r.regularFinish === n);
    award('regularTopThree', regular, r => r.regularFinish <= 3);
    summary.bestRegularFinish = extreme(regular, r => r.regularFinish, 'min');
    summary.worstRegularFinish = extreme(regular, r => r.regularFinish, 'max');
    summary.averageRegularFinish = divide(sum(regular, r => r.regularFinish), regular.length);
    summary.bestFinalFinish = extreme(final, r => r.finalFinish, 'min');
    summary.worstFinalFinish = extreme(final, r => r.finalFinish, 'max');
    summary.averageFinalFinish = divide(sum(final, r => r.finalFinish), final.length);
    award('winning', percentages, r => pct(r.record) > 0.5);
    award('atLeastHalf', percentages, r => pct(r.record) >= 0.5);
    award('losing', percentages, r => pct(r.record) < 0.5);
    summary.winningSeasonPercentage = divide(summary.winning, percentages.length);
    const extremes = {};
    for (const [key, fn, direction] of [
      ['bestSeasonWinPercentage', r => pct(r.record), 'max'], ['worstSeasonWinPercentage', r => pct(r.record), 'min'],
      ['mostSeasonWins', r => recordValid(r.record) ? r.record.wins : null, 'max'], ['mostSeasonLosses', r => recordValid(r.record) ? r.record.losses : null, 'max'],
      ['fewestSeasonLosses', r => recordValid(r.record) ? r.record.losses : null, 'min'], ['mostSeasonTies', r => recordValid(r.record) ? r.record.ties : null, 'max'],
      ['highestSeasonPF', r => r.record?.pointsFor, 'max'], ['lowestSeasonPF', r => r.record?.pointsFor, 'min'],
      ['highestSeasonPA', r => r.record?.pointsAgainst, 'max'], ['lowestSeasonPA', r => r.record?.pointsAgainst, 'min'],
      ['highestSeasonDifferential', r => numeric(r.record?.pointsFor) && numeric(r.record?.pointsAgainst) ? r.record.pointsFor - r.record.pointsAgainst : null, 'max'],
      ['lowestSeasonDifferential', r => numeric(r.record?.pointsFor) && numeric(r.record?.pointsAgainst) ? r.record.pointsFor - r.record.pointsAgainst : null, 'min']
    ]) extremes[key] = extreme(completed, fn, direction);
    // Preserve a compatibility projection of the existing best-record convention:
    // maximum half-tie percentage, then most wins; completed seasons only here.
    const best = [...percentages].sort((a, b) => pct(b.record) - pct(a.record) || b.record.wins - a.record.wins)[0];
    summary.bestRegularSeasonRecord = best ? { seasons: percentages.filter(r => ['wins', 'losses', 'ties'].every(k => r.record[k] === best.record[k])).map(r => r.season), wins: best.record.wins, losses: best.record.losses, ties: best.record.ties, winningPercentage: round(pct(best.record)) } : null;
    const teamHistory = [...new Set(rows.map(r => r.team))].map(team => {
      const seasons = rows.filter(r => r.team === team).map(r => r.season);
      return { team, seasons, firstSeason: seasons[0], lastSeason: seasons.at(-1), documentedSeasons: seasons.length };
    });
    summary.distinctTeamNames = teamHistory.length;
    summary.longestUsedTeamNames = teamHistory.filter(t => t.documentedSeasons === Math.max(...teamHistory.map(t => t.documentedSeasons)));
    return { summary, extremes, teamHistory, seasons: rows,
      eligibility: { recordSeasons: records.map(r => r.season), pfSeasons: pf.map(r => r.season), paSeasons: pa.map(r => r.season), differentialSeasons: paired.map(r => r.season),
        pfGameSeasons: pfGames.map(r => r.season), paGameSeasons: paGames.map(r => r.season), finalSeasons: final.map(r => r.season), regularFinishSeasons: regular.map(r => r.season), winningSeasonYears: percentages.map(r => r.season),
        excludedFinal: rows.filter(r => !r.completed || !positiveRank(r.finalFinish)).map(r => ({ season: r.season, reason: !r.completed ? 'Season incomplete' : 'Final placement unavailable' })),
        excludedRegularFinish: rows.filter(r => !r.completed || !positiveRank(r.regularFinish)).map(r => ({ season: r.season, reason: !r.completed ? 'Regular season not complete' : 'Regular placement unavailable' })),
        excludedRecords: rows.filter(r => !recordValid(r.record)).map(r => ({ season: r.season, reason: 'W-L-T unavailable; never converted to zero' })),
        excludedScoring: rows.filter(r => !numeric(r.record?.pointsFor) || !numeric(r.record?.pointsAgainst)).map(r => ({ season: r.season, missingFields: ['pointsFor', 'pointsAgainst'].filter(k => !numeric(r.record?.[k])), reason: 'Missing scoring field; unequal coverage prevents a career differential' })) } };
  }

module.exports = { aggregateMemberSeasons };
