let arr = [6, 1, 7, 8, 5, 4, 3, 2, 9];
let char = ["faraz", "Aadhil", "chabu","zebra", "Azil"]

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

console.log(insertionSort(char));
