/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  const result = [];

  while (rating.length > 0) {
    let i = rating.shift();

    for (let j = 0; j < rating.length; j += 1) {
      for (let k = 1; k < rating.length; k += 1) {
        let rJ = rating[j];
        let rK = rating[k];
        let jO = j + 1;
        let kO = k + 1;

        if ((i < rJ && rJ < rK) || (i > rJ && rJ > rK)) {
          if (jO <= kO) {
            result.push([i, rJ, rK]);
          }
        }
      }
    }
  }

  console.log(result);
  return result.length;
};

let rating = [3, 6, 7, 5, 1];
numTeams(rating);
