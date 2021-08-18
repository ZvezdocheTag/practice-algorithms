/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const LIMIT = 7;
const BASE = 'http://mivina.com';

var encode = function(longUrl) {
  const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  const toArr = longUrl.split('');
  const toCharCode = toArr.map(d => d.charCodeAt(0));
  console.log(toCharCode.length, toCharCode);
  const sumOf = toCharCode.reduce((curr, next) => curr + next, 0);
  const sumOfToStr = sumOf.toString();
  const makeArr = sumOfToStr.split('');

  let b = '';
  let i = 0;

  // howManyTimesWasRepeated ?
  // integrate to i/

  while (b.length < 7) {
    if (i < makeArr.length) {
      b += a[makeArr[i]];
      i += 1;
    } else {
      i = 0;
    }
  }
  console.log(`${BASE}/${b}`);
  console.log(sumOf, a.length);

  return `${BASE}/${b}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const b = shortUrl.lastIndexOf('/');
  const toArr = shortUrl.slice(b + 1).split('');

  const bs = [];
  for (let i = 0; i < toArr.length; i += 1) {
    bs.push(a.indexOf(toArr[i]));
  }
  console.log(bs);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

const input = 'https://leetcode.com/problems/design-tinyurl';
// http://tinyurl.com/4e9iAk
encode(input);
decode('http://mivina.com/edejede');
