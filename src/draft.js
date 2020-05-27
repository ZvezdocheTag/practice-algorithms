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
  let current = {
    ...root,
    parent: null,
  };

  const parents = [];

  if (current !== null) {
    traverse(current);
  }

  function traverse(cr) {
    if (cr === null) {
      return;
    }

    parents.push(cr);

    if (cr.left) {
      traverse({
        ...cr.left,
        parent: cr,
      });
    }

    if (cr.right) {
      traverse({
        ...cr.right,
        parent: cr,
      });
    }
  }

  let sum = 0;

  parents.forEach(d => {
    if (d.parent && d.parent.parent && d.parent.parent.val % 2 === 0) {
      sum += d.val;
    }
  });

  return sum;
};

console.log(sumEvenGrandparent(rootInitial));
