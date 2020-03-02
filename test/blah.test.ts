import {
  pairSum,
  recursionSum,
  uniqueOccurrences,
  pairSumSequence,
  diStringMatch,
  searchBST,
  TreeNode,
  arrayPairSum,
  decompressRLElist,
  numberOfSteps,
  divisorGame,
  relativeSortArray,
} from '../src';

describe('blah', () => {
  it('Relative Sort Array ', () => {
    let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
    let arr2 = [2, 1, 4, 3, 9, 6];
    let expected = [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19];
    expect(relativeSortArray(arr1, arr2)).toEqual(expected);
  });
  it('Division Game ', () => {
    expect(divisorGame(4)).toEqual(true);
  });

  it('Decompress Run-Length Encoded List: ', () => {
    expect(decompressRLElist([1, 2, 3, 4])).toEqual([2, 4, 4, 4]);
  });

  it('Array Partition I with positive values', () => {
    expect(numberOfSteps(14)).toEqual(6);
  });

  it('Array Partition I with positive values', () => {
    expect(arrayPairSum([1, 4, 3, 2])).toEqual(4);
  });

  it('Array Partition I with negative values', () => {
    expect(arrayPairSum([-2290, -7908, 2833, 6214])).toEqual(-5075);
  });

  it('Basic Sum', () => {
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

  it('DI String Match mixed', () => {
    expect(diStringMatch('IDID')).toEqual([0, 4, 1, 3, 2]);
  });

  it('DI String Match only with Increasing', () => {
    expect(diStringMatch('III')).toEqual([0, 1, 2, 3]);
  });

  const tree: TreeNode = {
    val: 4,
    right: { val: 7, right: null, left: null },
    left: {
      val: 2,
      right: { val: 3, right: null, left: null },
      left: { val: 1, right: null, left: null },
    },
  };

  it('Search and found second level value inside tree with Breadth First Search', () => {
    expect(searchBST(tree, 2)).toEqual({
      val: 2,
      right: { val: 3, right: null, left: null },
      left: { val: 1, right: null, left: null },
    });
  });

  it('Search and Not Found value via BST', () => {
    expect(searchBST(tree, 9)).toEqual(null);
  });
});
