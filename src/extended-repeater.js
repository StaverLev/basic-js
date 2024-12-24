const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  const strToRepeat = String(str);
  const additionToRepeat = String(addition);

  const additionPart = new Array(additionRepeatTimes)
    .fill(additionToRepeat)
    .join(additionSeparator);

  const mainPart = strToRepeat + additionPart;

  const resultStr = new Array(repeatTimes).fill(mainPart).join(separator);

  return resultStr;
}

module.exports = {
  repeater,
};
