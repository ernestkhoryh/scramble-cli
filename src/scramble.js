/**
 * Returns a new string with the characters of `word` shuffled.
 * Example: "hello" → "lohel" (any permutation except identical)
 * @param {string} word
 * @returns {string}
 */
function scrambleWord(word) {
  // TODO: implement Fisher–Yates shuffle ⚙️
  return word; // ← placeholder so tests fail
}

/**
 * Checks if `guess` matches the original `word` (case‑insensitive).
 * @param {string} word
 * @param {string} guess
 * @returns {boolean}
 */
function isCorrect(word, guess) {
  // TODO: compare after normalising case & trimming 🧐
  return false; // ← placeholder so tests fail
}



const start = Date.now();


module.exports = { scrambleWord, isCorrect };

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);

