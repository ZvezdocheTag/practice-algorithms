// export function binaryCodeToText(letter: string): string {
//   return letter.charCodeAt(0).toString(2);
// }

// export function textToBinaryCode() {}

const BinaryUtils = {
  toBinary: function(input) {
    var result = '';
    for (var i = 0; i < input.length; i++) {
      var bin = input[i].charCodeAt().toString(2);
      result += Array(8 - bin.length + 1).join('0') + bin;
    }
    return result;
  },

  toAscii: function(input) {
    var result = '';
    var arr = input.match(/.{1,8}/g);
    for (var i = 0; i < arr.length; i++) {
      let parse = +parseInt(arr[i], 2).toString(10);

      result += String.fromCharCode(parse);
    }
    return result;
  },
};

// console.log(BinaryUtils.toBinary('4'));
let a = '0011';
let b = '0100';

console.log(a | b);
