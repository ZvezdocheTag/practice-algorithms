/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  let clonedMatchedNode = null;

  if (cloned !== null) {
    recursion(cloned, target.val);
  }
  function recursion(node, target) {
    if (node === null) {
      return;
    }

    if (node.val === target) {
      clonedMatchedNode = node;
      return;
    }

    if (node.left) {
      recursion(node.left, target);
    }

    if (node.right) {
      recursion(node.right, target);
    }
  }
  return clonedMatchedNode;
};

const treeNode = {
  val: 7,
  left: { val: 4, left: null, right: null },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 19, left: null, right: null },
  },
};

console.log(
  getTargetCopy(treeNode, Object.assign({}, treeNode), {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 19, left: null, right: null },
  })
);
