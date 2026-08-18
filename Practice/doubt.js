// let user = [
//   {name: "Abhishek" , age : 20 , address :{
//     city: "pune"
//   } },
//   {name: "sandeep" , age : 22 , address :{
//     city: "pune"
//   } },
//   {name: "Shraddha" , age : 20 , address :{
//     city: "banglore"
//   } },
//   {name: "Abhishek" , age : 20 , address :{
//     city: "pune"
//   } }
// ]

// for(let result of user){
//   if(result.address.city == "Pune"){
//     result[result.address.city].push(result.name)
//   }
// }


//  console.log(a)
//  let a = 20  //access 'a' before initialization

// console.log(sum(1,2))

// function sum(a,b){
//     return a+b
// }  

//  add();

//  let add = function product()
//  {
//     let a = 2;
//     console.log(a+b)
//     var b;
//  }

// Temporal Dead Zone

// let str = "check";
// let rev = ""

// for(let i = str.length -1 ; i >=0 ;i--){
//     rev+=str[i]
// }
// console.log(rev)

// let arr = [4,3,5,7,8]

// for(let i = 1 ;i <= 5 ; i++){
//     arr.splice(3+i,0,i)
// }
// console.log(arr)


//Factorial 

// let n = 5
// let fact = 1

// for(let i = 1 ; i <= n ; i++){
//     fact *=i
// }
// console.log(fact)

//remove the dublicate from the string

//  let str = [2,4,5,2,5]
//  let result = []

// for(let i = 0 ; i< str.length ; i++){
//     if(!result.includes(str[i])){
//         result+=str[i]
//     }
// }
// console.log(result)

// let str = "Sandeep"

// let result = ""

// for(let i = 0 ; i < str.length ; i++){
//     if(!result.includes(str[i])){
//         result+=str[i]
//     }
// }
// console.log(result)


//All types of Patter we can solve like this, the below code is just an example
// let n = 5;
//  for(let i = 0 ; i < n ; i++){
//     let row = ""
//         for(let j=i ; j< n ; j++){
//             row+="*"
//         }
//         console.log(row)
//     }

// a
// aa
// aaaa
// aaaaa
// aaaaaa

// let a = 'a';
// console.log(a.charCodeAt())

// let n = 'z';
// console.log(n.charCodeAt())

// let Caps = 'A';
// console.log(Caps.charCodeAt())

// let capsZ = 'Z';
// console.log(capsZ.charCodeAt())

// let n = 5;

// for(let i = 0 ; i <=n ; i++){
//     let row = ""
//         for(let j = 0 ; j <= i ; j ++){
//             row+=String.fromCharCode(122) // this just give us the Alphabate from the ASCII value
//         }

//     console.log(row)
// }

//let begin the practice for the splice 


 //we have remove the the number 4
// let arr = [1,2,3,4,5]

// arr.splice(3,1)

// console.log(arr)


// // remove the 4 and add the 10
// let arr = [1,2,3,4,5]

// arr.splice(3,1,10)

// console.log(arr)


// now we have to delete the number 4 and add the nuber 10 then remove the number 5 and add the number 11

//1,2,3,10,11
// let arr = [1,2,3,4,5]

// arr.splice(3,1,10)
// console.log(arr) //1,2,3,10,5
// arr.splice(4,1,11)
// console.log(arr) //1,2,3,10,11

// let arr = [1,2,3,4,5]
// let arr1 = [1,2,3,4,5]

// arr.slice(2) //3,4,5
// arr1.splice(2,1,8)//8,4,5

// console.log(arr)
// console.log(arr1)

