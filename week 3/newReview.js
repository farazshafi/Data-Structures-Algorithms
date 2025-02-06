// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(data) {
//     let newNode = new TreeNode(data);
//     if (!this.root) {
//       this.root = newNode;
//       return this;
//     }
//     let current = this.root;
//     while (current) {
//       if (current.data > data) {
//         if (!current.left) {
//           current.left = newNode;
//           return this;
//         }
//         current = current.left;
//       } else {
//         if (!current.right) {
//           current.right = newNode;
//           return this;
//         }
//         current = current.right;
//       }
//     }
//   }

//   inOrder(node = this.root){
//     // left R right
//     if(!node) return
//     this.inOrder(node.left)
//     console.log(node.data)
//     this.inOrder(node.right)
//   }
// }

// class TrieNode {
//   constructor() {
//     this.children = {};
//     this.isWordEnd = false;
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new TrieNode();
//   }

//   insert(word) {
//     let current = this.root;
//     for (let char of word) {
//       if (!current.children[char]) {
//         current.children[char] = new TrieNode();
//       }
//       current = current.children[char];
//     }
//     current.isWordEnd = true;
//   }
// }

class Graph {
  constructor() {
    this.graph = {};
  }

  addVertex(vertex) {
    if (!this.graph[vertex]) {
      this.graph[vertex] = [];
    }
  }

  addEdges(vertex1, vertex2) {
    if (this.graph[vertex1]) {
      this.graph[vertex1].push(vertex2);
    }

    if (this.graph[vertex2]) {
      this.graph[vertex2].push(vertex1);
    }
  }

  bfs(start) {
    let queue = [start];
    let visited = new Set();

    while (queue.length > 0) {
      let vertex = queue.shift();

      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);

        this.graph[vertex].forEach((neigbour) => {
          if (!visited.has(neigbour)) {
            queue.push(neigbour);
          }
        });
      }
    }
  }

  dfs(start) {
    let stack = [start];
    let visited = new Set();

    while (stack.length > 0) {
      let vertex = stack.pop();

      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);

        this.graph[vertex].forEach((neigbour) => {
          if (!visited.has(vertex)) {
            stack.push(vertex);
          }
        });
      }
    }
  }
}
