let arr = [6, 1, 7, 8, 5, 4, 3, 2, 9];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[min] > arr[j]){
        min = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  return arr
}

console.log(selectionSort(arr));
