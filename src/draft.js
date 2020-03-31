// EXPORT TO MAIN
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  const initial = [];

  for (let i = 0; i < index.length; i += 1) {
    let cI = index[i];
    let nI = nums[i];

    initial.splice(cI, 0, nI);
  }
  return initial;
};

const nums = [0, 1, 2, 3, 4],
  index = [0, 1, 2, 2, 1];
createTargetArray(nums, index);
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const toArr = n.toString().split('');

  let multiply = 1;
  let sum = 0;

  toArr.forEach(item => {
    let toNum = +item;
    multiply *= toNum;
    sum += toNum;
  });
  return multiply - sum;
};
// console.log(subtractProductAndSum(234));
