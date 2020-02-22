// /*Graphs Breadth-first-search */

// function bfs(graph, root) {
//   // Function for BFS which take the graph and root node as parameters
//   var nodesLen = {}; //Object used to store the distances to root node

//   for (var i = 0; i < graph.length; i++) {
//     nodesLen[i] = Infinity;
//     // All node distances are set to Infinity assuming they are not reachable
//   }

//   nodesLen[root] = 0; // Distance of the root node from itself is set to 0
//   var queue = [root]; // Queue created to track the nodes to be visited
//   var current; // Variable to track the cuurent node being traversed

//   while (queue.length !== 0) {
//     // Loop to traverse through the nodes
//     current = queue.shift(); // Popping the first node in the queue ie. root node

//     var curConnected = graph[current]; // Variable to store the connected nodes array from the graph
//     var neighborIdx = []; // neighborIdx is an empty array used to keep track of nodes connected to cuurent node
//     var idx = curConnected.indexOf(1); // Get the index of first node connected to current node
//     while (idx != -1) {
//       // Check idx varible is not -1 ie. idx is set to -1 when no  further connected nodes are available
//       neighborIdx.push(idx); // Push the idx onto neighborIdx array
//       idx = curConnected.indexOf(1, idx + 1); // Search for next connected node after current node
//     }

//     for (var j = 0; j < neighborIdx.length; j++) {
//       // Loop to traverse the entire neighborIdx array
//       if (nodesLen[neighborIdx[j]] == Infinity) {
//         // If value in nodesLen array of index of neighbor from neighborIdx is Infinity, the node distance is not set.
//         nodesLen[neighborIdx[j]] = nodesLen[current] + 1; // Set distance as current value of nodesLen array + 1
//         queue.push(neighborIdx[j]); // Push the neighbour to the queue so next while loop can iterate through neighbors of the current neighbor node.
//       }
//     }
//   }

//   return nodesLen; // return nodesLen array with all the nodes and distance from current node
// }

// var exBFSGraph = [
//   // Adjacency matrix graph where 1-Connected 0-NotConnected
//   [0, 1, 1, 1, 0], // Nodes in the graph that are connected to node at index 0
//   [0, 0, 1, 0, 0], // Nodes in the graph that are connected to node at index 1
//   [1, 1, 0, 0, 0], // Nodes in the graph that are connected to node at index 2
//   [0, 0, 0, 1, 0], // Nodes in the graph that are connected to node at index 3
//   [0, 1, 0, 0, 0], // Nodes in the graph that are connected to node at index 4
// ];

// console.log(bfs(exBFSGraph, 2)); // Displaying output of BFS function for node 2 in the console

// console.log(bfs(exBFSGraph, 3)); // Displaying output of BFS function for node 2 in the console

// console.log(bfs(exBFSGraph, 4)); // Displaying output of BFS function for node 2 in the console

// console.log(bfs(exBFSGraph, 0)); // Displaying output of BFS function for node 2 in the console
