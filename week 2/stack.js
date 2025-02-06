class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.head = null;
    this.size = 0;
  }
  isFull() {
    return this.capacity === this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(data) {
    if (this.isFull()) {
      console.log("cannot append");
      return false;
    }
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  pop(){
    if(this.isEmpty()){
      console.log("cannot pop")
      return false
    }
    if(this.size === 1){
      this.head = null
    }else{
      this.head = this.head.next
    }
    this.size--
  }

  peek(){
    if(this.isEmpty()){
      console.log("Nothing")
      return false
    }
    console.log(this.head.data)
  }

  print() {
    let result = [];
    let current = this.head;

    if (!current) {
      console.log("Stack is empty");
      return;
    }

    while (current) {
      result.unshift(current.data);
      current = current.next;
    }
    console.log(result);
  }
}

// [30,20,10]
let s = new Stack(3);
s.push(10);
s.push(20);
s.push(30);
s.peek()
// s.pop();
// s.pop();
// s.push(40);
s.print();
