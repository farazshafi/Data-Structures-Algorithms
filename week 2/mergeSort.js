
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))

  let i = 0
  let j = 0
  let result = []

  while(i < left.length && j < right.length){
    if(left[i] < right[j]){
      result.push(left[i])
      i++
    }else{
      result.push(right[j])
      j++
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j))

}

let arr = [20, 17, 32, 33, 2, 34, 9, 35, 1, 90];
let strArr = ["dog", "zebra", "carrot", "apple", "banana"];
console.log(mergeSort(strArr));
