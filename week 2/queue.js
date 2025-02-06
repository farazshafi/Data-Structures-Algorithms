class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(data) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return false;
    } else {
      this.head = this.head.next;
    }
    this.size --
  }

  front() {
    if (this.isEmpty()) {
      return false;
    }
    console.log("Head: ",this.head.data)
    return this.head.data;
  }

  rear() {
    if (this.isEmpty()) {
      return false;
    }
    console.log("Rear: ",this.tail.data)
    return this.rear.data
  }

  print() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result);
  }
}

let q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
// q.dequeue();
// q.dequeue();
q.front();
q.rear()
q.print();
