import { generateEmptyMatrix } from '../utils/matrixUtils';
import { enAlphabetArr } from '../utils/enAlphabetArr';
import { MORSE_CODE } from './constatnts';
import * as interfaces from './interfaces';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const sumEvenGrandparent = function(root: interfaces.TreeNode) {
  let current: interfaces.TreeNode = {
    ...root,
    parent: null,
  };

  const parents: interfaces.TreeNode[] = [];

  if (current !== null) {
    traverse(current);
  }

  function traverse(node: interfaces.TreeNode) {
    if (node === null) {
      return;
    }

    parents.push(node);

    if (node.left) {
      traverse({
        ...node.left,
        parent: node,
      });
    }

    if (node.right) {
      traverse({
        ...node.right,
        parent: node,
      });
    }
  }

  let sum = 0;

  parents.forEach(d => {
    if (d.parent && d.parent.parent && d.parent.parent.val % 2 === 0) {
      sum += d.val;
    }
  });

  return sum;
};

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
/**
 * @param {number} n
 * @return {number[]}
 */
export function sumZero(n: number) {
  const res = [];

  while (res.length !== n - 1) {
    if (!res.length) {
      res.push(-n);
    } else {
      res.push(n - res.length);
    }
  }
  const missed = res.reduce((curr, next) => curr + next, 0);

  return [...res, -missed];
}

export const bstFromPreorder = function(preorder: number[]) {
  let root: interfaces.TreeNode | null = null;

  const TreeNode = function(this: interfaces.TreeNode, val: number) {
    this.val = val === undefined ? 0 : val;
    this.left = null;
    this.right = null;
  };

  function insertNode(current: interfaces.TreeNode, value: number) {
    if (value < current.val) {
      if (current.left === null) {
        current.left = new (TreeNode as any)(value);
      } else {
        insertNode(current.left, value);
      }
    } else {
      if (current.right === null) {
        current.right = new (TreeNode as any)(value);
      } else {
        insertNode(current.right, value);
      }
    }
  }

  // recursion to compare
  while (preorder.length) {
    let first = preorder.shift();

    if (first) {
      if (!root) {
        root = new (TreeNode as any)(first);
      } else {
        insertNode(root, first);
      }
    }
  }

  return root;
};

export const uniqueMorseRepresentations = function(words: string[]) {
  const alphToArr = enAlphabetArr();
  const res: string[] = [];

  words.forEach(word => {
    const wordToArr = word.split('');
    const morsePhrase = [];

    while (wordToArr.length) {
      let first = wordToArr.shift();
      let indexOfLetter;

      if (first) {
        indexOfLetter = alphToArr.indexOf(first);
        morsePhrase.push(MORSE_CODE[indexOfLetter]);
      }
    }
    const morsePhraseToStr = morsePhrase.join('');

    if (res.indexOf(morsePhraseToStr) === -1) {
      res.push(morsePhraseToStr);
    }
  });
  return res.length;
};
/**
 * @param {number} num
 * @return {number}
 */
export const maximum69Number = function(num: number) {
  const toArr = num.toString().split('');
  let max = num;

  toArr.forEach((d, idx) => {
    let modified = [...toArr];

    if (+d === 6) {
      // mutation of modified
      modified.splice(idx, 1, '9');

      let sum = +modified.join('');

      if (sum > max) {
        max = sum;
      }
    }
  });

  return max;
};

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
export const diagonalSort = function(mat: number[][]) {
  const matLength = mat.length;
  let diagonals: interfaces.dynamicKeyWithObj = {};

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

  const res: number[][] = Array.from({ length: matLength }, () => []);

  mat.forEach((row, rowIdx) => {
    row.forEach((_c, cellIdx) => {
      const diff = rowIdx - cellIdx;
      const isShifted = diagonals[diff].shift();

      if (isShifted) {
        res[rowIdx][cellIdx] = isShifted.val;
      }
    });
  });
  return res;
};

/**
 * @param {string} s
 * @return {string}
 */
export const freqAlphabets = function(s: string) {
  const alphabet: string[] = enAlphabetArr();
  let sToArr = s.split('');
  let i = s.length - 1;
  let res = '';

  while (i >= 0) {
    if (sToArr[i] === '#') {
      const toNum = +sToArr.slice(i - 2, i).join('');
      res = alphabet[toNum - 1] + res;
      i -= 3;
    } else {
      res = alphabet[+sToArr[i] - 1] + res;
      i -= 1;
    }
  }

  return res;
};

/**
 * @param {string} S
 * @return {string}
 */
export const removeOuterParentheses = function(S: string) {
  const patternOpen = '(';
  const patternClose = ')';
  const toArr = S.split('');

  let res = '';
  let o = 0;
  let i = 0;
  const splitPos: number[] = [];

  while (i < toArr.length) {
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
    if (idx === 0) {
      res += S.slice(0 + 1, d);
    } else {
      res += S.slice(splitPos[idx - 1] + 2, d);
    }
  });

  return res;
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
export const replaceElements = function(arr: number[]) {
  for (let i = arr.length - 1; i > -1; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      arr[i - 1] = arr[i];
    }
  }

  arr.shift();
  arr.push(-1);
  return arr;
};

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
export const createTargetArray = function(nums: number[], index: number[]) {
  const initial: number[] = [];

  for (let i = 0; i < index.length; i += 1) {
    let cI = index[i];
    let nI = nums[i];

    initial.splice(cI, 0, nI);
  }
  return initial;
};

/**
 * @param {number} n
 * @return {number}
 */
export const subtractProductAndSum = function(n: number) {
  const toArr = n.toString().split('');

  let multiply = 1;
  let sum = 0;

  toArr.forEach(item => {
    let toNum = +item;
    multiply *= toNum;
    sum += toNum;
  });
  return multiply - sum;
};

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */

export const oddCells = function(n: number, m: number, indices: number[][]) {
  // Generate Matrix
  let im = generateEmptyMatrix(n, m);
  let res = 0;

  for (let i = 0; i < indices.length; i += 1) {
    let [ri, ci] = indices[i];
    im[ri] = im[ri].map(item => item + 1);
    im.forEach(d => {
      d[ci] += 1;
    });
  }

  for (let i = 0; i < im.length; i += 1) {
    im[i].forEach(item => {
      if (item % 2 !== 0) {
        res += 1;
      }
    });
  }
  return res;
};

/**
 * @param {array} operations
 * @return {object}
 */
export function sortOperations(operations: interfaces.OperationWithDate[]) {
  const result: interfaces.GroupedByYear = {};
  // 45

  function pad(d: number) {
    return d < 10 ? '0' + d.toString() : d.toString();
  }

  for (let i = 0; i < operations.length; i += 1) {
    const toDate = new Date(operations[i].date);
    const month = toDate.getMonth();
    const date = toDate.getDate();
    const year = toDate.getFullYear();
    const dateWithoutMonth = `${pad(month + 1)}-${pad(date)}`;

    if (!result[year]) {
      result[year] = [dateWithoutMonth];
    } else {
      result[year].push(dateWithoutMonth);
    }
  }
  return result;
}

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
export const dayOfTheWeek = function(day: number, month: number, year: number) {
  return new Date(year, month - 1, day).toLocaleString('us', {
    weekday: 'long',
  });
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const deepestLeavesSum = function(root: interfaces.TreeNode) {
  const temp = {
    ...root,
    level: 0,
  };

  const levelsL: interfaces.dynamicKeyWithArray = {};
  const levelsR: interfaces.dynamicKeyWithArray = {};

  let deepest = 0;

  innerRecursion(temp, null, 0);

  const L = sumDeepestNodes(levelsL, deepest);
  const R = sumDeepestNodes(levelsR, deepest);

  function sumDeepestNodes(
    nodes: interfaces.dynamicKeyWithArray,
    deep: number
  ) {
    return nodes[deep] ? nodes[deep].reduce((a, b) => a + b, 0) : 0;
  }

  function innerRecursion(
    leave: interfaces.TreeNode,
    branch: string | null,
    level: number
  ) {
    if (!leave) {
      return null;
    }

    leave.level = level;

    if (level > deepest) {
      deepest = level;
    }

    if (branch === 'left') {
      if (!levelsL[leave.level]) {
        levelsL[leave.level] = [leave.val];
      } else {
        levelsL[leave.level].push(leave.val);
      }
    }
    if (branch === 'right') {
      if (!levelsR[leave.level]) {
        levelsR[leave.level] = [leave.val];
      } else {
        levelsR[leave.level].push(leave.val);
      }
    }

    if (leave.left) {
      innerRecursion(leave.left, 'left', leave.level + 1);
    }

    if (leave.right) {
      innerRecursion(leave.right, 'right', leave.level + 1);
    }

    return false;
  }

  return R + L;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const smallerNumbersThanCurrent = function(nums: number[]) {
  const res = [];
  for (let i = 0; i < nums.length; i += 1) {
    const filterSmaller = nums.filter(item => item < nums[i]).length;
    res.push(filterSmaller);
  }
  return res;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
export const minSteps = function(s: string, t: string) {
  let similarPosition: interfaces.minStepsSimilarObj = {};
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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const rotate = function(nums: Array<number | undefined>, k: number) {
  while (k !== 0) {
    const temp = nums.pop();
    nums.unshift(temp);
    k -= 1;
  }
};

/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = function(s: string) {
  let removePunctuationMark = s.replace(
    /[!"\#$%&'`()*+,\-./ :;<=>?@\[\\\]^_‘{|}~]/g,
    ''
  );
  let stringToArr = removePunctuationMark.split('');
  let dup = [...stringToArr];
  let stringToArrRv = dup.reverse();

  let processedIntialStr = stringToArr.join('').toLowerCase();
  let reversedString = stringToArrRv.join('').toLowerCase();

  return processedIntialStr === reversedString;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */

export const countNegatives = function(grid: number[][]) {
  return grid
    .reduce((d, c) => [...d, ...c], [])
    .filter((item: number[] | number) => item < 0).length;
};

/**
 * @param {number} n
 * @return {string}
 */
export const generateTheString = function(n: number) {
  let res = '';
  const INITIAL_CHAR_CODE = 97;
  let b = 0;

  for (let i = n; i !== 0; i -= 1) {
    if (res.length === n) {
      break;
    }
    if (i % 2 !== 0) {
      res += String.fromCharCode(INITIAL_CHAR_CODE + b).repeat(i);
    } else {
      res += String.fromCharCode(INITIAL_CHAR_CODE + b);
    }

    b += 1;
  }

  return res;
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
export const sortArrayByParity = function(A: number[]) {
  const s = [];

  for (let i = 0; i < A.length; i += 1) {
    if (A[i] % 2 === 0) {
      s.unshift(A[i]);
    } else {
      s.push(A[i]);
    }
  }
  return s;
};

/**
 * @param {string} moves
 * @return {boolean}
 */
export const judgeCircle = function(moves: string) {
  let x = 0;
  let y = 0;

  for (let i = 0, movesToArr = moves.split(''); i < movesToArr.length; i += 1) {
    if (movesToArr[i] === 'L') {
      x -= 1;
    } else if (movesToArr[i] === 'R') {
      x += 1;
    } else if (movesToArr[i] === 'U') {
      y += 1;
    } else if (movesToArr[i] === 'D') {
      y -= 1;
    }
  }

  return x === 0 && y === 0;
};

/**
 * @param {string} s
 * @return {number}
 */
export const balancedStringSplit = function(s: string) {
  let count = 0;
  let balance = 0;

  for (let i = 0, b = s.split(''); i < b.length; i += 1) {
    if (b[i] === 'L') {
      balance -= 1;
    } else {
      balance += 1;
    }
    if (balance === 0) {
      count += 1;
    }
  }
  return count;
};
/**
 * @param {string[]} A
 * @return {number}
 */

export const minDeletionSize = function(A: string[]) {
  let M: Array<Array<string>> = [];

  let asc = 0;

  for (let i = 0; i < A.length; i += 1) {
    let item = A[i].trim().split('');
    if (M.length === 0) {
      M = item.map(D => [D]);
    } else {
      item.forEach((D, idx) => {
        M[idx].push(D);
      });
    }
  }

  // TODO: not optimal decision rewrite this logic to upper forEach
  M.forEach(item => {
    item.every((ite, idx, arr) => {
      var prev = arr[idx - 1];
      if (prev) {
        if (prev > ite) {
          asc++;
          return false;
        }
      }
      return true;
    });
  });

  return asc;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
export const heightChecker = function(heights: number[]) {
  let sorted = [...heights].sort((a, b) => a - b);
  // console.log(sorted, heights);
  let diff = 0;
  for (let i = 0; i < heights.length; i += 1) {
    if (sorted[i] !== heights[i]) {
      diff += 1;
    }
  }
  return diff;
};
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */

export const maxDepth = function(root: interfaces.Node) {
  if (!root) {
    return 0;
  }

  let current = {
    ...root,
    level: 1,
  };
  let maxLevel: number | undefined = 1;

  function recursion(
    currentNode: interfaces.Node,
    parentNode: interfaces.Node | null
  ) {
    // If current node exist, and has prop: level then we use this  prop
    // If not, we are using -1 as a value, that in any case lower than level of root node
    // and we do not update our maxLevel value
    let isLevelExist =
      currentNode && currentNode.level ? currentNode.level : -1;

    if (parentNode && parentNode.level) {
      currentNode.level = parentNode.level + 1;
      isLevelExist = currentNode.level;
    }

    if (maxLevel && isLevelExist > maxLevel) {
      maxLevel = currentNode.level;
    }
    for (let i = 0; i < currentNode.children.length; i += 1) {
      recursion(currentNode.children[i], currentNode);
    }
  }

  recursion(current, null);

  return maxLevel;
};
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// Not Optimal Way, write better one
// Sort and Filtering, here are excessive
export const relativeSortArray = function(
  arr1: Array<number | null>,
  arr2: number[]
) {
  let sorted = [];

  while (arr2.length > 0) {
    let val = arr2.shift();
    for (let i = 0; i < arr1.length; i += 1) {
      if (arr1[i] === val) {
        sorted.push(arr1[i]);
        arr1[i] = null;
      }
    }
  }

  function isNumber(x: any): x is number {
    return typeof x === 'number';
  }
  function sortCarefuly<MyType>(a: MyType | null, b: MyType | null) {
    if (isNumber(a) && isNumber(b)) {
      return a - b;
    }
    throw new Error(`Expected number, got '${a}'.`);
  }

  let prep = arr1.filter(item => item !== null).sort(sortCarefuly);
  return sorted.concat(prep);
};
/**
 * @param {number} N
 * @return {boolean}
 */
export const divisorGame = (N: number) => {
  let min = 0;
  let x = N - 1;
  let isAliceWin = false;

  // && N % x == 0 - one more condition, that could reduce time of algo
  while (min < x && x < N) {
    isAliceWin = !isAliceWin;
    x--;
  }

  return isAliceWin;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const decompressRLElist = (nums: number[]): number[] => {
  let decompressed: number[] = [];
  for (let i = 0; i < nums.length; i += 2) {
    let [a, b] = [nums[i], nums[i + 1]];
    let generatedArray = Array.from({ length: a }, () => b);
    decompressed = decompressed.concat(generatedArray);
  }

  return decompressed;
};

/**
 * @param {number} num
 * @return {number}
 */
export const numberOfSteps = (num: number) => {
  let stackOperation = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
      stackOperation += 1;
    } else {
      num = num - 1;
      stackOperation += 1;
    }
  }

  return stackOperation;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const arrayPairSum = (nums: number[]) => {
  const sortedNums = nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i <= sortedNums.length - 1; i += 2) {
    sum += sortedNums[i];
  }

  return sum;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

export const searchBST = (
  root: interfaces.TreeNode,
  val: number
): interfaces.TreeNode | null | undefined => {
  const current = [root];
  let matchedVal = null;
  while (current.length !== 0) {
    let first = current.pop();
    let firstLeft = first!.left;
    let firstRight = first!.right;

    if (first!.val === val) {
      matchedVal = first;
    }
    if (firstLeft) {
      current.push(firstLeft);
    }
    if (firstRight) {
      current.push(firstRight);
    }
  }

  return matchedVal;
};

export const arrayToBinaryTree = () => {};
/**
 * @param {string} S
 * @return {number[]}
 */
export const diStringMatch = function(S: string) {
  const permutationResult = [];
  const N = S.length;
  const A = Array.from({ length: N + 1 }, (_, k) => k);
  const StoArry: Array<string> = S.split('');

  for (let i = 0; i < StoArry.length; i += 1) {
    if (StoArry[i] === 'I') {
      permutationResult.push(A.shift());
    }
    if (StoArry[i] === 'D') {
      permutationResult.push(A.pop());
    }
  }

  permutationResult.push(A.shift());

  return permutationResult;
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

export const uniqueOccurrences = function(arr: Array<number>): boolean {
  const similarDictionary: Record<string, Array<number>> = {};
  let isDuplicate = true;

  for (let i = 0; i < arr.length; i += 1) {
    if (!similarDictionary[arr[i]]) {
      similarDictionary[arr[i]] = [arr[i]];
    } else {
      similarDictionary[arr[i]].push(arr[i]);
    }
  }

  const arrOfValues = Object.values(similarDictionary).map(item => item.length);

  while (arrOfValues.length > 0) {
    let cuttedFirstValue: number | undefined = arrOfValues.shift();

    if (cuttedFirstValue) {
      if (arrOfValues.indexOf(cuttedFirstValue) !== -1) {
        isDuplicate = false;
      }
    }
  }

  return isDuplicate;
};

export const pairSum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

// Recursivly summarize all values from @num to 0:  takeO(n) time andO(n) space
export const recursionSum = (num: number): number => {
  if (num <= 0) {
    return 0;
  }
  return num + recursionSum(num - 1);
};

//  take O(n) time and O(1) space
export const pairSumSequence = (num: number) => {
  let sum: number = 0;
  for (let i = 0; i < num; i += 1) {
    sum += pairSum(i, i + 1);
  }
  return sum;
};
