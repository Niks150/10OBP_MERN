//Print matric column wise

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]


// for(let row = 0 ; row < arr.length ; row++){
//     for(let col = 0; col < arr[0].length ;col++){
//       if (row < col) {
//             [arr[row][col], arr[col][row]] =
//             [arr[col][row], arr[row][col]]
//         }
//     }
// }

// console.log(arr)

//Boundary Traversal

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let top = 0 ;
// let right = arr[0].length-1;
// let bottom= arr.length-1;
// let left = 0

// //for top row 

// for(let k = left ; k <= right ; k++){
//     console.log(arr[top][k])
// }
// top++
// // for right col

// for(let k = top ; k <= bottom ; k++){
//     console.log(arr[k][right])
// }
// right--
// //for bottom row 

// for(let k = right ; k>= left ; k--){
//     console.log(arr[bottom][k])
// }
// bottom--
// //for left col

// for(let k = bottom ; k >= top ; k--){
//     console.log(arr[k][left])
// }
// left++

//spiral Traversal

// let arr = [
//     [1,2,3,10],
//     [4,5,6,50],
//     [7,8,9,70]
// ]

// let top = 0 ;
// let right = arr[0].length-1;
// let bottom= arr.length-1;
// let left = 0

// //for top row 
// while(left <= right && top<=bottom){
// for(let k = left ; k <= right ; k++){
//     console.log(arr[top][k])
// }
// top++
// // for right col

// for(let k = top ; k <= bottom ; k++){
//     console.log(arr[k][right])
// }
// right--
// //for bottom row 

// for(let k = right ; k>= left ; k--){
//     console.log(arr[bottom][k])
// }
// bottom--
// //for left col

// for(let k = bottom ; k >= top ; k--){
//     console.log(arr[k][left])
// }
// left++
// }

//Bubbble sort

// let arr = [1,8,2,5,3]

// function bubbleSort(arr){
//     for(let i = 0  ; i < arr.length -1 ;i++){
//         for(let j = 0; j < arr.length -i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//                 console.log(arr) // if we want to check the work flow step by step then console in the condition at the time of the swap
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr))

//  QuickSort

let arr = [35, 50, 15, 25, 80, 20, 90, 45]

function quickSort(arr, low, high) {

    if (low >= high) {  //check the conditon 0 > arr.length
        return;             
    }

    let p = low
    let q = high
    let pivot = arr[low]


    while (p < q) {    //if the p > q


        while (p < high && arr[p] <= pivot) {
            p++
        }
        while (q > low && arr[q] > pivot) {
            q--
        }
        if (p < q) {
            [arr[p], arr[q]] = [arr[q], arr[p]]
        }

    }

    [arr[low], arr[q]] = [arr[q], arr[low]];

    quickSort(arr, low, q - 1)
    quickSort(arr, q + 1, high)



}
quickSort(arr, 0, arr.length - 1)

console.log(arr)