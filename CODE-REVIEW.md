# Executable source scope

`src/season-statistics.js` contains the helper functions and `aggregateMemberSeasons` extracted from `ufsl/assets/js/member-career-statistics.js` at commit `5376d91c1bcd6883431d37d904217d17d46b61f7`. The original wrapper, canonical-data loader, identity matching, profile comparisons and production data are excluded. The aggregation logic is retained; the CommonJS export is new. Fixtures and focused tests were created for this review.

The function is useful for comparing completed and incomplete season records while preserving missing-value eligibility and tied extrema. It accepts normalized records; it is not an untrusted-input schema validator or ESPN client. Tests exercise ties, missing values, duplicate seasons, partial seasons, deterministic output and provenance. No actual league/member records are included.

This extracted subset does not implement migration or the entire canonical validation pipeline. The case study describes those private project capabilities separately. The selected code is licensed under [MIT](LICENSE); the package remains marked private to prevent accidental npm publication.

## Authorship and evidence boundary

The source functions derive from the private project cited above. The original module was added in commit `5de31eaa6a66aeb05dfa10c69e0a90a058b8abbd`, attributed to Michael E. Ayotte. The source file and its history contain no third-party copyright or license notice, and the extracted block matches the cited production version exactly. The owner authorized MIT licensing of this owner-controlled original code after that scoped provenance review.

Extraction, wrappers, fictional examples, additional tests and prelaunch fixes were prepared with AI assistance. This is not a claim that every original source line was written without AI assistance. No ESPN implementation, league dataset, private archive, production configuration or third-party asset is licensed or distributed by this repository. See [publication scope](PUBLICATION.md).
