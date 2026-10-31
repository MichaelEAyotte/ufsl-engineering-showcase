# Data migration and preservation case study

## Problem

Historical league material and current-season sources do not expose identical fields. A migration response may include season standings and placement evidence without supplying weekly matchups, drafts or the history needed to reconstruct every statistic. Treating missing fields as zero or inferring a person's identity from a familiar team name would create misleading results.

## Approach in the inspected repository

The source-preservation workflow retains response bytes, manifests, hashes and normalized projections. Canonical refresh uses reviewed saved captures. Historical verification resolves its inputs through sealed evidence and rejects missing, corrupt, unsafe or ambiguous inputs rather than substituting a convenient current file.

Source league identity, source season and capture provenance are validated before data is accepted. Captures with contradictory or absent required metadata remain evidence of an unresolved condition. A successful HTTP response alone is not proof that the requested historical feature was supplied.

## Reconciliation decisions

**Preserve missingness.** A missing score or field stays unavailable until evidence supports a value. It must not become an invented zero, matchup or championship outcome.

**Separate identities from display names.** Stable, established human associations govern career aggregation. A current display label must not silently overwrite the name captured with a historical result.

**Separate evidence from output.** Historical source captures and current presentation serve different purposes. Rebuilding a view must not rewrite the source evidence used to validate it.

**Make conflicts reviewable.** New captures may disagree with previous ones. Keep both and document a resolution instead of overwriting the inconvenient version.

## Engineering challenge

Several consumers need consistent facts: seasons, member profiles, career statistics, the matchup explorer and weekly articles. The architecture uses canonical adapters and shared calculation logic to reduce contradictory interpretations. Validation then checks both data consistency and preservation boundaries.

## Status and limits

The repository README documents canonical season files for 2012�2026, and the tree and tooling support a substantial migration/validation implementation. This audit inspected representative contracts and code; it did not independently reconstruct every season or rerun the private full-evidence audit. Older archive documentation contains historical blocked acquisitions; it should not be presented as the current outcome of all later migration work.

The [synthetic example](evaluation/MIGRATION-EXAMPLE.md) demonstrates the decision rules with fictional data. No real member or account data is included.
