/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
  let P = Array.from({ length: m }, (_, idx) => idx + 1);
  const r = [];
  for (let i = 0; i < P.length; i += 1) {
    let Pos = P.findIndex(el => el === queries[i]); // 2
    if (Pos !== -1) {
      r.push(Pos);
    }
    P.unshift(P.splice(Pos, 1)[0]);
  }
  return r;
};

let queries = [3, 1, 2, 1],
  m = 5;

processQueries(queries, m);
