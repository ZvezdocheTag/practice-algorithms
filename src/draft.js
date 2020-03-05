/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let M = [];

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

  console.log(asc);
  return asc;
};

minDeletionSize(['egguij', 'gjsnnk', 'lstgon', 'ztzrqv']);

// minDeletionSize(['cba', 'daf', 'ghi']);

// ['e', 'g', 'l', 'z'].every((ite, idx, arr) => {
//   var prev = arr[idx - 1];
//   if (prev) {
//     console.log(prev > ite);
//   }
//   console.log(ite, idx, prev);
//   return true;
// });

// let counter = 0;

// [
//   ['e', 'g', 'l', 'z'],
//   ['g', 'j', 's', 't'],
//   ['g', 's', 't', 'z'],
//   ['u', 'n', 'g', 'r'],
//   ['i', 'n', 'o', 'q'],
//   ['j', 'k', 'n', 'v'],
// ].forEach(item => {
//   item.every((ite, idx, arr) => {
//     var prev = arr[idx - 1];
//     if (prev) {
//       if (prev > ite) {
//         counter++;
//         return false;
//       }
//     }
//     return true;
//   });
// });

// console.log('COUTN', counter);
