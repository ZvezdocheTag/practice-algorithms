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
  maxDepth,
  heightChecker,
  minDeletionSize,
  balancedStringSplit,
  judgeCircle,
  sumZero,
  sortArrayByParity,
  generateTheString,
  countNegatives,
  isPalindrome,
  minSteps,
  smallerNumbersThanCurrent,
  deepestLeavesSum,
  dayOfTheWeek,
  oddCells,
  sortOperations,
  subtractProductAndSum,
  createTargetArray,
  replaceElements,
  removeOuterParentheses,
  freqAlphabets,
  diagonalSort,
} from '../src';

describe('blah', () => {
  it(' Sort the Matrix Diagonally', () => {
    const mattrix = [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]];

    expect(diagonalSort(mattrix)).toEqual([
      [1, 1, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 3, 3],
    ]);
  });

  it('Decrypt String from Alphabet to Integer Mapping', () => {
    expect(freqAlphabets('10#11#12')).toEqual('jkab');
    expect(freqAlphabets('1326#')).toEqual('acz');
  });

  it('Remove Outermost Parentheses', () => {
    const b = '(()())(())(()(()))';
    const a = '(()())(())';
    const c = '()()';

    expect(removeOuterParentheses(a)).toEqual('()()()');
    expect(removeOuterParentheses(b)).toEqual('()()()()(())');
    expect(removeOuterParentheses(c)).toEqual('');
  });

  it('Replace Elements with Greatest Element on Right Side', () => {
    const arr = [17, 18, 5, 4, 6, 1];

    expect(replaceElements(arr)).toEqual([18, 6, 6, 6, 1, -1]);
  });

  it('Create Target Array in the Given Order', () => {
    const nums = [0, 1, 2, 3, 4],
      index = [0, 1, 2, 2, 1];

    // Explanation:
    // nums       index     target
    // 0            0        [0]
    // 1            1        [0,1]
    // 2            2        [0,1,2]
    // 3            2        [0,1,3,2]
    // 4            1        [0,4,1,3,2]
    expect(createTargetArray(nums, index)).toEqual([0, 4, 1, 3, 2]);
  });

  it('Subtract the Product and Sum of Digits of an Integer', () => {
    expect(subtractProductAndSum(234)).toEqual(15);
  });

  it('Cells with Odd Values in a Matrix', () => {
    const n = 2,
      m = 3,
      indices = [[0, 1], [1, 1]];

    expect(oddCells(n, m, indices)).toEqual(6);
  });

  it('Cells with Odd Values in a Matrix: No Even Values within Cell', () => {
    const n = 2,
      m = 2,
      indices = [[1, 1], [0, 0]];

    expect(oddCells(n, m, indices)).toEqual(0);
  });

  it('Sort Operations with Year', () => {
    const operations = [
      { date: '2017-09-30', amount: '5303' },
      { date: '2018-03-31', amount: '5654' },
      { date: '2017-10-31', amount: '5509' },
      { date: '2017-12-31', amount: '5567' },
      { date: '2018-01-31', amount: '5597' },
      { date: '2017-11-30', amount: '5359' },
      { date: '2018-02-28', amount: '5082' },
    ];

    const expectedResult = {
      '2017': ['09-30', '10-31', '12-31', '11-30'],
      '2018': ['03-31', '01-31', '02-28'],
    };
    expect(sortOperations(operations)).toEqual(expectedResult);
  });

  it('Day of the Week: get Saturday', () => {
    const day = 31,
      month = 8,
      year = 2019;

    expect(dayOfTheWeek(day, month, year)).toEqual('Saturday');
  });
  // day = 15, month = 8, year = 1993
  it('Day of the Week: get Monday', () => {
    const day = 29,
      month = 7,
      year = 2019;

    expect(dayOfTheWeek(day, month, year)).toEqual('Monday');
  });

  it('Day of the Week: get Sunday', () => {
    const day = 15,
      month = 8,
      year = 1993;

    expect(dayOfTheWeek(day, month, year)).toEqual('Sunday');
  });
  it('Deepest Leaves Sum: multiple deepest leaves', () => {
    const rootTree = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null,
        },
        right: { val: 5, left: null, right: null },
      },
      right: {
        val: 3,
        left: {
          val: 6,
          left: null,
          right: null,
        },
        right: {
          val: 6,
          left: null,
          right: null,
        },
      },
    };
    expect(deepestLeavesSum(rootTree)).toEqual(21);
  });

  it('Deepest Leaves Sum: one deepest leave', () => {
    const rootTree = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: { val: 7, left: null, right: null },
          right: null,
        },
        right: { val: 5, left: null, right: null },
      },
      right: {
        val: 3,
        left: {
          val: 6,
          left: null,
          right: { val: 8, left: null, right: null },
        },
        right: {
          val: 6,
          left: null,
          right: {
            val: 8,
            left: null,
            right: {
              val: 6,
              left: null,
              right: { val: 45, left: null, right: null },
            },
          },
        },
      },
    };
    expect(deepestLeavesSum(rootTree)).toEqual(45);
  });

  it('How Many Numbers Are Smaller Than the Current Number', () => {
    expect(smallerNumbersThanCurrent([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3]);
  });

  it('How Many Numbers Are Smaller Than the Current Number - No smaller', () => {
    expect(smallerNumbersThanCurrent([7, 7, 7, 7])).toEqual([0, 0, 0, 0]);
  });

  it('Minimum Number of Steps to Make Two Strings Anagram - short  word', () => {
    let s = 'bab',
      t = 'aba';
    expect(minSteps(s, t)).toEqual(1);
  });

  it('Minimum Number of Steps to Make Two Strings Anagram -  long word', () => {
    let s = 'leetcode',
      t = 'practice';
    expect(minSteps(s, t)).toEqual(5);
  });

  it('Minimum Number of Steps to Make Two Strings Anagram - similar', () => {
    let s = 'xxyyzz',
      t = 'xxyyzz';
    expect(minSteps(s, t)).toEqual(0);
  });

  it('Valid Palindrome positive', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
  });

  it('Valid Palindrome negative', () => {
    expect(isPalindrome('race a car')).toEqual(false);
  });

  it('Count Negative Numbers in a Sorted Matrix', () => {
    expect(
      countNegatives([
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3],
      ])
    ).toEqual(8);
  });

  it('Generate a String With Characters That Have Odd Counts', () => {
    const input = 4;
    const generateString = generateTheString(input);
    // const sameCharachters =
    expect(typeof generateString).toBe('string');
    expect(generateString).toHaveLength(input);
    // expect(generateTheString(4)).toEqual([4, 2, 3, 1]);
  });

  it('Sort Array By Parity', () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toEqual([4, 2, 3, 1]);
  });

  it(' Find N Unique Integers Sum up to Zero', () => {
    const input = 7;
    const generateArray = sumZero(input);

    expect(generateArray.length).toEqual(input);
    expect(generateArray.reduce((curr, next) => curr + next, 0)).toEqual(0);
  });

  it('Robot Return to Origin -> Win', () => {
    expect(judgeCircle('UD')).toEqual(true);
  });

  it('Robot Return to Origin -> Lose', () => {
    expect(judgeCircle('LL')).toEqual(false);
  });

  it('Split a String in Balanced Strings: o ne pair', () => {
    expect(balancedStringSplit('LLLLRRRR')).toEqual(1);
  });

  it('Split a String in Balanced Strings', () => {
    expect(balancedStringSplit('RLRRLLRLRL')).toEqual(4);
  });

  it('Delete Columns to Make Sorted', () => {
    expect(minDeletionSize(['egguij', 'gjsnnk', 'lstgon', 'ztzrqv'])).toEqual(
      1
    );
  });

  it('Height Checker', () => {
    expect(heightChecker([1, 1, 4, 2, 1, 3])).toEqual(3);
  });

  it('Tree max depth ', () => {
    let Tree = {
      val: 1,
      children: [
        {
          val: 3,
          children: [
            { val: 5, children: [] },
            { val: 6, children: [{ val: 43, children: [] }] },
          ],
        },
        { val: 2, children: [] },
        { val: 4, children: [] },
      ],
    };
    expect(maxDepth(Tree)).toEqual(4);
  });

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
