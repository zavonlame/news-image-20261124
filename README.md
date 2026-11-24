# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/zavonlame/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/zavonlame/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

THE WORLD TODAY — a front page summing up Tuesday, 24 November 2026 in one image. Lead: a Russian cargo ship ablaze in the Gulf of Finland after a drone strike; the Kyiv region hit again; Gaza "poisoned for decades" in a new Oxfam/CEOBS report. 35 stories in total (3 big + 10 small illustrated panels + 22 short), every story tagged with its named source and certainty (REPORTED / CLAIM / ONGOING / OFFICIAL / ANALYSIS), spanning 7 regions, under a masthead dated "TUESDAY, 24 NOVEMBER 2026", with a 6-number KPI strip, a UTC timeline, a "WHERE IT HAPPENED" dot map, and a black DATE CHECK bar naming the previous days' big stories as excluded (COP31 breakdown, Alcaraz, Verstappen, the Benghazi corvette strike, BepiColombo, the Banten fire outbreak). Drawn entirely in code (Python/PIL) and committed as a single deterministic 1024×1024 PNG; every lead fact was checked against fresh sources the same morning.

## Run it

Requires Node 22 (standard library only — no Chrome, no network).

```sh
node main.ts
```

It writes `entry.png` to `$MAKEFUN_OUTPUT_DIR` (or `/output` by default). Two runs produce a byte-identical image.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ye09dzcs&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
