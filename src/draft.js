/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let res = [];
  let min = -n;
  let max = n;

  while (res.length !== n - 1) {
    if (!res.length) {
      res.push(-n);
    } else {
      res.push(n - res.length);
    }
  }
  const missed = res.reduce((curr, next) => curr + next, 0);

  return [...res, -missed];
};

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
