/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let removePunctuationMark = s.replace(
    /[!"\#$%&'`()*+,\-./ :;<=>?@\[\\\]^_‘{|}~]/g,
    ''
  );
  let stringToArr = removePunctuationMark.split('');
  let dup = [...stringToArr];
  console.log(stringToArr);
  let stringToArrRv = dup.reverse();
  console.log(stringToArr);
  let processedIntialStr = stringToArr.join('').toLowerCase();
  let reversedString = stringToArrRv.join('').toLowerCase();

  return processedIntialStr === reversedString;
};

// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('`l;`` 1o1 ??;l`'));
console.log(isPalindrome('race a car'));
