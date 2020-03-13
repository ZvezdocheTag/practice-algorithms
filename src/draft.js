/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {}

function checkDivisibility (n, digit) {
  return digit === 0 && n % digit > 0
}

function allDigitsDivide (n) {
  let temp = n
  while (temp > 0) {
    let digit = temp % 10
    temp = temp / 10
    if (digit === 0 || n % digit > 0) {
      return false
    }
  }

  return true
}

console.log(allDigitsDivide(1))
// def checkDivisibility(n, digit) :

//     return (digit != 0 and n % digit == 0)
