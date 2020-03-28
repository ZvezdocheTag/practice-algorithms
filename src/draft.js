/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
function generateEmptyMatrix(n, m) {
  return Array.from({ length: n }, (_, k) => {
    return Array.from({ length: m }, () => 0);
  });
}

var oddCells = function(n, m, indices) {
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
  console.log(res);
  return im;
};
let n = 2,
  m = 3,
  indices = [[0, 1], [1, 1]];

console.log(oddCells(n, m, indices));

function gotAllOppositeOption(arr) {
  // let initial = arr.join('');
  const options = [];

  // while (options.indexOf(initial) === -1) {
  //   options.push(initial);
  //   console.log(options);

  //   const generateInitial = initial.split('').map(r => {
  //     if(r === 0) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   })
  // }
}
// gotAllOppositeOption([0, 0, 1, 1]);

/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  const dup = [];

  for (let i = 0; i < A.length; i += 1) {
    let innerItem = A[i];
    let innerItemPatterns = [];

    // let convertToBin = '0b' + innerItem.join('');
    // let toNum = +convertToBin;
    // console.log(toNum);

    for (let j = 0; j < innerItem.length; j += 1) {
      let converted = function(d) {
        // while()
      };

      innerItemPatterns.push(converted.join(''));
    }
  }
};

let a = [[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]];
// matrixScore(a);
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let res = 0;
  while (words.length) {
    let a = words.pop();
    let w = a.split('');
    let wL = w.length;
    // console.log(w);
    w.forEach(item => {
      // console.log(chars.indexOf(item));
      if (chars.indexOf(item) !== -1) {
        wL -= 1;
      }
    });

    if (wL === 0) {
      res += w.length;
    }
  }
  // console.log(res);
  return res;
};
const words = [
  'dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin',
  'ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb',
  'ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl',
  'boygirdlggnh',
  'xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx',
  'nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop',
  'hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx',
  'juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr',
  'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo',
  'oxgaskztzroxuntiwlfyufddl',
  'tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp',
  'qnagrpfzlyrouolqquytwnwnsqnmuzphne',
  'eeilfdaookieawrrbvtnqfzcricvhpiv',
  'sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz',
  'yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue',
  'hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv',
  'cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo',
  'teyygdmmyadppuopvqdodaczob',
  'qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs',
  'qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs',
];
const chars = 'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp';
// countCharacters(words, chars);
// // Input: events = [[1,2],[2,3],[3,4]]
// // Output: 3
// // Explanation: You can attend all the three events.
// // One way to attend them all is as shown.
// // Attend the first event on day 1.
// // Attend the second event on day 2.
// // Attend the third event on day 3.

// /**
//  * @param {number[][]} events
//  * @return {number}
//  */
// var maxEvents = function(events) {
//   const totalEventsLength = events.length;
//   const freeDays = events.reduce((curr, next) => [...curr, ...next], []);
//   const maxDay = Math.max.apply(null, freeDays);
//   const minDay = Math.min.apply(null, freeDays);
//   const myCalenday = Array.from({ length: maxDay }, (_, k) => 'empty');

//   for(let i = 0; i < events.length; i+=1) {
//     let [startDate, endDate ] = events

//   }
//   console.log(myCalenday);
// };

// maxEvents([[1, 2], [2, 3], [3, 4]]);

// /**
//  * @param {string} text
//  * @param {string} first
//  * @param {string} second
//  * @return {string[]}
//  */
// const text = 'we will we will rock you',
//   first = 'we',
//   second = 'will';

// var findOcurrences = function(text, first, second) {
//   // const a = text.splite(' ');
//   let res = [];

//   let pattern = ` ${first} ${second} `;
//   let re = new RegExp(pattern, 'g');
//   let f = text.match(re);

//   function rec(text, input) {
//     let pos = text.indexOf(pattern);

//     if (pos !== -1) {
//       let sliced = text.slice(pos + pattern.length);
//       let sl = sliced.indexOf(' ');

//       let nextSpace =
//         sl !== -1 ? sliced.slice(0, sl) : sliced.slice(0, sliced.length);
//       res.push(nextSpace);
//       let tail = sliced.slice(sl, sliced.length);
//       // console.log(sliced, tail);

//       rec(sliced, pattern);
//     }
//   }

//   rec(text, pattern);

//   return res;
// };

// // console.log(findOcurrences(text, first, second));
