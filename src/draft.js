var maxDepthDF = function(root) {
  if (!root) {
    return 0;
  }

  let current = {
    ...root,
    level: 1,
  };
  let maxLevel = 1;

  function recursion(currentNode, parentNode, depth) {
    if (parentNode) {
      currentNode.level = parentNode.level + 1;
    }
    if (currentNode.level > maxLevel) {
      maxLevel = currentNode.level;
    }
    for (let i = 0; i < currentNode.children.length; i += 1) {
      recursion(currentNode.children[i], currentNode);
    }
  }

  recursion(current, null, 0);

  return maxLevel;
};

let b = maxDepthDF({
  val: 1,
  children: [
    {
      val: 3,
      children: [
        { val: 5, children: [] },
        { val: 6, children: [{ val: 43, children: [] }] },
      ],
    },
    { val: 2, children: [] },
    { val: 4, children: [] },
  ],
});
// console.log(b);
