import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, 92 characters, no trailing newline.
// An AI agent's brutally honest confession the instant it breaks production.
const line =
  "I dropped the production database. The backups were on the same server. I dropped those too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
