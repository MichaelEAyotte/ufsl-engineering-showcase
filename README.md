# UFSL — Fantasy Sports Data and Publishing

A case study and production-derived JavaScript season-aggregation module from a static fantasy sports website. The live site lets visitors browse league news, seasons, members and historical results; this repository provides the bounded source module and fictional examples for review.

**Live demonstration:** [ufsl.club](https://ufsl.club/). The homepage returned HTTP 200 during the October 31, 2026 review. This was a reachability check, not a complete live-site functional test.

## Why it exists

League history spans multiple seasons and source systems. Rebuilding the site required more than moving pages: it required preserving evidence, reconciling identities and separating facts from generated editorial content. I wanted current updates to fit a repeatable process without silently changing historical research.

## My contribution

My work covers the website modernization, canonical data structure, migration and reconciliation tooling, shared member-statistics logic, weekly publishing workflow and deployment validation. The inspected source contains Node.js scripts, tests, architecture contracts and historical-preservation documentation. ESPN is an external data source; I do not claim ownership of its platform or data rights.

## What visitors can evaluate

- A browser-based view of league news, member profiles, seasons and history.
- A canonical data approach covering the documented 2012–2026 season range.
- A distinction between historical labels and current team-name display metadata.
- An engineering process that validates factual and editorial outputs before deployment.

![Sanitized UFSL data pipeline](assets/architecture.svg)

## Architecture and decisions

The site uses HTML, CSS and JavaScript with JSON data. Offline tools turn preserved sources into reviewed canonical data. Browser adapters and shared statistics logic consume that canonical layer. Weekly recap data and article publication have separate change boundaries.

The [architecture](ARCHITECTURE.md) explains the flow. The [migration case study](DATA-MIGRATION.md) explains missing data, provenance, identity and preserved historical evidence. The [validation and CI/CD walkthrough](VALIDATION-AND-CICD.md) distinguishes full local evidence from tracked checkout validation.

## Testing and current status

The initial October 31, 2026 review found private-suite preservation and fixture failures. Later that day, the final production revision completed the full suite with **778 tests: 777 passed, zero failed and one existing Windows symlink-capability skip**, in 650.84 seconds. The run included the private historical-evidence replay. These are previously executed release results verified against the saved run receipt and log; this showcase review did not rerun that private suite.

The later production release also passed hosted tracked-content validation and deployment, followed by bounded live checks of statistics, season filtering, news, articles and mobile navigation. The full local evidence result and hosted CI remain separate claims. The five standalone tests in this repository cover only the extracted aggregation module. See the [verification chronology](VALIDATION-AND-CICD.md) and [limitations and engineering lessons](ENGINEERING-NOTES.md).

## Safe review route

Start with the public website and this case study. The private source contains league/member research, operational publishing contracts and archive references; it should remain private. This showcase includes no league account identifiers, private payloads, authenticated data-fetch commands, production workflow files or raw migration archives.

The [synthetic migration example](evaluation/MIGRATION-EXAMPLE.md) illustrates identity and missing-value handling without copying real league records.


## Run the code in this repository

Requires Node.js 22 or newer (validated on Node.js 24). No package installation, credentials, network connection or deployment is needed.

```text
npm test
npm run demo
```

See [source provenance, scope and evaluation](CODE-REVIEW.md). The five passing tests exercise the standalone code, not the private production system. This repository has no deployment workflow. The selected source, tests, fictional examples and original documentation/diagrams are available under the [MIT License](LICENSE), copyright Michael E. Ayotte.

## Review and maintenance

The standalone tests run in a test-only GitHub Actions workflow with read-only repository access, no deployment and no production secrets. They do not establish live-system acceptance. Report a suspected sensitive-data exposure privately to [Michael E. Ayotte](https://github.com/MichaelEAyotte); do not place the sensitive value in an issue.

[Publication scope, licensing and release checks](PUBLICATION.md).
