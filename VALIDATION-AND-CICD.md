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

## GitHub evidence inspected in this audit

At commit `5376d91`, run `40872452751` completed both “Validate Tracked Public Content” and “Build and Deploy Job” successfully. At the preceding inspected commit `0b15d23`, run `40872137836` failed “Validate tracked public content” and the deployment job was skipped. The private owner audit includes the exact links.

This confirms the observed job outcomes and dependency behavior. It does not identify the earlier failure's root cause, prove every application test passed, or replace a complete live-site review. That observation describes the original production runs. The subsequent October 31 private review branch hardens actions and adds test-only validation; no production deployment was performed. The full local evidence suite was also exercised and retains unresolved preservation/fixture failures.

## Existing follow-ups

The tracker keeps publication file-placement/completion validation and a reported news-image regression open. A correct CI dependency is valuable, but it is not evidence that the present validation set catches every publishing defect.
