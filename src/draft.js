/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let maxRow = [];
  let maxCol = [];
  const newGrid = Array.from({ length: grid.length }, () => []);

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (!maxCol[i]) {
        maxCol[i] = grid[j][i];
      } else if (maxCol[i] < grid[j][i]) {
        maxCol[i] = grid[j][i];
      }

      if (!maxRow[i]) {
        maxRow[i] = grid[i][j];
      } else if (maxRow[i] < grid[i][j]) {
        maxRow[i] = grid[i][j];
      }
    }
  }

  let diff = 0;
  for (let i = 0; i < grid.length; i += 1) {
    // Here we are calculating difference
    // console.log
    for (let j = 0; j < grid[i].length; j += 1) {
      if (maxRow[i] > maxCol[j]) {
        newGrid[i][j] = maxCol[j];

        diff += maxCol[j] - grid[i][j];
      } else {
        newGrid[i][j] = maxRow[i];

        diff += maxRow[i] - grid[i][j];
      }
    }
  }

  return diff;
};

const grid = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0],
];

console.log(maxIncreaseKeepingSkyline(grid));
