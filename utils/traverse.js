// Examples from this ariticle https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393

function Node (data) {
  this.data = data
  this.parent = null
  this.children = []
}

function Tree (data) {
  var node = new Node(data)
  this._root = node
}

Tree.prototype.traverseDF = function (callback) {
  // this is a recurse and immediately-invoking function
  ;(function recurse (currentNode) {
    // step 2
    for (var i = 0, length = currentNode.children.length; i < length; i++) {
      // step 3
      recurse(currentNode.children[i])
    }

    // step 4
    // console.log(currentNode.parent)
    callback(currentNode)

    // step 1
  })(this._root)
}

Tree.prototype.traverseBF = function (callback) {
  var queue = new Queue()

  queue.enqueue(this._root)

  currentTree = queue.dequeue()

  while (currentTree) {
    for (var i = 0, length = currentTree.children.length; i < length; i++) {
      queue.enqueue(currentTree.children[i])
    }

    callback(currentTree)
    currentTree = queue.dequeue()
  }
}

Tree.prototype.contains = function (callback, traversal) {
  traversal.call(this, callback)
}

Tree.prototype.add = function (data, toData, traversal) {
  var child = new Node(data)

  var parent = null

  var callback = function (node) {
    if (node.data === toData) {
      parent = node
    }
  }

  this.contains(callback, traversal)

  if (parent) {
    parent.children.push(child)
    child.parent = parent
  } else {
    throw new Error('Cannot add node to a non-existent parent.')
  }
}

var tree = new Tree('one')

tree._root.children.push(new Node('two'))
tree._root.children[0].parent = tree

tree._root.children.push(new Node('three'))
tree._root.children[1].parent = tree

tree._root.children.push(new Node('four'))
tree._root.children[2].parent = tree

tree._root.children[0].children.push(new Node('five'))
tree._root.children[0].children[0].parent = tree._root.children[0]

tree._root.children[0].children.push(new Node('six'))
tree._root.children[0].children[1].parent = tree._root.children[0]

tree._root.children[2].children.push(new Node('seven'))
tree._root.children[2].children[0].parent = tree._root.children[2]

tree.traverseDF(function (node) {
  console.log(node.data)
})
// tree is an example of a root node
tree.contains(function (node) {
  if (node.data === 'two') {
    console.log(node)
  }
}, tree.traverseBF)
