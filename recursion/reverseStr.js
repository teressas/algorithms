/* 
  Recursively reverse a string
  helpful methods:

  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {}

module.exports = { reverseStr };

/*****************************************************************************/

/**
 * input: abc
 * output: cba
 * return: fn + a
 * return: fn + b
 * return fn + c
 * return ''
 * '' + c + b + a
 *
 * - Time: O(n) linear, n = str.length
 * - Space: O(2n) -> O(n) linear. Every char of the string is copied into a new
 *    string and one function call added to the stack for each char.
 */
function reverseStr(str) {
  if (str === "") {
    return "";
  }
  const strLessFirst = str.slice(1);
  return reverseStr(strLessFirst) + str[0];
}

function reverseStr2(str, i = str.length - 1) {
  if (i === 0) {
    return str[i];
  } else {
    return str[i] + reverseStr2(str, i - 1);
  }
}
