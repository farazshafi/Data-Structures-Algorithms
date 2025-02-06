// Input: arr = [2, 4, 6, 8, 10], target = 6  
// Output: 2

let arr = [2, 4, 6, 8, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 101]
let target = 100

// function binarySearchIndex(arr,tar){
//    let start = 0
//    let end = arr.length -1

//    while(start <= end){
//     let mid = Math.floor((start + end)/2)
//     if(arr[mid] === tar){
//         return mid
//     }else if(arr[mid] < tar){
//         start = mid + 1
//     }else{
//         end = mid - 1
//     }
//    }

//    return -1
// }
// console.log(binarySearchIndex(arr,target))


function recursiveBinary(arr,target,start,end){
    if(start > end){
        return -1
    }
    let mid = Math.floor((start + end)/2)
    if(arr[mid] === target){
        return mid
    }else if(arr[mid] < target){
        return recursiveBinary(arr, target, mid+1, end)
    }else{
        return recursiveBinary(arr,target,start, mid-1)
    }
}

console.log(recursiveBinary(arr,target,0,arr.length-1))