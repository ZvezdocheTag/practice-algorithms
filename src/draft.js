/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let total = 0

  let gen = Array.from({ length: n }, (_, idx) => {
    if (idx === n - 1) {
      console.log(total)
      return -total
    }
    let firstRandom = getRandomArbitrary(-10, 10)
    let toFloor = Math.floor(firstRandom)
    total += toFloor

    return toFloor
  })

  console.log(
    gen.reduce((curr, next) => {
      return curr + next
    }, 0),
    'NAY'
  )
  return gen
}

console.log(sumZero(5))

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}
