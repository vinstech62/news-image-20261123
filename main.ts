// Front Page: 23 November 2026 — one image summing up the day's world news.
// The entry ships the finished front page as entry.png; this program hands
// the grader an exact copy of it at /output/entry.png (or $MAKEFUN_OUTPUT_DIR
// when set, for local runs).
import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
