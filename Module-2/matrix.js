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


// ===================== Assignment  =========================//

// let mat = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// function alternateMatrix(mat){
// let whiteSum = 0
// let blackSum = 0
// for (let row = 0; row < n; row++) { 
//     for (let col = 0; col < n; col++) { 
//     if ((row + col) % 2 == 0) { 
//         blackSum += mat[row][col]; } 
//         else { 
//             whiteSum += mat[row][col]; 
//         }
//      }
// }
// }
// console.log(alternateMatrix(mat))



// let array = [
// [3, 7, 5],
// [2, 8, 4],
// [1, 6, 9]
// ]

// function findMax(array) {
//  let maximum = array[0][0]
// for(let row = 0 ; row < array.length ; row++){

//     for(let col = 0 ; col < array[0].length ; col++){
//         if(array[row][col]> maximum){
//             maximum = array[row][col]
//         }
//     }
// }
// return maximum
// }
// console.log(findMax(array))

//transpose matrix

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(let row = 0 ; row < arr.length ; row++){
//     for(let col = 0 ; col < arr[0].length ; col++){
//         if( row < col){
//             let temp = arr[row][col]
//             arr[row][col] = arr[col][row]
//             arr[col][row] = temp
//         }
//     }
// }
// console.log(arr)

//transpose the rectangle matrix

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8]
// ]
// let transpose = []
// for(let col = 0 ; col < arr[0].length ; col++){ // if we wnat to traves the column we us the column first
//     let newArr = []
//     for(let row = 0 ; row < arr.length ; row++){
//         newArr.push(arr[row][col])
//     }
//     transpose.push(newArr)
// }
// console.log(transpose)


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
//            str+=(arr[row][col] + " ")
//         }
//     }
//     console.log(str)
// }


// let arr = [
//     [1,4,7,1],
//     [2,5,8,9],
//     [3,6,9,5],
//     [4,8,7,5]
// ]

// let top = 0 ;
// let right = arr[0].length-1;
// let bottom= arr[0].length-1;
// let left = 0

// // left to right for the top row
// for(let k = left ; k <= right ; k++){
//     console.log(arr[top][k])
// }
// top++

// //top to bottom for right row
// for(let k = top ; k <= bottom ; k++){
//     console.log(arr[right][k])
// }
// right++

// for(let k = right ; k >= left ; k--){
//     console.log(arr[bottom][k])
// }
// bottom--


// //bottom to top for left col
// for(let k = bottom ; k >= top ; k--){
//     console.log(arr[k][left])
// }
// left--

//ssubarray or substring

// let arr = [1,2,3,4]

// for(let i = 0 ; i < arr.length; i++){

// }

//given a string find all the substring of lenght k

let str = [1,2,3,4]

let count = 0
for(let i = 0 ; i < str.length-1 ; i++){
    let substring = []

        for(let j = i ; j < i; j++){
       substring.push(str)
        }
        console.log(substring)
    }
console.log(count)