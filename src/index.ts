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
