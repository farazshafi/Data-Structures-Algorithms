// binary search tree implementation
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let current = this.root;
    let newNode = new TreeNode(data);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    while (current) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  getMin(node = this.root) {
    if (!node.left) return node;
    return this.getMin(node.left);
  }

  delete(node = this.root, data) {
    if (!node) return node;

    if (node.data > data) {
      node.left = this.delete(node.left, data);
    } else if (node.data < data) {
      node.right = this.delete(node.right, data);
    } else {
      if (!node.left && !node.right) return null;

      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let min = this.getMin(node.right);
      node.data = min.data;
      node.right = this.delete(node.right, min.data);
    }
    return node;
  }

  isBst(node = this.root, min = -Infinity, max = Infinity) {
    if (!node) return true;

    if (node.data <= min || node.data >= max) {
      return false;
    }

    let leftValid = this.isBst(node.left, min, node.data);
    let rightValid = this.isBst(node.right, node.data, max);

    return leftValid && rightValid;
  }

  findHeight(node = this.root) {
    if (!node) return 0;

    let leftHeight = this.findHeight(node.left);
    let rightHeight = this.findHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  findClosest(target) {
    let current = this.root;
    let closest = this.root.data;

    while (current) {
      if (current.data === target) {
        return current.data;
      }

      if (Math.abs(target - current.data) < Math.abs(target - closest)) {
        closest = current.data;
      }

      if (current.data < target) {
        current = current.right;
      } else if (current.data > target) {
        current = current.left;
      } else {
        break;
      }
    }
    return closest;
  }

  findDepth(data) {
    let current = this.root;
    let depth = 0;

    while (current) {
      if (current.data === data) {
        return depth;
      }
      if (current.data > data) {
        current = current.left;
      } else if (current.data < data) {
        current = current.right;
      }
      depth++;
    }
    return -1;
  }

  countLeafNode() {
    let stack = [this.root];
    let leafNodeCount = 0;

    while (stack.length > 0) {
      let current = stack.pop();

      if (!current.left && !current.right) {
        leafNodeCount++;
      }

      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }

    return leafNodeCount;
  }

  // DFS----------------------
  // inorder left -> root -> right
  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }
  // BFS------------------------
  bfs() {
    if (!this.root) return;
    let queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current.data);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
}

let bst = new BinarySearchTree();

bst.insert(20);
bst.insert(17);
bst.insert(30);
bst.insert(13);
bst.insert(12);
bst.insert(15);
bst.insert(14);
bst.insert(16);
bst.insert(25);
bst.insert(35);

bst.delete(bst.root, 15);

// bst.inOrder();
// bst.bfs();

// ----------------- is valid bst -----------------
// let newNode = new TreeNode(12)
// bst.root.right.right = newNode
// console.log(bst.isBst());
// ----------------- is valid bst -----------------

// console.log(bst.findHeight());
// console.log("depth:", bst.findDepth(12));
console.log("total leaf nodes: ", bst.countLeafNode());
// console.log("closest: ", bst.findClosest(39));
