const rootInitial = {
  val: 6,
  left: {
    val: 7,
    left: { val: 2, left: { val: 9, left: null, right: null }, right: null },
    right: {
      val: 7,
      left: { val: 1, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
  },
  right: {
    val: 8,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: { val: 5, left: null, right: null } },
  },
};
// init draft 1315. Sum of Nodes with Even-Valued Grandparent
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
  console.log(root);
};

console.log(sumEvenGrandparent(rootInitial));
