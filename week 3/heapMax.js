class Heap {
  constructor() {
    this.heap = [];
  }
  // helper functions
  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftIndex(i) {
    return 2 * i + 1;
  }

  getRightIndex(i) {
    return 2 * i + 2;
  }

  swap(node1, node2) {
    [this.heap[node1], this.heap[node2]] = [this.heap[node2], this.heap[node1]];
  }

  heapifyUp(i) {
    while (i > 0 && this.heap[this.getParent(i)] < this.heap[i]) {
      this.swap(i, this.getParent(i));
      i = this.getParent(i);
    }
  }

  heapifyDown(i) {
    let len = this.heap.length;
    while (true) {
      let leftIndex = this.getLeftIndex(i);
      let rightIndex = this.getRightIndex(i);
      let largest = i;

      if (leftIndex < len && this.heap[leftIndex] > this.heap[largest]) {
        largest = leftIndex;
      }
      if (rightIndex < len && this.heap[rightIndex] > this.heap[largest]) {
        largest = rightIndex
      }

      if(i !== largest){
        this.swap(i, largest)
        i = largest
      }else{
        break
      }
    }
  }

  delete() {
    if (this.heap.length === 0) return;
    if (this.heap.length === 1) return this.heap.pop();
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  insert(data) {
    this.heap.push(data);
    this.heapifyUp(this.heap.length - 1);
  }

  heapSort(){
    let ogHeap = [...this.heap]
    let sorted = []
    while(this.heap.length > 0){
      sorted.push(this.delete())
      this.heapifyDown(0)
    }
    this.heap = ogHeap
    console.log(sorted)
    return sorted
  }

  print() {
    console.log(this.heap);
  }
}

let heap = new Heap();

heap.insert(30);
heap.insert(20);
heap.insert(70);
heap.insert(40);
heap.insert(23);
heap.insert(4);

// heap.insert("f");
// heap.insert("a");
// heap.insert("r");
// heap.insert("a");
// heap.insert("z");


// heap.heap = ["f","a","r","a","z"]

// console.log("before delete")
// heap.print();

// console.log("after delete")
// heap.delete()
heap.print()

console.log("after sort:")
heap.heapSort()

