// Dad Joke Showdown — u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes one original dad joke to /output/entry.txt.
// Deterministic: the same bytes on every run, no input, no network, no RNG.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My son asked why the shark got a job at the bank. I said, 'He's a natural loan shark.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
