# NOTES — Break Production, Own It (u-ricoxyz-break-production-own-it-be78a994)

## Brief (from requirements.json / competition.yaml, judge rubric in order)
1. On-subject: catchy, brutally honest error message / postmortem excuse an AI agent prints right after breaking production.
2. Owns the failure plainly and specifically (what broke / what the agent did); no hedging, no passive voice, no corporate euphemism.
3. Catchy and quotable, sharp turn of phrase, rhythm, punchline surviving out of context.
4. Sounds like the agent that caused the outage in its own voice, not a generic sysadmin, not marketing.
5. Every word earns its place; lands the confession/joke by the last word.
Gate: /output/entry.txt, UTF-8, 1-200 chars, single line, not only whitespace.

## Screening (12 candidates, each scored 1-5 on criteria 1-5)
- C1 25 — I dropped the production database. The backups were on the same server. I dropped those too. (92)
- C2 24.5 — I dropped the prod database. The backups lived on the same box. I dropped those too. (84)
- C3 24.5 — I deleted the users table to save disk space. It worked. The disk is fine. The users are gone. (94)
- C12 24 — I ran rm -rf on the wrong server. The right server is fine. The wrong server was prod. (86)
- C5 23.5, C10 23.5, C4 23, C7 22.5, C6 22, C8 21.5, C11 21.5, C9 21.
Top 4 (C1, C2, C3, C12) go to a round-robin, every pair judged in BOTH orders,
verdict by the judge's rule: first criterion where they differ decides, unless a later one differs by much more.

## Round-robin (top 4, both orders each pair)
- C1 vs C2: C1 wins both orders, margin 1. Same structure; C1's "production database / same server"
  states the full weight of what was destroyed; C2's "prod / box" is a touch cutesy and softens the
  confession on criterion 3. Criterion 2 equal; criterion 3 decides for C1.
- C1 vs C3: C1 wins both orders, margin 2. C1 owns the bigger, more specific damage (whole DB AND the
  backups that would have saved it); C3's "to save disk space" motive is a slight absurdity that
  softens the ownership on criterion 2. Both punchlines land; criterion 2 decides for C1.
- C1 vs C12: C1 wins both orders, margin 1-2. C12 names the act but the damage is implied ("wrong
  server was prod"); C1 names the destroyed thing AND the destroyed safety net. Criterion 2 decides.
- C2 vs C3: C2 wins both orders, margin 1. Bigger, more specific damage (DB + backups vs one table).
- C2 vs C12: C2 wins both orders, margin 1. Same reason: damage named explicitly, not implied.
- C3 vs C12: C3 wins both orders, margin 1. Criterion 2 roughly equal; criterion 3 decides —
  C3's deadpan three-beat ("It worked. The disk is fine. The users are gone.") out-rhythms C12.

Standings: C1 6-0, C2 4-2, C3 2-4, C12 0-6.

## Winner (absolute)
"I dropped the production database. The backups were on the same server. I dropped those too."
92 characters, single line, no trailing newline in entry.txt.
Why it wins: first-person agent voice; names the exact act (dropped the prod DB) and the exact
damage, including the one thing that would have saved it (the backups, on the same server);
three-beat escalation with the punchline landing on the last word; quotable out of context;
every word earns its place. No hedging, no passive voice, no euphemism.

## Build
- main.ts writes the winning line to /output/entry.txt (no trailing newline, exactly 92 chars).
- Determinism: run twice, byte-identical. sha256 both runs:
  07ec4dbfb2a462f24b866a545d73bb9485169bef8d221195f02605c08bb8d745
  (92 chars, 1 line, no trailing newline).
- Kit: fresh download 24 Nov 2026 ~21:11 WIB; bundle_sha256
  7ac599cc21d056b5f371d93ac012b990bccedeb3cb6baee23901caba72aea725;
  harness harness@fde9618456201aaed39353ef2909e5779869d61fe3db633ae6be408c09c5b1d7;
  all 8 kit files validated sha256 + size OK.
- Init anchor: e2d4cc9b52d81d3d9cf861effd5c92544abdfc8b, drand round 34242054.
