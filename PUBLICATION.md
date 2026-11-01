# Publication scope and release checks

This repository was publicly released under MIT on October 31, 2026. The current distribution policy below is prospective and does not revoke the permissions already granted under MIT. The source, tests, examples and diagrams are unchanged by this licensing correction.

## Current distribution policy

Eligible owner-controlled, protectable original selected source, documentation, tests, fictional examples and diagrams in this distribution are offered under the unmodified [PolyForm Noncommercial License 1.0.0](LICENSE). This is source-available software, not OSI-approved open source. The official license text defines all permitted purposes, including its provisions for noncommercial organizations; this documentation does not narrow those permissions.

Commercial uses outside the license's permitted purposes require separate written permission from [Michael E. Ayotte](https://github.com/MichaelEAyotte). The [Required Notice and scope](NOTICE) accompany the license. No copyright is claimed in material that is not protectable, including any unprotectable AI-generated output. [Contribution terms](CONTRIBUTING.md) preserve contributor ownership; contributor-owned material requires separate written rights before it can be included in a separate commercial license.

## Earlier MIT publication

The [publicly released snapshot's MIT license](https://github.com/MichaelEAyotte/ufsl-engineering-showcase/blob/8fbf9822f59095aab21f24f29c298ffd30c68e60/LICENSE) remains in the preserved history. MIT was first added in [commit e0e9f1f](https://github.com/MichaelEAyotte/ufsl-engineering-showcase/commit/e0e9f1f78e13e0cddfb877893d96741124fbcbd8).

Earlier MIT permissions continue, including commercial use, modification and redistribution subject to MIT's conditions. The same unchanged code remains obtainable from those historical MIT commits. The current distribution policy cannot revoke those prior grants or require separate commercial permission for uses already authorized by them. No history is rewritten and no retroactive restriction is asserted.

## Source and scope

The season-aggregation function block matches private UFSL commit `5376d91c1bcd6883431d37d904217d17d46b61f7` exactly. Its original source addition is attributed to Michael E. Ayotte; no conflicting source-file notice was found. Wrappers, tests and fictional examples were prepared with AI assistance. The full private publishing/history system is outside this release.

The license applies only to protectable original material and rights the owner has authority to license. Attribution and an exact source match do not independently prove exclusive copyright ownership. [Source provenance and limitations](CODE-REVIEW.md) describe the extraction and rights review. Preserve the notices required by the applicable license, including the Required Notice in [NOTICE](NOTICE) for this distribution.

The license does not cover the separately hosted production website, private league/member data, ESPN data or services, third-party images, or private migration archives. Product names identify the original project or dependencies and do not imply endorsement.

## Validation scope

The release checks run `npm test` (**5 passing tests**) and `npm run demo` successfully on Node 24. No npm runtime or development dependencies are declared. Keep the package's `private` flag: public GitHub visibility does not publish an npm package.

The GitHub Actions workflow runs standalone tests and the example on `main` and the review branch. It has read-only repository permission, pinned actions, disabled persisted checkout credentials, no production secrets and no deployment step. Actionlint and local Markdown-link checks are part of the release verification. Hosted runner and runtime updates remain external dependencies.

The fetched reachable history and final release changes are checked with Gitleaks and private-address, credential and sensitive-content patterns, alongside Git integrity checks. No finding was identified in the reviewed candidate history. No operational screenshot, binary archive, account payload, private endpoint or client record is bundled. These checks reduce risk; they do not prove every possible sensitive detail is absent.

## Publication verification

Before updating `main`, compare the remote head with the reviewed base, verify the official license bytes and unchanged implementation files, and run the standalone tests, example and documentation-link checks. After publication, verify the default README, the unmodified PolyForm license and Required Notice, the continuing historical MIT license link, unauthenticated source access and the test-only GitHub Actions result. The private production system and its deployments remain outside these checks.
