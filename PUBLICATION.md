# Publication scope and release checks

Owner-approved public release, reviewed October 31, 2026. Michael E. Ayotte authorized MIT licensing, promotion of the reviewed branch to `main`, and public publication of this selected repository. This document records the release scope; the repository visibility setting determines whether it is publicly accessible.

## Source and licensing

The season-aggregation function block matches private UFSL commit `5376d91c1bcd6883431d37d904217d17d46b61f7` exactly. Its original source addition is attributed to Michael E. Ayotte; no conflicting source-file notice was found. Wrappers, tests and fictional examples were prepared with AI assistance. The full private publishing/history system is outside this release.

The [MIT License](LICENSE), copyright 2026 Michael E. Ayotte, applies to the selected source, tests, fictional examples and original diagrams and documentation in this repository. Preserve its copyright and permission notice in copies or substantial portions. [Source provenance and limitations](CODE-REVIEW.md) describe the extraction and rights review.

The license does not cover the separately hosted production website, private league/member data, ESPN data or services, third-party images, or private migration archives. Product names identify the original project or dependencies and do not imply endorsement.

## Validation scope

The release checks run `npm test` (**5 passing tests**) and `npm run demo` successfully on Node 24. No npm runtime or development dependencies are declared. Keep the package's `private` flag: public GitHub visibility does not publish an npm package.

The GitHub Actions workflow runs standalone tests and the example on `main` and the review branch. It has read-only repository permission, pinned actions, disabled persisted checkout credentials, no production secrets and no deployment step. Actionlint and local Markdown-link checks are part of the release verification. Hosted runner and runtime updates remain external dependencies.

The fetched reachable history and final release changes are checked with Gitleaks and private-address, credential and sensitive-content patterns, alongside Git integrity checks. No finding was identified in the reviewed candidate history. No operational screenshot, binary archive, account payload, private endpoint or client record is bundled. These checks reduce risk; they do not prove every possible sensitive detail is absent.

## Publication verification

Before promotion, compare the remote heads with the reviewed candidate and require successful test-only CI. After public publication, verify the default README, MIT license, anonymous clone, tests and example. The private production system and its deployments remain outside these checks.
