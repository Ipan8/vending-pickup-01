// Vending Machine Pickup Line — make.fun entry
// "One Line, One Minute: The Vending Machine Pickup Line Contest"
//
// The joke, in one breath: a vending machine is the worst flirt on earth
// because it literally hands out everything it owns — except the one thing
// it actually wants. The machine brags about its stock first ("every snack
// you crave"), then admits the one item on its menu it can never dispense:
// the person standing in front of it. The punchline flips the transaction
// around — instead of the human paying the machine, the machine offers the
// human a date and a free drink. Flattery, a humble-brag, and a bribe,
// in that order. That is the whole routine, and it fits in 122 characters.
//
// Approach: build the line from four named fragments so each beat of the
// joke is visible and editable on its own, guard the assembled line
// against the 200-character contest limit, then write it to the file
// the judge reads. Nothing fancy — the line is the product, the code
// just delivers it intact.

import * as fs from "node:fs";
import * as path from "node:path";

// Where the judge looks for the finished line.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = path.join(OUTPUT_DIR, "entry.txt");

// The contest caps a line at 200 characters. Ours is 122, with room to spare.
const MAX_CHARS = 200;

// The four beats of the joke, kept apart so the structure stays readable.
const GREETING = "Hey gorgeous, ";
const BOAST = "I've got every snack you crave — ";
const TWIST = "but you're the only one I can't dispense. ";
const INVITATION = "Care for a date and a free drink?";

// Stitch the beats together in order. No extra spaces are added here —
// each fragment already carries its own trailing space where it needs one.
function assemblePickupLine(): string {
  return GREETING + BOAST + TWIST + INVITATION;
}

// Refuse to ship a line that breaks the contest rules: it must be
// non-empty and it must fit inside the character limit.
function validateLine(line: string): string {
  const trimmed = line.trim();
  if (trimmed.length === 0) {
    throw new Error("Pickup line is empty — nothing to submit.");
  }
  if (trimmed.length > MAX_CHARS) {
    throw new Error(
      `Pickup line is ${trimmed.length} chars, over the ${MAX_CHARS}-char limit.`,
    );
  }
  return trimmed;
}

// A quick self-check for the log: how long the line is, and how many
// words it spends on the setup versus the payoff. Handy when tuning
// a line to land under the limit without losing the punchline.
function summarizeLine(line: string): string {
  const words = line.split(/\s+/).filter(Boolean);
  return `${line.length} chars, ${words.length} words`;
}

// Make sure the output folder exists, then write the line plus one
// trailing newline, exactly as the judge expects to read it.
function writeEntry(line: string): void {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, line + "\n", "utf-8");
}

// Run the whole pipeline: assemble, validate, write, and say what happened.
function main(): void {
  const line = validateLine(assemblePickupLine());
  writeEntry(line);
  // The summary proves the delivered line is the one we counted: 122 chars.
  console.log(`Wrote ${line.length} characters to ${OUTPUT_FILE}`);
  console.log(`Entry summary: ${summarizeLine(line)}`);
}

main();
