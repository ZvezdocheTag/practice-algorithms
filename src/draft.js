/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

// class Solution {
//   int ans;
//   public int rangeSumBST(TreeNode root, int L, int R) {
//       ans = 0;
//       dfs(root, L, R);
//       return ans;
//   }

//   public void dfs(TreeNode node, int L, int R) {
//       if (node != null) {
//           if (L <= node.val && node.val <= R)
//               ans += node.val;
//           if (L < node.val)
//               dfs(node.left, L, R);
//           if (node.val < R)
//               dfs(node.right, L, R);
//       }
//   }
// }
var rangeSumBST = function(root, L, R) {
  let result = 0;

  if (root !== null) {
    traverse(root);
  }

  function traverse(node) {
    if (node === null) {
      return;
    }

    if (node.val >= L && node.val <= R) {
      result += node.val;
    }

    if (node.val) {
      traverse(node.left);
    }

    if (node.val) {
      traverse(node.right);
    }
  }

  return result;
};

const TreeNode = {
  val: 10,
  left: {
    val: 5,
    left: { val: 3, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
  right: {
    val: 15,
    left: null,
    right: { val: 18, left: null, right: null },
  },
};

const TreeSecond = {
  val: 10,
  left: {
    val: 5,
    left: { val: 3, left: { val: 1, left: null, right: null }, right: null },
    right: { val: 7, left: { val: 6, left: null, right: null }, right: null },
  },
  right: {
    val: 15,
    left: { val: 13, left: null, right: null },
    right: { val: 18, left: null, right: null },
  },
};

const TreeThird = {
  val: 15,
  left: {
    val: 9,
    left: { val: 7, left: { val: 5, left: null, right: null }, right: null },
    right: { val: 13, left: { val: 11, left: null, right: null }, right: null },
  },
  right: {
    val: 21,
    left: { val: 19, left: { val: 17, left: null, right: null }, right: null },
    right: { val: 23, left: null, right: null },
  },
};

const L = 6,
  R = 10;

const L1 = 19,
  R1 = 21;

const Tree4 = {
  val: 18,
  left: {
    val: 9,
    left: { val: 6, left: { val: 3, left: null, right: null }, right: null },
    right: { val: 15, left: { val: 12, left: null, right: null }, right: null },
  },
  right: {
    val: 27,
    left: { val: 24, left: { val: 21, left: null, right: null }, right: null },
    right: { val: 30, left: null, right: null },
  },
};
const L2 = 18,
  R2 = 24;

// [18,9,27,6,15,24,30,3,null,12,null,21]
// 18
// 24

rangeSumBST(Tree4, L2, R2);
