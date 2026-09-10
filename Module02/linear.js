//In this will learn about the linerasearch\

//Linear search goes into one direction 

// let nums = [1,2,4,8,5,6]
// let target = 5;

// function searchTarget(nums,target){
//     if(nums.includes(target)){
//             return nums.indexOf(target)
//         }
//         return false

//         }
// console.log(searchTarget(nums,target))

// best case = O(1)
// and worst case is O(n)


//=============Binary search Algorithm ==============//

// let arr = [1,2,3,4,5,6]

// let target = 5
// let i = arr[0]
// let j= arr.length-1
// for(let i = 0 ; i < j ;i++){
//     let mid = Math.floor((i+j)/2)

//     if(arr[mid] === target){
//         console.log(`taget found at the index of `,mid)
//         break
//     }
//     else if(target > arr[mid]){
//         i = mid + 1
//     }
//     else{
//         j = mid - 1
//     }

// }

// let arr = [1,2,3,4,4,4,4,5,5,10]
// let target = 4

// let i = 0
// let j = arr.length-1
// while(i<=j){
    
//     let mid = Math.floor((i+j)/2)

//     if(arr[mid] === target){
//         console.log(arr.lastIndexOf(target))
//         break;
//     }
//     else if (target > arr[mid]){
//         i = mid +1
//     }
//     else{
//         j= mid-1
//     }

//     return -1

// }




// let arr = [1,2,3,4,4,4,4,5,5,10]
// let target = 4

// let i = 0
// let j = arr.length-1
// while(i<=j){
    
//     let mid = Math.floor((i+j)/2)

//     if(arr[mid] === target){
//         console.log(arr.lastIndexOf(target))
//         break;
//     }
//     else if (target > arr[mid]){
//         i = mid +1
//     }
//     else{
//         j= mid-1
//     }

//     return -1

// }


//Hw lower bound

//upper bound








