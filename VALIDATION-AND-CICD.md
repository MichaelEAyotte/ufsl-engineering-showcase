# Validation pipeline and deployment evidence

## Weekly lifecycle

1. **Read-only readiness:** inspect arguments, required paths, canonical consistency, preserved evidence and the requested week. The recorded statuses are `NEW_READY`, `EXISTING_VALID` and `BLOCKED`. Existing valid facts authorize inspection, not overwrite.
2. **Stage recap data:** build changes in an isolated temporary location and validate the staged state before promotion.
3. **Promote a bounded transaction:** the documented recap boundary contains six data outputs. Articles and the news index are outside that transaction.
4. **Review editorial content:** validate recap/ranking claims against canonical facts and use the separate approved publication path for article/index changes.
5. **Validate full local evidence:** inspect the applicable private preservation and public-content requirements.
6. **Run tracked-content CI:** validate only what a normal tracked checkout contains, including browser publication checks.
7. **Deploy only after the CI dependency passes:** the existing deployment job requires the tracked-content validation job.

## Recovery and concurrent edits

The documented promotion process compares destination bytes against its captured snapshot. If post-promotion validation fails, rollback restores only bytes still matching the transaction's own write. A concurrent edit causes a manual-intervention result rather than being silently overwritten. These are inspected implementation/documentation behaviors, not a new failure-injection test performed by this audit.

## Two scopes, two claims

| Gate | Evidence available | Meaning of success |
|---|---|---|
| Full local preservation gate | Private archive evidence and tracked sources | Applicable historical preservation and architecture checks pass for that local evidence set |
| Tracked-content CI | Ordinary tracked checkout | `TRACKED_CONTENT_VALIDATED`; full private audit is explicitly `NOT_CLAIMED` |

Private archive exclusions are declared scope boundaries. Missing tracked requirements still fail. Neither an orchestration agent nor generated prose should waive a validator failure.

## Recorded verification chronology

At commit `5376d91`, run `40872452751` completed both “Validate Tracked Public Content” and “Build and Deploy Job” successfully. At the preceding inspected commit `0b15d23`, run `40872137836` failed “Validate tracked public content” and the deployment job was skipped. The private owner audit includes the exact links.

These original observations confirm the job outcomes and dependency behavior at that point. The initial October 31 private review then added hardening and test-only validation, without a production deployment in that initial stage. Its full local suite still had preservation and fixture failures; that was an intermediate result, superseded by the later release verification below.

On October 31, 2026, America/Chicago time (November 1 UTC), the final production revision completed **778 tests: 777 passed, zero failed and one existing Windows symlink-capability skip**, in 650.84 seconds. The run included the complete physical historical replay with locally authenticated private evidence. Recovery authenticated 205 historical originals against existing hashes, while 853 protected tracked files and historical pins remained unchanged. The saved exact-revision run receipt and log were checked for this case-study update; the private suite was not rerun as part of publishing this showcase.

Hosted Node 22/Chrome validation also passed. The later approved production release completed tracked-content validation and deployment, followed by 261 public-file hash comparisons, 42 literal-404 boundary checks and 12 bounded live Edge checks. Statistics, season filtering, news/article navigation and mobile navigation were among the live checks. Private operational records, archives and production configuration remain excluded from this repository.

## Remaining verification limits

The full local result, hosted tracked-content validation and live browser checks have different scopes. None implies that the five standalone showcase tests validate the production system. Earlier publication-placement and news-image reports remain part of the engineering history; the recorded live snapshot checks do not reproduce every future article-publication cycle or establish comprehensive browser, accessibility or performance coverage.
