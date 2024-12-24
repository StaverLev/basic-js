const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const countS1 = {};
  const countS2 = {};

  for (let letter of s1) {
    countS1[letter] = (countS1[letter] || 0) + 1;
  }

  for (let letter of s2) {
    countS2[letter] = (countS2[letter] || 0) + 1;
  }

  let commonCharCount = 0;
  for (let key in countS1) {
    if (countS2.hasOwnProperty(key))
      commonCharCount += Math.min(countS1[key], countS2[key]);
  }
  return commonCharCount;
}

module.exports = {
  getCommonCharacterCount,
};
