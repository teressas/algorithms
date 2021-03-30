/* 
Given to alumni by Riot games in 2021

Given a string containing words between multiple different separators,
return an array of all the words that are duplicates.

Separators:
  \t
  -
  ;
  :
  and a spaces
*/

const str1 = "to be,; --or\tnot  : ;;; to-:: be";
const expected1 = ["to", "be"];

/**
 * Finds all duplicated words in a string with the following separators:
 * spaces, tabs, hyphens, commas, colons, and semicolons.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s
 * @returns {Array<string>} The found dupe words.
 */
function dupesBetweenSeparators(s) {}

module.exports = { dupesBetweenSeparators };

/*****************************************************************************/

/**
 * Finds all duplicated words in a string with the following separators:
 * spaces, tabs, hyphens, commas, colons, and semicolons.
 * Time: O(n + m) -> O(n) linear. n = s.length, m = separators.length.
 * Space: O(n + m) -> O(n) linear.
 * @param {string} s
 * @param {string} separators A string of characters to server as separators.
 *    This param wasn't part of the spec, but makes the function more flexible.
 * @returns {Array<string>} The found dupe words.
 */
function dupesBetweenSeparators(s, separators = " :;-,\t") {
  // Used to avoid a nested loop over each separator.
  const separatorsTable = {};

  for (let i = 0; i < separators.length; i++) {
    separatorsTable[separators[i]] = true;
  }

  const seen = {};
  const dupes = [];

  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] in separatorsTable) {
      if (word in seen) {
        word.length && dupes.push(word);
      } else {
        seen[word] = 1;
      }
      word = "";
    } else {
      word += s[i];
    }
  }

  // Capture last word when it has no separator after it.
  word.length && dupes.push(word);
  return dupes;
}
