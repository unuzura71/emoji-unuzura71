import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One emoji, chosen to make a stranger smile: open arms, a warm
// face, nothing to decode — a hug offered at first glance, readable
// by anyone, of any age, in any place.
const TEXT = "🤗";

// Gate: UTF-8 text of 1 to 8 characters, not only white space, and
// exactly one emoji — nothing else, no words, no caption.
if (TEXT.trim().length === 0) throw new Error("entry must not be blank");
if ([...TEXT].length < 1 || [...TEXT].length > 8) {
  throw new Error(`expected 1-8 characters, got ${[...TEXT].length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
