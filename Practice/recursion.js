//====Here we will do the practice of the recursion ====//

//fist we write the boiler plate code then solve the examples and write their dry runs

// function sumOf1st(n,sum){
//     if(n == 0){
//         console.log(sum)
//         return
//     }
//     sum+=n
//     sumOf1st(n-1,sum)
// }
// sumOf1st(5,0)

//Approach 2

// function sumOf1st(n){
//     if(n == 0){
       
//         return 0;
//     }
    
//     return n+sumOf1st(n-1)
// }
// console.log(sumOf1st(5))

//find maximum from the array 

// let arr = [1,2,4,3]

// let max = -Infinity

// for(let i = 0 ; i < arr.length ;i++){
//     if(arr[i]> max){
//         max = arr[i]
//     }
// }
// console.log(max)

// now using the recursion 

// let arr = [1,2,4,5,8]
// let max= -Infinity
// function maximumFromArraay (arr,i){
//     if(i==arr.length){
//         return
//     }
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     maximumFromArraay(arr,i+1)
// }
// maximumFromArraay(arr,0);
// console.log(max)

