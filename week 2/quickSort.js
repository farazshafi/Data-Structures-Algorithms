let arr = [5, 2, 8, 1, 9, 4, 7, 3];


// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > pivot) {
//       right.push(arr[i]);
//     } else {
//       left.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }


function quickSort(arr){
  if(arr.length <= 1) return arr
  
  let pivot = arr[arr.length -1]
  let left = []
  let right = []

  for(let i=0 ; i < arr.length -1; i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  
  return [...quickSort(left),pivot,...quickSort(right)]

}

let result = quickSort(arr);
console.log(result);
