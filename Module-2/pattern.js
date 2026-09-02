// let n = 5

// for(let i = 1 ; i <=4 ; i++){
//         let row = ""
//             for(let j = 0; j < i ; j++){
//                 row+="*"
//             }
//             console.log(row)
//         }
// *
// **
// ***
// ****

// let n = 4
// for(let i = 1; i <= n; i++){
//     let row = ""
//         for(let j = 0; j < 2*i-1; j++){ // we use 2*i-1 for to fetch the odd number
//             row += "*"
//         }
//         console.log(row)
//     }

// let n = 3
// for(let i = 1 ;i <= n; i++){
//     let row = ""
//         for(let j = 1; j <=2*i; j++){ // we use 2*i+-2 for to fetch the odd number
//             row += "*"
//         }
//         console.log(row)
//     }

// let number = 4;

// for(let row = 1; row <= number; row++){
//     let str = "";

//     // spaces
//     for(let space = 1; space <= number - row; space++){
//         str += " ";
//     }

//     // stars
//     for(let col = 1; col <= row; col++){
//         str += "*";
//     }

//     console.log(str);
// }

// let n = 5

// for(let row = 1 ; row <= n ; row++){
//     let str = ""
//         for(let col = 1 ; col <=2*(n-row+1)-1 ; col++){
//             str+="*"
//         }
//         console.log(str)
//     }
// *********
// *******
// *****
// ***
// *

// let n = 3;

// for(let row = 1 ; row <= n ; row++){
//     let str = ""
//     for(let col = 1 ; col <= row ; col++){
//         str+=(row+col-1)
//     }
//     console.log(str)
// }


// let n = 3

// for(let row = 1 ; row <= n ; row++){
//     let str = ""

//         //space 
//         for(let space = 0; space <= 2*row-2 ; space++){
//             str += " "
//         }
//         for(let col = 1 ; col <=2*(n-row+1)-1 ; col++){
//             str+="*"
//         }
//         console.log(str)
//     }




// function pattern1(n){
//     for(let row = 1 ; row <= n ; row++){
//     let str = ""

//     for(let col = 1 ; col<=row ; col++){
//         str+="*"
//     }
// }

//     for(let col = 1 ; col<=n-row ; col++){
//         str+="*"
//     }
// console.log(str)
// }
// pattern1(4)

// // function pattern2(n1){
// //     for(let row = 1 ; row <= n1 ; row++){
// //     let str = ""

// //     for(let col = 1 ; col<=n1-row ; col++){
// //         str+="*"
// //     }
// // console.log(str)
// // }}
// // pattern2(4)


// let n = 5;

// for(let row = 1 ; row <=n ; row++){
//     let str= ""

//         for(let col = 1; col<=row;col++){
//             str+=row
//         }

// console.log(str)
// }
// 1
// 22
// 333
// 4444
// 55555


// let n = 5;

// for(let row = 1 ; row < n  ; row++){
//     let str = ""

//     for(let col = 1; col<(n-row+1); col++){
//         str+=col
//     }
//     console.log(str)
// }


// let n = 5

// for(let row = 0; row < n ; row++){
//     let str = ""

//     //space

//     for(let space = 0; space < (n-row+1); space++){
//         str+=" "
//     }

//     //col

//     for(let col = 1 ;col < 2*(row+1); col++){
//         str+="*"
//     }

//     //space

//     for(let space = 0; space <= (n-row+1); space++){
//         str+=" "
//     }

//     console.log(str)
// }

// let n = 5

// for(let row = 0; row < n ; row++){
//     let str = ""

//     //space

//     for(let space = 0; space <= row; space++){
//         str+=" "
//     }

//     //col

//     for(let col = 1 ;col < 2*(n-row)-2; col++){
//         str+="*"
//     }

//     //space

//     for(let space = 0; space <= row; space++){
//         str+=" "
//     }

//     console.log(str)
// }


// function pattern2(n){for(let row = 0; row < n ; row++){
//   let str = ""

//   //space 

//   for(let space = 0 ; space < n-row-1; space++){
//     str+=" "
//   }

//   //column

//   for(let col =  1 ; col <= 2*row+1 ; col++){
//     str+="*"

//   }

//   //space

//   for(let space = 1 ; space <= n-row-1 ; space++){
//     str+=" "
//   }

//   console.log(str)
// }
// }

// pattern2(5)
// function pattern(n){


// for(let row = 0; row < n ; row++){
//   let str = ""

//   //space 

//   for(let space = 0 ; space < row; space++){
//     str+=" "
//   }

//   //column

//   for(let col =  1 ; col <= 2*(n-row-1)+1 ; col++){
//     str+="*"

//   }

//   //space

//   for(let space = 1 ; space <= row ; space++){
//     str+=" "
//   }

//   console.log(str)
// }}

// pattern(5)


// let n = 5;

// for(let row = 1 ; row <= n ; row++){
//   let str = ""

//   for(let col = 1 ; col <= n ; col++){
    

//       if(col === 1 || col === n || row === 1 || row === n){
//         str+="*"
//       }
//       else{
//         str+=" "
//       }
//   }
//   console.log(str)
// }
// *****
// *   *
// *   *
// *   *
// *****

// let n = 3;

// for(let row = 1; row <= n ;  row++){
//     let str = ""

//     //space

//     for(let space = 1; space <= n-row; space++){
//         str+=" "
//     }

//     //column

//     for(let col = 1 ; col <= row ; col++){
//         str+="* "
//     }

//     console.log(str)
// }

// let n = 3;
//  for(let row = 1 ; row <= n ; row++){
//     let str = ""
    
//     //space

//     for(let space = 1; space <=row; space++){
//         str+=" "
//     }

//     //column

//     for(let col = 1 ; col <= 2*(n-row+1)-1 ; col++){
//         str+="*"
//     }

//     for(let space = 1; space <= n-row; space++){
//         str+=" "
//     }
//     console.log(str)
// }

