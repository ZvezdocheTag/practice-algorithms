var relativeSortArray = function (arr1, arr2) {
  let sorted = []
  let addNotSorted = []

  while (arr2.length > 0) {
    let val = arr2.shift()
    for (let i = 0; i < arr1.length; i += 1) {
      if (arr1[i] === val) {
        sorted.push(arr1[i])
        arr1[i] = null
        // arr1.splice(arr1[i], 1)
      }
    }
  }

  let prep = arr1.sort((a, b) => a - b).filter(item => item !== null)
  //   console.log(sorted, prep)
  return sorted.concat(prep)
}

relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
