class CircularQueue {
  constructor(size) {
    this.size = size;
    this.queues = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.count = 0;
  }

  isFull() {
    return this.count === this.size;
  }

  isEmpty() {
    return this.count === 0;
  }

  enqueue(data) {
    if (this.isFull()) {
      console.log("size is full");
      return false;
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.queues[this.rear] = data;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Nothing to remove");
      return false;
    }
    this.queues[this.front] = null;
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    this.count--;
    return true;
  }

  getFront() {
    console.log("Front: ", this.queues[this.front]);
    return this.queues[this.front];
  }

  getRear() {
    console.log("Rear: ", this.queues[this.rear]);
    return this.queues[this.rear];
  }

  print() {
    let str = "";
    for (let i = 0; i < this.size; i++) {
      str += `${this.queues[i]} => `;
    }
    console.log(str);
  }
}
// [10,20,30]
let cQ = new CircularQueue(3);

cQ.enqueue(10);
cQ.enqueue(20);
cQ.enqueue(30);
cQ.dequeue();
cQ.enqueue(40);
cQ.getFront();
cQ.getRear();
cQ.print();
