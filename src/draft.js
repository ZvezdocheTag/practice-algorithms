/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let res = []
  for (let i = 0; i < nums.length; i += 1) {
    res.push(nums.filter(item => item < nums[i]).length)
  }
  return res
}

smallerNumbersThanCurrent([8, 1, 2, 2, 3])
