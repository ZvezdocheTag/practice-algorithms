/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  let similarPosition = {};
  let operation = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (!similarPosition[s.charAt(i)]) {
      similarPosition[s.charAt(i)] = 1;
    } else {
      similarPosition[s.charAt(i)] += 1;
    }
  }

  for (let b = 0; b < t.length; b += 1) {
    if (!similarPosition[t.charAt(b)]) {
      operation += 1;
    } else {
      similarPosition[t.charAt(b)] -= 1;
    }
  }

  return operation;
};

// let s = 'bab',
//   t = 'aba';
let s = 'leetcode',
  t = 'practice';

minSteps(s, t);
