# Engineering lessons and limitations

## Preserve evidence before improving presentation

Historical research has value independent of the latest page layout. A clean current data model must remain traceable to preserved inputs. The migration design therefore treats missing or corrupt evidence as a stop condition and avoids reconstructing unavailable history from plausible assumptions.

## A website update is several transactions

Fact refresh, article generation, editorial approval and public deployment affect different records. Combining them into one permissive action makes failures difficult to diagnose. The inspected pipeline separates those boundaries and validates before promotion.

## Deployment success is scoped

GitHub's successful run shows that its configured tracked-content checks and deployment completed. Private archives were outside that CI scope. The later October 31, 2026 full local release run separately passed 777 of 778 tests, with zero failures and one existing Windows symlink-capability skip. It included the private historical-evidence replay. The saved receipt and log support that result; this showcase's five tests do not reproduce it.

## Preserve the failure and repair chronology

The initial review found preservation and fixture failures. The later release verification followed repairs to fixtures, temporary-directory isolation, Windows browser startup, deterministic output and identity checks, plus recovery of authenticated historical originals. Historical fingerprints and publishing gates were retained; the final full suite had no failures.

Earlier tracker reports concerned publication file placement/completion and disappearing news images after publication. Later live Edge checks covered image loading, news/article navigation, statistics and season filtering at desktop and 390px widths. Those snapshot checks did not reproduce a fresh article-publication cycle, so they do not establish that every publishing behavior is defect-free.

## Presentation gap

The existing repository README primarily addresses an operator. This public showcase starts with visitor functionality and then explains data ownership, migration, transactions and validation. It gives a reviewer an engineering story without requiring access to private source material.

## Limits

No comprehensive accessibility, performance or cross-browser benchmark was executed. The recorded live checks used Edge; hosted validation used Chrome. The complete production application and all history were not audited for every possible defect. League data, third-party images and external-source rights are excluded from this licensed source release.
