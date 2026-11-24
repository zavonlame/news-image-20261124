// news-image-20261124 — front-page delivery program.
//
// The entry is a single pre-rendered image, entry.png, sitting next to this
// file. This program does nothing clever: it places an exact copy of that
// image at $MAKEFUN_OUTPUT_DIR/entry.png so the grader sees the same bytes
// the builder produced. Node 22 standard library only — no browser, no
// network, no rendering at run time.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve paths from this file's own location, so the program works no
// matter which directory the grader invokes it from.
const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, 'entry.png');

// The grader sets MAKEFUN_OUTPUT_DIR; outside its container /output is the
// documented stand-in.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Deliver the image: create the destination if needed, then copy the bytes
// verbatim. The output is deterministic — the same input file always yields
// the same output file, byte for byte.
function deliver() {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(sourceImage, join(outputDir, 'entry.png'));
}

deliver();
