# Engineering lessons and limitations

## Preserve evidence before improving presentation

Historical research has value independent of the latest page layout. A clean current data model must remain traceable to preserved inputs. The migration design therefore treats missing or corrupt evidence as a stop condition and avoids reconstructing unavailable history from plausible assumptions.

## A website update is several transactions

Fact refresh, article generation, editorial approval and public deployment affect different records. Combining them into one permissive action makes failures difficult to diagnose. The inspected pipeline separates those boundaries and validates before promotion.

## Deployment success is scoped

GitHub's successful run shows that its configured tracked-content checks and deployment completed. Private archives were outside that CI scope. The private evidence audit is a separate claim with separate prerequisites.

## Open defects belong in the case study

The task tracker records a request to improve publication file-placement and completion validation, plus a report that news typewriter images disappear after a new article is published. The root cause of the image issue was not established by this review. These remain open follow-ups; no repair or regression result is claimed here.

## Presentation gap

The existing repository README primarily addresses an operator. This public showcase starts with visitor functionality and then explains data ownership, migration, transactions and validation. It gives a reviewer an engineering story without requiring access to private source material.

## Limits

No comprehensive current accessibility, performance or browser compatibility benchmark was executed. The public homepage was reachable. Source code and recent CI results were inspected, but the complete production application and all history were not audited for every defect. League data, images and external-source rights need separate review before any source or dataset release.
