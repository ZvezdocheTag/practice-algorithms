// const input = {
//   val: 6,
//   left: {
//     val: 7,
//     left: {
//       val: 2,
//       2: { val: 9, left: null, right: null },
//       right: null,
//     },
//     right: {
//       val: 7,
//       left: { val: 1, left: null, right: null },
//       right: { val: 4, left: null, right: null },
//     },
//   },
//   right: {
//     val: 8,
//     left: { val: 1, left: null, right: null },
//     right: {
//       val: 3,
//       left: null,
//       right: { val: 5, left: null, right: null },
//     },
//   },
// };

// // 1) Flatten both the trees in to sorted lists.
// // 2) Merge the lists from what you got in 1)
// // 3) Construct the tree out of what you got in 2)

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} t1
//  * @param {TreeNode} t2
//  * @return {TreeNode}
//  */
var mergeTrfees = function(t1, t2) {
  const output = [];

  traverse(t1, t2);

  function traverse(node) {
    if (!node) {
      return null;
    }

    output.push(node.val);
    // console.log(node.val);

    if (node.right) {
      traverse(node.right);
    } else {
      //   output.push(null);
    }
    if (node.left) {
      traverse(node.left);
    } else {
      //   output.push(null);
    }
  }

  return output;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function insertLevelOrder(arr, root, i, n) {
  //   console.log(i, n, i < n, '');
  //   if (!root) {
  //     return null;
  //   }
  if (i < n) {
    let temNode = new TreeNode(arr[i]);
    root = temNode;

    root.left = insertLevelOrder(arr, root.left, 2 * i + 1, n);
    root.right = insertLevelOrder(arr, root.right, 2 * i + 2, n);
  }

  return root;
}

function flatten(root) {
  if (root == null || (root.left == null && root.right == null)) {
    return;
  }

  if (root.left !== null) {
    flatten(root.left);

    let tempRight = root.right;
    root.right = root.left;
    root.left = null;

    let t = root.right;

    while (t.right !== null) {
      t = t.right;
    }

    t.right = tempRight;
  }

  flatten(root.right);

  return root;
}

function inOrder(node) {
  if (!node) {
    return;
  }

  inorder(node.left);
  inorder(node.right);
}

function mergeTrees(t1, t2) {
  //   console.log(t1, t2);
  if (!t1) {
    return t2;
  }

  if (!t2) {
    return t1;
  }

  t1.val += t2.val;

  t1.left = mergeTrees(t1.right, t2.right);
  t1.right = mergeTrees(t1.left, t2.left);

  return t1;
}
function constructBSTfromArray() {
  let arr = [1, 2, 3, 4, 5, 6, 6, 6, 6],
    n = arr.length,
    root = null,
    out = insertLevelOrder(arr, root, 0, n);
  // inOrder(root)
  console.log(out);
  console.log(mergeTrees(out, out), 'ME');
  //   console.log(out);
}
// console.log(object)

constructBSTfromArray();
