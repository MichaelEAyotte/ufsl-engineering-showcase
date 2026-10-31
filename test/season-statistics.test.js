const test=require('node:test'), assert=require('node:assert/strict');
const {aggregateMemberSeasons:aggregate}=require('../src/season-statistics');
const fixture=require('../examples/fixture');
const row=()=>structuredClone(fixture[0]);
test('ties count as half wins and final awards stay distinct from regular placement',()=>{
 const r=aggregate([row()]); assert.equal(r.summary.winningPercentage,0.5);
 assert.equal(r.summary.championships,1); assert.equal(r.summary.regularFirst,0);
});
test('missing scoring never becomes zero or a misleading differential',()=>{
 const a=row(), b=row(); b.season=2025; b.record.pointsAgainst=null;
 const r=aggregate([a,b]); assert.equal(r.summary.pointsFor,200);
 assert.equal(r.summary.pointsAgainst,90); assert.equal(r.summary.scoringDifferential,null);
 assert.deepEqual(r.eligibility.paSeasons,[2024]);
});
test('live season contributes records but never a completed-season award',()=>{
 const a=row(); a.completed=false; const r=aggregate([a]);
 assert.equal(r.summary.games,4); assert.equal(r.summary.championships,null);
 assert.equal(r.extremes.highestSeasonPF,null);
});
test('duplicate seasons stop aggregation and input order does not alter output',()=>{
 assert.throws(()=>aggregate([row(),row()]),/Duplicate/);
 const b=row(); b.season=2026; assert.deepEqual(aggregate([row(),b]),aggregate([b,row()]));
});
test('all tied extrema preserve provenance and input is not mutated',()=>{
 const a=row(), b=row(); b.season=2025; const before=JSON.stringify([a,b]);
 const r=aggregate([a,b]); assert.equal(r.extremes.highestSeasonPF.seasons.length,2);
 assert.equal(JSON.stringify([a,b]),before);
});
