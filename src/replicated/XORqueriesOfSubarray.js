// Correct Solved solution
// https://leetcode.com/problems/xor-queries-of-a-subarray/discuss/473290/JavaScript-Easy-to-understand-3-solutions
const xorQueries = (arr, queries) => {
  const ret = Array.from({ length: queries.length }, (i, _) => 0);
  for (let i = 0; i < queries.length; ++i) {
    let val = 0;
    for (let j = queries[i][0]; j <= queries[i][1]; ++j) {
      val ^= arr[j];
    }
    ret[i] = val;
  }
  return ret;
};

let arr = [1, 3, 4, 8],
  queries = [[0, 1], [1, 2], [0, 3], [3, 3]];

console.log(xorQueries(arr, queries));

// My Solution and way how I tried to solve it was wrong. Main mistakes as I undersatnd was to
// convert numbers to binary code

// Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
// Output: [2,7,14,8]
// Explanation:
// The binary representation of the elements in the array are:
// 1 = 0001
// 3 = 0011
// 4 = 0100
// 8 = 1000
// The XOR values for queries are:
// [0,1] = 1 xor 3 = 2
// [1,2] = 3 xor 4 = 7
// [0,3] = 1 xor 3 xor 4 xor 8 = 14
// [3,3] = 8

function bin2dec(bin) {
  return parseInt(bin, 2).toString(10);
}
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

let f = bin2dec(dec2bin('1') ^ dec2bin('3'));
let b = bin2dec(dec2bin(f.toString()) ^ dec2bin('4'));
let bs = bin2dec(dec2bin(b.toString()) ^ dec2bin('8'));

// console.log(dec2bin('6'));
// console.log('110' ^ dec2bin('8'));
// console.log(dec2bin('1') ^ dec2bin('3') ^ dec2bin('4') ^ dec2bin('8'));
// console.log(bin2dec(dec2bin('1') ^ dec2bin('3') ^ dec2bin('4')));
// console.log(dec2bin('4'));
// console.log(bin2dec('902'));

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  let listOfDisj = [];
  for (let i = 0; i < queries.length; i += 1) {
    let [L, R] = queries[i];
    let temp = null;
    let comp = '';

    if (R - L > 1) {
      let arrUpd = arr.slice(L, R);
      arrUpd.forEach((item, index) => {
        if (temp) {
          comp = temp ^ dec2bin(item.toString());
        }
        if (temp === null) {
          temp = dec2bin(item.toString());
        }
      });
    } else {
      comp = dec2bin(arr[L].toString()) ^ dec2bin(arr[R].toString());
      let b = comp === 0 ? arr[L].toString() : bin2dec(comp);
      listOfDisj.push(b);
    }
  }
  // console.log(listOfDisj);

  return listOfDisj;
};

let arr = [1, 3, 4, 8],
  queries = [[0, 1], [1, 2], [0, 3], [3, 3]];

xorQueries(arr, queries);
