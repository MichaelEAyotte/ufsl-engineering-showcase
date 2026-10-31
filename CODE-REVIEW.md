# Executable source scope

`src/season-statistics.js` contains the helper functions and `aggregateMemberSeasons` extracted from `ufsl/assets/js/member-career-statistics.js` at commit `5376d91c1bcd6883431d37d904217d17d46b61f7`. The original wrapper, canonical-data loader, identity matching, profile comparisons and production data are excluded. The aggregation logic is retained; the CommonJS export is new. Fixtures and focused tests were created for this review.

The function is useful for comparing completed and incomplete season records while preserving missing-value eligibility and tied extrema. It accepts normalized records; it is not an untrusted-input schema validator or ESPN client. Tests exercise ties, missing values, duplicate seasons, partial seasons, deterministic output and provenance. No actual league/member records are included.

This extracted subset does not implement migration or the entire canonical validation pipeline. The case study describes those private project capabilities separately. Before publication, approve code ownership and choose a license; the private package flag prevents accidental npm publication and is not a license.

## Authorship and evidence boundary

The source functions derive from the private project cited above. Extraction, wrappers, examples, additional tests and prelaunch fixes were prepared with AI assistance. Commit metadata does not establish whether the original implementation was independently authored or AI-assisted; that distinction requires owner confirmation.
