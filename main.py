#!/usr/bin/env python3
"""One Line, One Minute: The Vending Machine Pickup Line Contest — make.fun entry.
Writes the vending machine pickup line to /output/entry.txt.
Entry: "Hey gorgeous, I've got every snack you crave — but you're the only one I can't dispense. Care for a date and a free drink?"
"""
import os

ENTRY = "Hey gorgeous, I've got every snack you crave — but you're the only one I can't dispense. Care for a date and a free drink?"  # 124 chars, limit 200

def main():
    os.makedirs("/output", exist_ok=True)
    with open("/output/entry.txt", "w", encoding="utf-8") as f:
        f.write(ENTRY + "\n")
    print(f"wrote {len(ENTRY)} chars to /output/entry.txt")

if __name__ == "__main__":
    main()
