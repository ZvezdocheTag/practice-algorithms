/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
  const matLength = mat.length;
  const [n1] = mat;
  const rowLength = n1.length;

  let diagonals = {};

  mat.forEach((row, rowIdx) => {
    row.forEach((c, cellIdx) => {
      const diff = rowIdx - cellIdx;
      if (!diagonals[diff]) {
        diagonals[diff] = [{ val: c }];
      } else {
        diagonals[diff] = [...diagonals[diff], { val: c }].sort(
          (a, b) => a.val - b.val
        );
      }
    });
  });

  const res = Array.from({ length: matLength }, (_, k) => []);

  mat.forEach((row, rowIdx) => {
    row.forEach((c, cellIdx) => {
      const diff = rowIdx - cellIdx;
      res[rowIdx][cellIdx] = diagonals[diff].shift().val;
    });
  });
  return res;
};

const mat = [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]];
console.log('diagonalSort -> diagonalSort', diagonalSort(mat));

console.log([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3].slice(0, 4));
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
