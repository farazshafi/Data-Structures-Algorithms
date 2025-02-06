class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insertion
  insertBig(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
      return;
    }
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  insertEnd(data) {
    if (!this.head) {
      this.insertBig(data);
      return;
    }
    let newNode = new Node(data);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  deleteFirst() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
  }

  deleteData(data) {
    if (!this.head) {
      console.log("Nothing to remove");
      return;
    }   
    if (this.head.data === data) {
      this.deleteFirst();
      return;
    }

    let current = this.head;
    while (current && current.data !== data) {
      current = current.next;
    }

    if (!current) {
      console.log("Data not found in the list");
      return;
    }
    if (current === this.tail) {
      this.deleteLast();
      return;
    }
    if (current.prev) {
      current.prev.next = current.next;
    }
    if (current.next) {
      current.next.prev = current.prev;
    }
  }

  deleteLast() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
  }

  printForward() {
    let current = this.head;
    let str = "";
    while (current) {
      str += `${current.data} => `;
      current = current.next;
    }
    str += "null";
    console.log(str);
  }
  printBackward() {
    let current = this.tail;
    let str = "";
    while (current) {
      str += `${current.data} <= `;
      current = current.prev;
    }
    str += "null";
    console.log(str);
  }
}

const dl = new DoublyLinkedList();

dl.insertBig(10);
dl.insertBig(20);
dl.insertEnd(30);
dl.insertEnd(40);
dl.insertEnd(50);
dl.deleteData(40);
// dl.deleteFirst()
// dl.deleteLast()
dl.printForward();
dl.printBackward();
