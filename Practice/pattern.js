//Print the following pattern 


// let n = 3;
// for( let i = 0 ; i <= n ; i++){
//   let row = ""
//   for(let j = 0 ; j <=i ; j++){
//     row+="*"
//   }
//   console.log(row)

//output
// *
// **
// ***

// }
// let n = 4
//   for(let i = 1 ; i <= n ; i++){
//     let row = ""
//       for(let j = 1 ; j <= i ; j++)
//       {
//         row += String.fromCharCode(65+(i+j-2)%26)
//       }
//       console.log(row)
//   }

//output
// A
// BC
// CDE
// DEFG
// EFGHI


//  let n = 4;

//  for(let i = 0 ; i <= n ; i++){
//     let row = ""
//     for(let j = 0 ; j <= n ; j++){
//       row+="*"
//     }
//     console.log(row)
//  }

//  o/p :- 
// *****
// *****
// *****
// *****
// *****

// let n = 4;

// for(let i = 0 ; i < n ; i++){
//   let row = "";
//     for(let j = i ; j < n ; j++){
//       row+="*"
//     }
//     console.log(row)
    
//   }

// o/p 
// ****
// ***
// **
// *

// let n = 4;

// for(let i = 0 ; i <= n ; i++){
//   let row = "";
//     for(let j=0 ; j<=n ; j++){
//       row+= String.fromCharCode(97+i)
//     }
//     console.log(row)
// }
//output
// aaaaa
// bbbbb
// ccccc
// ddddd
// eeeee

// let n = 4;

// for(let i = 0 ; i <= n ; i++){
//   let row = "";
//     for(let j=i ; j <= n ; j++){
//       row+= String.fromCharCode(65+i)
//     }
//     console.log(row)
// }

// for(let i = 0 ; i <= n ; i++){
//   let row = "";
//     for(let j=0 ; j <= n ; j++){
//       row+= String.fromCharCode(65+i)
//     }
//     console.log(row)
// }
// for(let i = 0 ; i <= n ; i++){
//   let row = "";
//     for(let j=i ; j <= n ; j++){
//       row+= String.fromCharCode(65+i)
//     }
//     console.log(row)
// }

// let n = 4;

// for(let i = 1 ; i <= n ; i++){
//   let row = "";
//     for(let j = 1 ; j <= i ; j++){
//       row+=i
//     }
//     console.log(row)
//   }

// 1
// 22
// 333
// 4444


// let n = 4;

// for(let i = 1 ; i <= n ; i++){
//   let row = "";
//     for(let j = 1 ; j <= i ; j++){
//       row+=(j)

//     }
//     console.log(row)
// }

// 1
// 12
// 123
// 1234

let  n = 10

for(let i = 0 ; i < n ; i++){
    let str = ""
    for(let j = 1 ; j <=2*(n-i-1)+1; j++){
        str+="*"

    }
    console.log(str)
}