import { bubbleSort } from '../utils/sort';
import { generateEmptyMatrix } from '../utils/matrixUtils';

describe('Global Utils', () => {
  it('Generate Empty Matrix', async () => {
    const n = 2,
      m = 3;
    expect(generateEmptyMatrix(n, m)).toEqual([[0, 0, 0], [0, 0, 0]]);
  });

  it('bubbleSort', async () => {
    expect(bubbleSort([7, 5, 2, 4, 3, 9])).toEqual([2, 3, 4, 5, 7, 9]);
  });
});
