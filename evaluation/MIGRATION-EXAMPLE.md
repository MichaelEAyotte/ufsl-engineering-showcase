# Synthetic identity and missing-data example

**Fictional data; explanatory example, not a production export or executed migration test.**

| Season | Stable person | Captured team label | Current display label | Wins | Losses | Historical weekly scores |
|---|---|---|---|---:|---:|---|
| Sample A | person-a | Cedar | Cedar United | 6 | 4 | Unavailable |
| Sample B | person-a | Cedar United | Cedar United | 7 | 3 | Available in this fictional case |

The career record is 13 wins and 7 losses only because both season records are explicitly attributed to the same established person. The historical label �Cedar� remains intact for Sample A. A current rename changes a current selector, not the captured historical label.

Missing weekly scores do not become zeroes and do not support invented individual matchups. If a third source contains only a team name with no reliable human association, the example's aggregation must stop for review rather than attaching it automatically to person-a.

## Review assertions

- Current-name changes preserve historical labels and season totals.
- An unresolved person association blocks attribution.
- Null/unavailable fields remain distinguishable from recorded zeroes.
- Repeated transformation of identical approved inputs produces identical output.
- Corrupt evidence is rejected instead of repaired implicitly.

These assertions explain the inspected project's design. This packet contains no production implementation or claim that a new test suite was run.
