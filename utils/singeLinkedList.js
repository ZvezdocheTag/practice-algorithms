// https://dev.to/emmabostian/creating-linked-lists-with-javascript-391e

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

const llist = new LinkedList();

llist.head = new Node(1);
llist.tail = null;

for (let i = 0; i < 5; i += 1) {
  llist.next = new Node(i);
  if (!llist.tail) {
    llist.tail = llist.next;
  } else {
    llist.tail.next = llist.next;
  }

  // llist.tail.next = new Node(i)
  // llist.tail = llist.next

  // let temp = new Node(1)
  // head
}

console.log(llist);
// const nn = new Node(1);
// llist.head = new Node(1);

// const second = new Node(2);
// const third = new Node(3);

// llist.next = second;
// second.next = third;

// console.log(llist);
// function LinkedList() {
//   const head = null;

//   head = ListNode(1)

//   head.next = second

//   second.next = third
// }

// let vToTree = function(arr) {
//   let tree = null;
//   let temp = null;

//   while (arr.length) {
//     let s = arr.shift();

//     if (!tree) {
//       tree = {
//         val: s,
//         next: null,
//       };
//     } else {
//       tree.next = {
//         val: s,
//         next: null,
//       };

//       temp = tree.next;
//     }
//   }

//   return tree;
// };

// console.log(vToTree(v));
// // getDecimalValue([1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0])
