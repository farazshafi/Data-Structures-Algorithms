// print 1 to n
// function printValue(n){
//     if(n === 1){
//         return console.log(n)
//     }
//     printValue(n-1)
//     console.log(n)
// }
// printValue(10)
// ------------------------------------------------------------------------------------------------

// sum of n numbers
// function sumOfNumbers(n){
//     if(n === 0){
//         return 0
//     }
//     return n + sumOfNumbers(n-1)
// }
// const sum = sumOfNumbers(5)
// console.log("sum: ",sum)
// ------------------------------------------------------------------------------------------------

// factorial of a number
// function factorial(n){
//     if(n===0){
//         return 1
//     }
//     return n * factorial(n-1)
// }
// const fac = factorial(5)
// console.log("factorial: ",fac)
// ------------------------------------------------------------------------------------------------

// fibonacci series
function fibonacci(n){
    if(n === 0 || n === 1){
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(3));
// ----------------------------------------------------------------------------------------

// reverse a string
// function reverse(str){
//     if(str.length <=1){
//         return str
//     }
//     return reverse(str.slice(1)) + str[0]
// }

// console.log(reverse("faraz"))
// ----------------------------------------------------------------------------------------

// binary search

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  
  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
}
let sortedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,];
let target = 2;
console.log(binarySearch(sortedArray, target));
