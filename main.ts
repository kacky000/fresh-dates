import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A dad joke for the dinner table: calendar dates and fruit dates, kept fresh in the fridge.
const joke = "I keep our calendar in the fridge. Your mother asked why. I told her I like my dates fresh.";

const limit = 200;
if ([...joke].length > limit) throw new Error(`joke is ${[...joke].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), joke);
