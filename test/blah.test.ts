import {
  pairSum,
  recursionSum,
  uniqueOccurrences,
  pairSumSequence,
} from '../src';

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

  it('Uniq Occurence', () => {
    expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toEqual(true);
  });

  const lG = [
    26,
    2,
    16,
    16,
    5,
    5,
    26,
    2,
    5,
    20,
    20,
    5,
    2,
    20,
    2,
    2,
    20,
    2,
    16,
    20,
    16,
    17,
    16,
    2,
    16,
    20,
    26,
    16,
  ];
  it('Uniq Occurence Longer', () => {
    expect(uniqueOccurrences(lG)).toEqual(false);
  });

  it('Uniq Occurence With Negative', () => {
    expect(uniqueOccurrences([0, 0, -2, -1, 4, 8, -3, 9, 6])).toEqual(false);
  });
});
