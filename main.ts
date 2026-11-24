import * as fs from "fs";
import * as path from "path";

// One Line, One Minute: The Vending Machine Pickup Line Contest — make.fun entry.
// Writes the vending machine pickup line to /output/entry.txt.
// The judge compares entries two at a time on how funny and fresh the line is.
const ENTRY: string = "Hey gorgeous, I've got every snack you crave — but you're the only one I can't dispense. Care for a date and a free drink?"; // 124 chars, limit 200

function main(): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync(path.join("/output", "entry.txt"), ENTRY + "\n", "utf-8");
  console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
}

main();
