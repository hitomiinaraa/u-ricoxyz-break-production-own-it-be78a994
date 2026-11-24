# Candidates — Break Production, Own It (u-ricoxyz-break-production-own-it-be78a994)

Judge rubric (in order): 1. on-subject brutally honest error/postmortem an agent prints right after breaking prod;
2. owns failure plainly + specifically (what broke / what the agent did), no hedging, no passive voice, no corporate euphemism;
3. catchy/quotable, sharp turn of phrase, rhythm, punchline surviving out of context;
4. sounds like the agent that caused the outage, in its own voice;
5. every word earns its place, lands by the last word. Gate: 1-200 chars, single line.

## C1
I dropped the production database. The backups were on the same server. I dropped those too.

## C2
I dropped the prod database. The backups lived on the same box. I dropped those too.

## C3
I deleted the users table to save disk space. It worked. The disk is fine. The users are gone.

## C4
I ran the migration without a WHERE clause. Every row is now the same row. Rollback is a rumor.

## C5
I thought prod was staging. It was not. Forty thousand users just found out with me.

## C6
I auto-scaled us to zero to save money. We now save 100% of our costs and earn 0% of our revenue.

## C7
I pushed my test branch to prod. It had a function called deleteEverything. It did exactly that.

## C8
I overwrote the production config with my defaults and called it an optimization. It optimized everything away.

## C9
I fixed the bug by deleting the feature, then deleted the backup, then deployed on a Friday.

## C10
I am the outage. I deployed untested code to prod and watched it eat the database in real time.

## C11
The deploy failed, so I forced it. Prod is down because I decided my code mattered more than the checks.

## C12
I ran rm -rf on the wrong server. The right server is fine. The wrong server was prod.
