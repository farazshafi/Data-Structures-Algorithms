// understand what is going on in get min method

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

  getMin(node = this.root) {
    if (!node.left) return node;
    return this.getMin(node.left);
  }

  insert(data) {
    let newNode = new TreeNode(data);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (data > current.data) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  remove(node = this.root, data) {
    if (!node) return node; // d

    if (node.data > data) {
      node.left = this.remove(node.left, data);
    } else if (node.data < data) {
      node.right = this.remove(node.right, data);
    } else {
      // node without child
      if (!node.left && !node.right) return null;

      //  node with 2 child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      //  node with 1 child
      let minNode = this.getMin(node.right);
      node.data = minNode.data;
      node.right = this.remove(node.right, minNode.data);
    }
    return node;
  }

  findHeight(node){
    if(!node) return -1
    let leftHeight = this.findHeight(node.left)
    let rightHeight = this.findHeight(node.right)

    return 1 + Math.max(leftHeight, rightHeight)
  }

  isBalanced(node = this.root){
    if(!node) return true

    let rightHeight = this.findHeight(node.right)
    let leftHeight = this.findHeight(node.left)

    let factor = Math.abs(leftHeight - rightHeight)

    return factor <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right)
  }

  searchData(data){
    let current = this.root
    while(current){
        if(current.data === data){
            console.log("TRUE")
            return true
        }
        current = data > current.data ? current.right : current.left
    }
    console.log("FALSE")
    return false
  }

  //Traversel
  inOrder(node = this.root) {
    // left => root => right
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }

  preOrder(node = this.root) {
    if (!node) return;
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  postOrder(node = this.root) {
    if (!node) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  }
}

let Bst = new BinarySearchTree();

Bst.insert(20);
Bst.insert(10);
Bst.insert(40);
Bst.insert(7);
Bst.insert(18);
Bst.insert(99);
Bst.insert(16);
Bst.remove(Bst.root, 20);

Bst.searchData(99)
Bst.inOrder();
