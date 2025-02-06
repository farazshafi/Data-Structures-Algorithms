// checks adjecent values
function bubbleSort(arr) {
  // [3, 9, 6, 2, 7, 1, 8, 5, 4]
  let isSwapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  let i = (j = 0);
  let result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// let arr = [3, 9, 6, 2, 7, 1, 8, 5, 4];
// console.log("mermergeSort\n", mergeSort(arr));

// stack-----------------------------------------stack
// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class Stack {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.head = null;
//     this.size = 0;
//   }

//   push(data) {
//     let newNode = new Node(data);
//     if (this.isFull()) {
//       console.log("size if full");
//       return false;
//     }
//     if (this.isEmpty()) {
//       this.head = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.size++;
//   }

//   pop(){
//     if(this.isEmpty()){
//       console.log("Nothing to remove")
//       return false
//     }
//     if(this.size === 1){
//       this.head = null
//     }else{
//       this.head = this.head.next
//     }
//     this.size--
//   }

//   peek(){
//     if(!this.isEmpty()){
//       console.log("Peek: ",this.head.data)
//     }
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   isFull() {
//     return this.capacity === this.size;
//   }

//   print() {
//     let result = [];
//     let current = this.head;
//     while (current) {
//       result.unshift(current.data);
//       current = current.next;
//     }
//     console.log(result);
//   }
// }

// let s = new Stack(3)
// s.push(10)
// s.push(20)
// s.push(30)
// s.pop()
// s.print()
// s.peek()

// queueue-----------------------------------------queueue
// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class Queue{
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.size = 0
//   }

//   enqueue(data){
//     let newNode = new Node(data)
//     if(this.isEmpty()){
//       this.head = newNode
//       this.tail = newNode
//     }else{
//       this.tail.next = newNode
//       this.tail = newNode
//     }
//     this.size ++
//   }
  
//   dequeue(){
//       if(this.isEmpty()){
//           console.log("Empty!")
//           return false
//       }
//       if(this.size === 1){
//           this.head = null
//           this.tail = null
//       }else{
//           this.head = this.head.next
//       }
//       this.size --
//   }

//   isEmpty(){
//     return this.size === 0
//   }
  
//   print(){
//       let result = []
//       let current = this.head
//       while(current){
//           result.push(current.data)
//           current = current.next
//       }
//       console.log(result)
//   }
  
//   front(){
//       if(!this.isEmpty()){
//           console.log("front: ",this.head.data)
//       }
//   }
  
//   rear(){
//       if(!this.isEmpty()){
//           console.log("Rear: ", this.tail.data)
//       }
//   }

// }

// let q = new Queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.dequeue()
// q.front()
// q.rear()
// q.print()

// circularQueue--------------------------------------------circularQueue
class CircularQueue {
  constructor(size){
      this.size = size
      this.items = new Array(size)
      this.front = -1
      this.rear = -1
  }
  
  enqueue(data){
      if(this.isFull()){
          console.log("full")
          return false
      }
      if(this.isEmpty()){
          this.front = 0;
      }
      this.rear = (this.rear + 1) % this.size
      this.items[this.rear] = data
  }
  
  dequeue(){
      if(this.isEmpty()){
          console.log("empty")
          return false
      }
      if(this.front === this.rear){
          this.front = -1
          this.rear = -1
      }
      this.items[this.front] = null
      this.front = (this.front + 1) % this.size
      
  }
  
  print(){
      let str= ""
      for(let i=0  ; i < this.size; i++){
          str += `${this.items[i]} => `
      }
      console.log(str)
  }
  
  isFull(){
      return (this.rear + 1) % this.size === this.front
  }
  isEmpty(){
      return this.front === -1
  }
  getFront(){
      if(!this.isEmpty()){
          console.log("front: ", this.items[this.front])
          return this.items[this.front]
      }
  }
  getRear(){
      if(!this.isEmpty()){
          console.log("rear: ", this.items[this.rear])
          return this.items[this.rear]
      }
  }
}

let cQ = new CircularQueue(4)

cQ.enqueue(10)
cQ.enqueue(20)
cQ.enqueue(30)
cQ.enqueue(40)
cQ.dequeue()
cQ.enqueue(90)
cQ.getFront()
cQ.getRear()
cQ.print()