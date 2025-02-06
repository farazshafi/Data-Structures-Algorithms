// ------------------------ tree(start) ------------------------
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

//   getMid(node = this.root) {
//     if (!node.left) return node;
//     return this.getMid(node.left);
//   }

//   remove(node = this.root, data) {
//     if (!node) return node;

//     if (node.data > data) {
//       node.left = this.remove(node.left, data);
//     } else if (node.data < data) {
//       node.right = this.remove(node.right, data);
//     } else {
//       if (!node.left && !node.right) return null;

//       if (!node.left) return node.right;
//       if (!node.right) return node.left;

//       let mid = this.getMid(node.right);
//       node.data = mid.data;
//       node.right = this.remove(node.right, mid.data);
//     }
//     return node;
//   }

//   bfs() {
//     if (!this.root) return;
//     let queue = [this.root];
//     while (queue.length > 0) {
//       let current = queue.shift();
//       console.log(current.data);

//       if (current.left) queue.push(current.left);
//       if (current.right) queue.push(current.right);
//     }
//   }

//   inOrder(node = this.root) {
//     if (!node) return;
//     this.inOrder(node.left);
//     console.log(node.data);
//     this.inOrder(node.right);
//   }

//   // check height
//   getHeight(node = this.root) {
//     if (!node) return 0;

//     let leftHeight = this.getHeight(node.left);
//     let rightHeight = this.getHeight(node.right);

//     return Math.max(leftHeight, rightHeight) + 1;
//   }

//   // check depth
//   getDepth(data) {
//     let depth = 0;
//     let current = this.root;

//     while (current) {
//       if (current.data === data) {
//         return depth;
//       } else if (current.data > data) {
//         current = current.left;
//       } else if (current.data < data) {
//         current = current.right;
//       }
//       depth++;
//     }
//     return -1;
//   }

//   // check valid bst
//   isBst(node = this.root, min = -Infinity, max = Infinity) {
//     if (!node) return true;

//     if (node.data <= min || node.data >= max) {
//       return false;
//     }

//     let leftValid = this.isBst(node.left, min, node.data);
//     let rightValid = this.isBst(node.right, node.data, max);

//     return leftValid && rightValid;
//   }

//   // get number of leaf nodes
//   getLeafNodes() {
//     let stack = [this.root];
//     let countLeafNode = 0;
//     while (stack.length > 0) {
//       let current = stack.pop();

//       if (!current.left && !current.right) {
//         countLeafNode++;
//       }

//       if (current.left) stack.push(current.left);
//       if (current.right) stack.push(current.right);
//     }
//     return countLeafNode;
//   }

//   // find closest
//   findClosest(target) {
//     let current = this.root;
//     let closest = this.root.data;

//     while (current) {
//       if (current.data === target) {
//         return current.data;
//       }

//       if (Math.abs(target - current.data) < Math.abs(target - closest)) {
//         closest = current.data;
//       }

//       if (current.data > target) {
//         current = current.left;
//       } else if (current.data < target) {
//         current = current.right;
//       } else {
//         break;
//       }
//     }

//     return closest;
//   }
// }

// let bst = new BinarySearchTree();
// bst.insert(25);
// bst.insert(20);
// bst.insert(40);
// bst.insert(15);
// bst.insert(23);
// bst.insert(50);
// bst.insert(45);
// bst.insert(60);

// console.log("before delete");
// bst.bfs();
// console.log("After delete");
// bst.remove(bst.root, 50);
// bst.bfs();
// console.log(bst.getHeight());
// console.log(bst.getDepth(45))
// bst.root.left.left.left = new TreeNode(69)
// console.log(bst.isBst())
// console.log(bst.findClosest(2));
// console.log(bst.getLeafNodes())
// bst.inOrder()
// ------------------------ tree(end) ------------------------

// ------------------------ heap(start) ------------------------
class Heap {
  constructor() {
    this.heap = [];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftIndex(i) {
    return 2 * i + 1;
  }

  getRightIndex(i) {
    return 2 * i + 2;
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  heapifyUp(i) {
    while (i > 0 && this.heap[i] > this.heap[this.getParent(i)]) {
      this.swap(i, this.getParent(i));
      i = this.getParent(i);
    }
  }

  heapifyDown(i) {
    let len = this.heap.length;
    while (true) {
      let left = this.getLeftIndex(i);
      let right = this.getRightIndex(i);
      let largest = i;

      if (left < len && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < len && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (i !== largest) {
        this.swap(i, largest);
        i = largest;
      } else {
        break;
      }
    }
  }

  insert(data) {
    this.heap.push(data);
    this.heapifyUp(this.heap.length -1);
  }

  remove() {
    if (this.heap.length === 0) return;
    if (this.heap.length === 1) return this.heap.pop();

    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  heapSort() {
    let ogHeap = [...this.heap];
    let sorted = [];
    while (this.heap.length > 0) {
      sorted.push(this.remove());
      this.heapifyDown(0);
    }
    this.heap = ogHeap;
    console.log(sorted);
    return sorted;
  }

  print() {
    console.log(this.heap);
  }
}

let h = new Heap();

h.insert(80);
h.insert(45);
h.insert(59);
h.insert(35);
h.insert(10);
h.insert(48);
h.insert(38);
h.insert(20);
h.insert(90)

// console.log("before remove")
// h.print();
// console.log("after remove")
// h.remove()
console.log("before sort");
h.print();
console.log("after sort");
h.heapSort();
// ------------------------ heap(end) ------------------------

// ------------------------ trie(start) ------------------------
// class TreeNode {
//   constructor() {
//     this.children = {};
//     this.isEndWord = false;
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new TreeNode();
//   }

//   insert(word) {
//     let current = this.root;
//     for (let char of word) {
//       if (!current.children[char]) {
//         current.children[char] = new TreeNode();
//       }
//       current = current.children[char];
//     }
//     current.isEndWord = true;
//   }

//   startsWith(prefix){
//     let current = this.root
//     for(let char of prefix){
//         if(!current.children[char]){
//             console.log("FALSE")
//             return false
//         }
//         current = current.children[char]
//     }
//     console.log("TRUE")
//     return true
//   }

//   search(prefix){
//     let current = this.root
//     for(let char of prefix){
//         if(!current.children[char]){
//             return false
//         }
//         current = current.children[char]
//     }
//     return current.isEndWord
//   }

//   autoCompletion(prefix) {
//     let current = this.root;
//     for (let char of prefix) {
//       if (!current.children[char]) {
//         return [];
//       }
//       current = current.children[char];
//     }
//     let result = [];
//     this.collectWords(current, prefix, result);
//     console.log("Auto completion: ",result)
//     return result;
//   }

//   collectWords(node, prefix, result) {
//     if (node.isEndWord) {
//       result.push(prefix);
//     }
//     for (let char in node.children) {
//       this.collectWords(node.children[char], prefix + char, result);
//     }
//   }

//   longestPrefix(prefix){
//     let current = this.root
//     let longestPrefix = ""
//     for(let char of prefix){
//         if(current.children[char]){
//             longestPrefix += char
//             current = current.children[char]
//         }else{
//             break
//         }
//     }
//     console.log("Longest prefix: ",longestPrefix)
//   }
// }

// let trie = new Trie()

// trie.insert("google")
// trie.insert("good boy")
// trie.insert("good")
// trie.insert("goose")
// trie.insert("groom")
// trie.insert("bad boy")

// // trie.autoCompletion("good")
// // trie.longestPrefix("good baby")
// // trie.startsWith("goo")
// console.log(trie.search("good"))
// ------------------------ trie(end) ------------------------

// ------------------------ graph(start) ------------------------
// class Graph {
//   constructor() {
//     this.graph = {};
//   }

//   addVertex(vertex) {
//     if (!this.graph[vertex]) {
//       this.graph[vertex] = [];
//     }
//   }

//   addEdge(vertex1, vertex2) {
//     if (this.graph[vertex1]) {
//       this.graph[vertex1].push(vertex2);
//     }

//     if (this.graph[vertex2]) {
//       this.graph[vertex2].push(vertex1);
//     }
//   }

//   print() {
//     for (let key in this.graph) {
//       console.log(`${key} = ${this.graph[key]}`);
//     }
//   }

//   dfs(start) {
//     let visited = new Set();
//     let stack = [start];

//     while (stack.length > 0) {
//       let vertex = stack.pop();

//       if (!visited.has(vertex)) {
//         console.log(vertex);
//         visited.add(vertex);

//         this.graph[vertex].forEach((neigbour) => {
//           if (!visited.has(neigbour)) {
//             stack.push(neigbour);
//           }
//         });
//       }
//     }
//   }

//   bfs(start) {
//     let queue = [start];
//     let visited = new Set();

//     while (queue.length > 0) {
//       let vertex = queue.shift();

//       if (!visited.has(vertex)) {
//         console.log(vertex);
//         visited.add(vertex);

//         this.graph[vertex].forEach((neigbour) => {
//           if (!visited.has(neigbour)) {
//             queue.push(neigbour);
//           }
//         });
//       }
//     }
//   }

//   isConnected(vertex) {
//     return this.graph[vertex].length > 0
//   }

// }

// let g = new Graph();

// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");

// g.addEdge("A", "D");
// g.addEdge("A", "E");
// g.addEdge("A", "C");
// g.addEdge("E", "D");
// // g.addEdge("C", "B");

// g.print();
// // g.dfs("A")
// // g.bfs("A")
// console.log(g.isConnected("E"));
// ------------------------ graph(end) ------------------------
