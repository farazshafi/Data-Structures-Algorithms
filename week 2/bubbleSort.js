function bubbleSortOpt(arr) {
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

function bubbleSort(arr){
  let isSwapped = false
  for(let i = 0; i < arr.length-1; i++){
    for(let j=0; j < arr.length; j++){
      if(arr[j] > arr[j +1]){
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
        isSwapped = true
      }
    }
    if (!isSwapped) break
  }
  return arr
}

let unsorted = [23, 12, 99, 72, 62, 12, 39, 19, 30];
let sorted = [12, 12, 19, 23, 30, 39, 62, 72, 99, 99];
let arr = [10,6,3,1,9,4]
console.log(bubbleSort(arr));
// console.log(bubbleSort(sorted));
