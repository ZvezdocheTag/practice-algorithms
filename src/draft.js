/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  const temp = {
    ...root,
    level: 0,
  };

  const levelsL = {};
  const levelsR = {};

  let deepest = 0;

  innerRecursion(temp, null, null);

  const L = sumDeepestNodes(levelsL);
  const R = sumDeepestNodes(levelsR);

  function sumDeepestNodes(nodes, deepes) {
    return nodes[deepest] ? nodes[deepest].reduce((a, b) => a + b, 0) : 0;
  }

  function innerRecursion(leave, branch, level) {
    if (!leave) {
      return null;
    }

    leave.level = level;

    if (level > deepest) {
      deepest = level;
    }

    if (branch === 'left') {
      if (!levelsL[leave.level]) {
        levelsL[leave.level] = [leave.val];
      } else {
        levelsL[leave.level].push(leave.val);
      }
    }
    if (branch === 'right') {
      if (!levelsR[leave.level]) {
        levelsR[leave.level] = [leave.val];
      } else {
        levelsR[leave.level].push(leave.val);
      }
    }

    if (leave.left) {
      innerRecursion(leave.left, 'left', leave.level + 1);
    }

    if (leave.right) {
      innerRecursion(leave.right, 'right', leave.level + 1);
    }

    return false;
  }

  return R + L;
};

const d = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: { val: 7, left: null, right: null },
      right: null,
    },
    right: { val: 5, left: null, right: null },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: { val: 8, left: null, right: null },
    },
    right: {
      val: 6,
      left: null,
      right: {
        val: 8,
        left: null,
        right: {
          val: 6,
          left: null,
          right: { val: 8, left: null, right: null },
        },
      },
    },
  },
};
deepestLeavesSum(d);
