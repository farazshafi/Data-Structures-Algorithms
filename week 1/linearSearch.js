
let arr = [2, 4, 6, 8, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 101]
let target = 4

// function linearSearchIndex(arr,tar){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]===target){
//             return i
//         }
//     }
// }
function linearRecursionIndex(arr,tar,index=0){
    if(index >= arr.length){
        return -1
    }
    if(arr[index]===target){
        return index
    }
    return linearRecursionIndex(arr,tar,index+1)
}
// console.log(linearSearchIndex(arr,target,0))
console.log(linearRecursionIndex(arr,target))
