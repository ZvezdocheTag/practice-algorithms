/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const EN_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const MORSE_CODE = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  const alphToArr = EN_ALPHABET.split('');
  const res = [];

  words.forEach(word => {
    const wordToArr = word.split('');
    const morsePhrase = [];

    while (wordToArr.length) {
      let first = wordToArr.shift();
      let indexOfLetter = alphToArr.indexOf(first);

      morsePhrase.push(MORSE_CODE[indexOfLetter]);
    }
    const morsePhraseToStr = morsePhrase.join('');

    if (res.indexOf(morsePhraseToStr) === -1) {
      res.push(morsePhraseToStr);
    }
  });
  return res.length;
};

const words = ['gin', 'zen', 'gig', 'msg'];
console.log(uniqueMorseRepresentations(words));
