import { EN_ALPHABET } from '../src/constatnts';

export function enAlphabetArr(c1 = 'a', c2 = 'z') {
  let a = EN_ALPHABET.split('');
  return a.slice(a.indexOf(c1), a.indexOf(c2) + 1);
}
