//matrix 

//given a matrix print the element in the diagonal direction

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [5,4,6,9]
// ];

// for(let i = 0 ; i < arr.length ; i++){
//     let row = ""
//     for(let j = 0 ; j < arr[i].length ; j++){
//         if(i === j){
//             row += arr[i][j] + " "
//         }
//     }
//     console.log(row)
// }

//print the element of the matrxi column wise

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// for(let col = 0 ; col < arr[0].length ; col++){
//     let str = ""
//     for(let row = 0 ; row < arr.length ; row++){
//         str += arr[row][col] + " "
//     }   

// console.log(str)
// }


//print the boundries item of the matrix

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ];

// for(let row= 0 ; row < arr.length ; row++){
//     let str = ""
//     for(let col = 0 ; col < arr[0].length ; col++){
//         if(row==0 || row == arr.length-1 || col == 0 ||col == arr[0].length-1){
//             str+= arr[row][col] + " "
//         }
//     }
//     console.log(str)
// }

// let arr = [
//     [1,2,3,4],
//     [5,6,14,8],
//     [9,10,11,12],
//     [13,13,0,9]
// ];
// let maximum = arr[0][0]
// for(let row = 0 ; row < arr.length ; row++){
    
//     for(let col = 0 ; col < arr[0].length ; col++){
//         if(arr[row][col]> maximum){
//             maximum = arr[row][col]
//         }
//     }
    
// }

// console.log(maximum)

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(let row = 0 ; row < arr.length ; row++){
//     let str = ""
//     for(let col = 0 ; col < arr[0].length ; col++){
//         if( row + col == arr.length-1){
//             str += arr[row][col] + " "
//         }

// }
// console.log(str)
// }

// 357

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(let row = arr.length-1 ; row >=0 ; row--){
//     let str = ""
//     for(let col = arr[0].length-1 ; col >=0 ; col--){
//         if( row + col == arr.length-1){
//             str += arr[row][col] + " "
//         }
// }
// console.log(str)
// }
// 753

//transpose matrix

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

