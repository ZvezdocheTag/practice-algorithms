/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  const patternOpen = '(';
  const patternClose = ')';
  const toArr = S.split('');

  let res = '';
  let o = 0;
  let prev = 0;
  let i = 0;
  const splitPos = [];

  while (i < toArr.length) {
    prev = o;

    if (toArr[i] === patternOpen) {
      o += 1;
    }
    if (toArr[i] === patternClose) {
      o -= 1;
    }

    if (o === 0) {
      splitPos.push(i);
    }

    i += 1;
  }

  splitPos.forEach((d, idx) => {
    let start = 0;
    let end = d;

    if (idx === 0) {
      res += S.slice(0 + 1, d);
    } else {
      res += S.slice(splitPos[idx - 1] + 2, d);
    }
  });

  return res;
};
const b = '(()())(())(()(()))';
const a = '(()())(())';
console.log("removeOuterParentheses('(()())(())')", removeOuterParentheses(b));
// console.log("removeOuterParentheses('(()())(())')", removeOuterParentheses(a));
// console.log(b.slice(0 + 1, 5));
// console.log(b.slice(5 + 2, 9));
// console.log(b.slice(9 + 2, 17));
