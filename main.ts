// One-Liner Laughs — writes a single original one-line joke to /output/entry.txt
// Deterministic: the same joke is produced on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  'My fridge started a podcast about me — episode one: "He Opens Me at 2 AM and Just Stares."';

// Guard the gate: one line, 1–200 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error("Joke fails the one-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
