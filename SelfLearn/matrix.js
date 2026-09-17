// // print the matrix column Wise

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(let i = 0 ; i < arr[0].length ;i++){

// }

// Fill the row with the one
 
// function BooleanMatrixProblem(m, n, mat) {

//     for (let i = 0; i < m; i++) {

//         let hasOne = false;

//         // Check the row
//         for (let j = 0; j < n; j++) {

//             if (mat[i][j] === 1) {
//                 hasOne = true;
//                 break;
//             }

//         }

//         // Fill the row with 1
//         if (hasOne) {

//             for (let j = 0; j < n; j++) {
//                 mat[i][j] = 1;
//             }

//         }
//     }

//     return mat;
// }