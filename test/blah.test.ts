import { pairSum, recursionSum, pairSumSequence } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(pairSum(1, 1)).toEqual(2);
  });

  it('Recursion sum', () => {
    expect(recursionSum(4)).toEqual(10);
  });

  it('Sum via forloop sum', () => {
    expect(pairSumSequence(4)).toEqual(16);
  });
});
