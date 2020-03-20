import { getRandomArbitrary } from '../utils/randomRangeGenerator';

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

interface minStepsSimilarObj {
  [key: string]: number;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
export const minSteps = function(s: string, t: string) {
  let similarPosition: minStepsSimilarObj = {};
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
 * @param {number} n
 * @return {number[]}
 */
export const sumZero = function(n: number) {
  let total = 0;

  let gen = Array.from({ length: n }, (_, idx) => {
    if (idx === n - 1) {
      return -total;
    }
    let firstRandom = getRandomArbitrary(-10, 10);
    let toFloor = Math.floor(firstRandom);
    total += toFloor;

    return toFloor;
  });

  return gen;
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
interface Node {
  val: number;
  children: Node[];
  level?: number | undefined;
}

export const maxDepth = function(root: Node) {
  if (!root) {
    return 0;
  }

  let current = {
    ...root,
    level: 1,
  };
  let maxLevel: number | undefined = 1;

  function recursion(currentNode: Node, parentNode: Node | null) {
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

export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
export const searchBST = (
  root: TreeNode,
  val: number
): TreeNode | null | undefined => {
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
