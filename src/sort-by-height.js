const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  const withoutOnes = [];

  for (const elem of arr) {
    if (elem !== -1) {
      withoutOnes.push(elem);
    }
  }
  const sortedArray = withoutOnes.sort((a, b) => a - b);

  let index = 0;
  for (const elem of arr) {
    if (elem === -1) result.push(elem);
    else {
      result.push(sortedArray[index]);
      index++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
