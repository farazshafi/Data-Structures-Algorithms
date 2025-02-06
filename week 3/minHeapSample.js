class MinHeap {
  constructor() {
    this.heap = [];
  }

  // helper functions
  swap(node1, node2) {
    [this.heap[node1], this.heap[node2]] = [this.heap[node2], this.heap[node1]];
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

   heapifyDown() {
    let i = 0;
    const len = this.heap.length;

    while (true) {
      const left = this.getLeftIndex(i);
      const right = this.getRightIndex(i);
      let smallest = i;

      if (left < len && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < len && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      

      // Swap if the smallest is not the current node
      if (smallest !== i) {
        this.swap(i, smallest);
        i = smallest; // Continue down the heap
      } else {
        break; // Stop when heap property is restored
      }
    }
  }


  insert(data) {
    this.heap.push(data);
    this.heapifyUp(this.heap.length - 1);
  }

  heapSort() {
    let result = [];
    let ogHeap = [...this.heap];
    while (this.heap.length > 0) {
      result.push(this.remove());
    }
    this.heap = ogHeap;
    console.log(result)
    return result;
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  print() {
    console.log(this.heap);
  }
}

let minHeap = new MinHeap();

minHeap.insert(20);
minHeap.insert(30);
minHeap.insert(31);
minHeap.insert(19);
minHeap.insert(34);
minHeap.insert(9);
minHeap.insert(40);

console.log("Before");
minHeap.print();

console.log("Sorted");
let sorted = minHeap.heapSort();
