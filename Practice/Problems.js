// Here will discuss new new methods and the problem to solve using js

//Q1. How to add two number in JS

// const a=10,b=20;
// console.log(a+b);

//Q2. Find square root of number given 

// const a=49;
// console.log(Math.sqrt(a));

// swap two number in java script

// let a=2,b=3;

// a = a+b;
// b = a-b;
// a = a-b;

// console.log(a,b)

// Q3. Check the number is +ve or -ve or zero

// let a= -100;

// if(a>0){
//     console.log("Number is +ve");
// }
// else if( a == 0)
// {
//     console.log("Number is zero");
// }
// else
// {
//     console.log("Number is -ve");
// }

// let a=90;
//  a=20;
// console.log(a)


// let arr = [1,2,3]
// let arr2=[1,2,3,4]


// function compareArr(){
// let sum = 0
// let sum2= 0

// //sum for arr1
// for(let i = 0 ; i < arr.length ; i++){
//   sum += arr[i]
// }
// //sum for arr2
// for(let i = 0 ; i < arr2.length ; i++){
//   sum2 += arr2[i]
// }
//     switch(true){
//         case (sum> sum2):{
//             console.log("array first is greater")
//             break;
//         }
//         case (sum < sum2):{
//             console.log("array second is greater")
//             break;
//         }
//         case (sum == sum2):{
//             console.log("array first is greater")
//             break;
//         }
//         default:{
//             console.log("not a valid array")
//             break;
//         }
//     }

// }
// let resul = compareArr()
// console.log(resul)

// let studentRecord = {
//     name : [
//   {"name": "John", "id": 123, "marks": 98},
//   {"name": "Baba", "id": 101, "marks": 23},
//   {"name": "yaga", "id": 200, "marks": 45},
//   {"name": "Wick", "id": 115, "marks": 75}
// ]

// }
// console.log(studentRecord.name)

let str = "sanu"
let rev1=""
let rev2=""
for(let i = str.length -1;i>=0;i--){
    rev1+=str[i]
}
for(let j = 0 ; j < str.length ; j++){
    rev2+= str[j]
}

let ispalindrom = true;
if(rev1 != rev2){
    return false
}
console.log(ispalindrom)

