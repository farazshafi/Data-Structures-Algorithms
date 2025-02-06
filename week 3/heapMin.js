class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
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

  heapifyUp(i) {
    while (i > 0 && this.heap[i] < this.heap[this.getParent(i)]) {
      this.swap(i, this.getParent(i));
      i = this.getParent(i);
    }
  }

  heapyfiDown() {
    let i = 0;
    let leftIndex = this.getLeftIndex(i);
    let rightIndex = this.getRightIndex(i);

    while (this.heap[leftIndex] < this.heap.legth) {
      let smallest = this.heap[leftIndex];
      let right = this.heap[rightIndex];

      if (right < this.heap.length && right < smallest) {
        smallest = right;
      }

      if(this.heap[i] <= this.heap[smallest]) break

      this.swap(i, smallest);
      i = smallest;
    }
  }

  insert(data) {
    this.heap.push(data);
    this.heapifyUp(this.heap.length - 1);
  }

  remove() {
    this.heap[0] = this.heap.pop()
    this.heapyfiDown();
  }

  print() {
    console.log(this.heap);
  }
}

let minH = new MinHeap();

minH.insert(20);
minH.insert(90);
minH.insert(40);
minH.insert(10);
minH.insert(47);
minH.insert(100);
console.log("before: \n");
minH.print();
console.log("after: \n");
minH.remove();
minH.print();
