import { bubbleSort } from '../utils/sort';

describe('Global Utils', () => {
  it('bubbleSort', async () => {
    expect(bubbleSort([7, 5, 2, 4, 3, 9])).toEqual([2, 3, 4, 5, 7, 9]);
  });
});
