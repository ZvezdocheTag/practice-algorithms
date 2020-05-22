/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  let root = null;

  function insertNode(current, value) {
    if (value < current.val) {
      if (current.left === null) {
        current.left = new TreeNode(value);
      } else {
        insertNode(current.left, value);
      }
    } else {
      if (current.right === null) {
        current.right = new TreeNode(value);
      } else {
        insertNode(current.right, value);
      }
    }
  }

  function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  // recursion to compare
  while (preorder.length) {
    let first = preorder.shift();

    if (!root) {
      root = new TreeNode(first);
    } else {
      insertNode(root, first);
    }
  }

  return root;
};

const r = {
  Input: [8, 5, 1, 7, 10, 12],
  Output: [8, 5, 10, 1, 7, null, 12],
};

console.log(bstFromPreorder(r.Input));

// nsertion
// insert(value)
//   Pre: value has passed custom type checks for type T
//   Post: value has been placed in the correct location in the tree
//   if root = ø
//     root ← node(value)
//   else
//     insertNode(root, value)
//   end if
// end insert

// insertNode(current, value)
//   Pre: current is the node to start from
//   Post: value has been placed in the correct location in the tree
//   if value < current.value
//     if current.left = ø
//       current.left ← node(value)
//     else
//       InsertNode(current.left, value)
//     end if
//   else
//     if current.right = ø
//        current.right ← node(value)
//     else
//       InsertNode(current.right, value)
//     end if
//   end if
// end insertNode
