//How to access the items from the 2d array

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(arr[0][0]); // Output: 1
// console.log(arr[1][2]); // Output: 6
// console.log(arr[2][1]); // Output: 8

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// no of rows = arr.length;
// no of columns = arr[0].length;

//Find the number of item in the 2d array

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8,8],
//     [9,10,11,12]
// ]

// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = 0 ; j < arr[i].length ; j++){
//         console.log(arr[i][j])
//     }
// }

// print the 2d array row wise in right to left direction

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ]   

// for(let i = 0 ; i < arr.length ; i++){
//     let row = ""
//     for(let j = arr[i].length-1 ; j >= 0 ; j--){
//         row += arr[i][j] 
//     } 
//     console.log(row)
// }



// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ]   

// //print the matrix row wise form bottom to top in left to right direction

// for(let i = arr.length-1 ; i >= 0 ; i--){
//     let row = ""
//     for(let j = 0 ; j < arr[i].length ; j++){
//         row += arr[i][j] 
//     }   
//     console.log(row)
// }

