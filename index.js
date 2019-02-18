'use strict'
/**
 * @param {Number} num1 - operand
 * @param {Number} num2 - operand
 * @returns {Object}, {
 *                          add: Number,
 *                     subtract: Number,
 *                       divide: Number,
 *                     multiply: Number
 *                     }
 */

module.exports = (num1, num2) => {
  return {
    add: (() => {
      return num1 + num2
    })(),
    subtract: (() => {
      return num1 - num2
    })(),
    divide: (() => {
      return num1 / num2
    })(),
    multiply: (() => {
      return num1 * num2
    })()
  }
}
