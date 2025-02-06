class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // Inserting value to linked list ------------------------------------------------------------
  appendBefore(before, data) {
    if (!this.head) {
      append(data);
    } else {
      if (this.head.data == before) {
        this.head = new Node(data, this.head);
      }
      let current = this.head;
      let newNode = new Node(data);
      let prev;
      while (current && current.data != before) {
        prev = current;
        current = current.next;
      }
      if (!current) {
        console.log("invalid data, Node not found");
        return;
      }
      prev.next = newNode;
      newNode.next = current;
    }
  }

  appendAfter(after, data) {
    if (!this.head) {
      append(data);
      return;
    } else {
      if (this.head.data == after) {
        let current = this.head;
        let newNode = new Node(data);
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
      } else {
        let current = this.head;
        let newNode = new Node(data);
        while (current && current.data != after) {
          current = current.next;
        }
        if (!current) {
          console.log("invalid data, Node not found");
          return;
        }
        let nextValue = current.next;
        current.next = newNode;
        newNode.next = nextValue;
      }
    }
  }

  append(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      let current = this.head;
      while (current && current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Deleting value from linked list ------------------------------------------------------------
  remove() {
    if (!this.head) {
      console.log("There is no data to remove");
      return;
    } else {
      let current = this.head;
      if (!current.next) {
        this.head = null;
        return;
      }
      while (current && current.next.next) {
        current = current.next;
      }
      current.next = current.next.next;
    }
  }

  removeData(data) {
    if (!this.head) {
      console.log("Nothing to Remove no data found!");
      return;
    } else {
      if (this.head.data == data) {
        this.head = this.head.next;
        return;
      } else {
        let current = this.head;
        while (current && current.next.data != data) {
          current = current.next;
        }
        if (!current) {
          console.log("data not found!");
          return;
        }
        current.next = current.next.next;
      }
    }
  }

  removeAllData(data) {
    if (!this.head) {
      console.log("nothing to remove");
      return;
    }
    let current = this.head;
    let prev;
    while (current) {
      if (current?.next?.data == data) {
        prev = current
        current.next = current.next.next;
      }
      current = current.next;
    }
    if (!current) {
      console.log("cannot find data");
      return;
    }
  }

  removeAt(index) {
    if (!this.head) {
      console.log("Nothing to remove!");
      return;
    } else {
      if (index == 0) {
        this.head = this.head.next;
        return;
      } else {
        let current = this.head;
        let count = 0;
        let prev;
        while (current && count != index) {
          count++;
          prev = current;
          current = current.next;
        }
        if (!current) {
          console.log("given index not found!");
          return;
        }
        prev.next = current.next;
      }
    }
  }

  // Reverse ------------------------------------------------------------
  reverse() {
    if (!this.head) {
      console.log("Nothing to reverse!");
      return;
    } else {
      let prev = null;
      let current = this.head;
      let next = null;

      while (current) {
        next = current.next;
        current.next = prev;

        prev = current;
        current = next;
      }
      this.head = prev;
    }
  }

  print() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ==> ";
      current = current.next;
    }
    str += "null";
    console.log(str);
  }
}

const lList = new LinkedList();

lList.append(20);
lList.append(30);
lList.append(40);
lList.append(50);
lList.append(20);
lList.append(20);
// lList.append(60);
// lList.append(90);
// lList.append(100);
// lList.appendAfter(60, 70);
// lList.appendBefore(90, 80);

// reverse
// lList.reverse()

// remove
// lList.remove()
// lList.removeData(30)
lList.removeAllData(20)
// lList.removeAt(6)
lList.print();
