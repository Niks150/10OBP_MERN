//comparision

const { constants } = require("buffer")
const { type } = require("os");
const { deprecate } = require("util");
const { isNumberObject } = require("util/types")

// let a = "10"
// let b = 10
// let c = a + b
// console.log(c, typeof(c)) //1010 string [: beacause it use the + symbol]

// let x = 5
// let y = "5"
// console.log(x == y) // true [ Coz it convert the number to string ]
// console.log(x === y) // fasle [coz === checks the datatype too ]

// let 1name = "Ram" // let name1
// let first-name = "Sita" //False
// let _age = 25 // true
// let $price = 100 // true
// let my name = "Krishna" //my_name

// let 1name = "Ram" //SyntaxError 
// console.log(1name)

// let _age = 20
// console.log(_age) // true 

// let first-name = "Sita" //SyntaxErro first_name
// console.log(first-name)

// let $price = 100 
// console.log($price) // ture

// let n = 17
// console.log(n % 5) //2
// console.log(parseInt(n / 5)) //3
// console.log(n / 5) //3.4

// let a = 10
// let b = 20
// let result = a + b * 2 / 4 - 5

// console.log(result) //15
// let x = 5
// x = x + 10
// x = x * 2
// console.log(x)30

// let marks = 75
// if(marks >= 90) {
//     console.log("A")
// } else if(marks >= 75) {
//     console.log("B")
// } else if(marks >= 60) {
//     console.log("C")
// } //B

// let age = 18
// let result = age >= 18 ? "Adult" : "Minor"
// console.log(result) //Adult


// let day = 3
// switch(day) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//     case 4:
//         console.log("Thursday")
//         break
//     default:
//         console.log("Invalid")
// } //wednesday thrusday

// for(let i = 1; i <= 5; i++) {
//     if(i === 3) break
//     console.log(i)
// } //12
// for(let i = 1; i <= 5; i++) {
//     if(i === 3) continue
//     console.log(i)
// } //1245

// let n = 1234
// let count = 0
// while(n > 0) {
//     count++
//     n = parseInt(n / 10)
// }
// console.log(count) //4

// let sum = 0
// for(let i = 1; i <= 4; i++) {
//     sum += i
// }
// console.log(sum) //10

// let a = 123

// count = 0 

// while (a > 0){
//     count++
//     a = parseInt(a/10)
// }
// console.log(count) //3

// let arr = [10, 20, 30, 40]
// console.log(arr[2]) //30
// console.log(arr.length) //4
// arr.push(50) 
// console.log(arr.length)//5

// let str = "Hello"
// console.log(str.length) //5
// console.log(str[0])//H
// console.log(str.toUpperCase())//HELLO

// let student = {
//     name: "Ram",
//     age: 20,
//     marks: 85
// }
// console.log(student.name) //"Ram"
// console.log(student["age"])//20
// student.marks = 90
// console.log(student.marks)//90

// let C = 10
// let F = (C * 9/5) + 32
// switch(true){
//     case(F >= 100) :{
//         console.log("Very Hot")
//         break
//     }
//     case(F >= 70) :{
//         console.log("Warm")
//         break
//     }
//     case(F >= 50) :{
//         console.log(" Pleasant")
//         break
//     }
//     case(F < 50) :{
//         console.log("Cold")
//         break
//     }
//     default : {
//         console.log("Invalid")
//         break
//     }

// }
// | Input (C) | Output |
// | --- | --- |
// | 37 | 98.6°F - Warm |
// | 40 | 104.0°F - Very Hot |
// | 10 | 50.0°F - Pleasant |
// | 0 | 32.0°F - Cold |


// let num = 12345;
// let reversed = 0;

// while (num != 0) {
//     num % 10;              // Get last digit
//     reversed = reversed * 10 + digit;  // Add digit to reversed number
//     num = Math.floor(num / 10);        // Remove last digit
// }

// console.log(reversed);

// let str = "hello"

// let count = 0 ;

// for(let i = 0 ; i < str.length ; i++){
//     if("aeiou".includes(str[i])){
//         count++
//     }
// }
// console.log(count)

// let str = "hello world how are you "
// let result = str.split(" ") //it takes the separator to separator 
// console.log(result)

// let arr = [1,2]
// let sum = 0


// for(let i = 0 ; i< arr.length ;i++){
//     sum+=arr[i]

// }
// let avg = parseInt(sum/arr.length)

// console.log(avg)

// let student = {
//     math: 85,
//     science: 90,
//     english: 78,
//     hindi: 88
// }
// let sum = 0
// let marks = Object.values(student)

// for(let i = 0 ; i < marks.length ; i++){
//     sum+=marks[i]
// }

// console.log(sum)

// Object.values


// let student = {
//     math: 1,
//     science: 2,
//     english: 1,
//     hindi: 2
// }
// let result = Object.values(student)
// let sum = 0 
// for(let i = 0 ; i < result.length ; i++){
//     sum+=result[i]
// }
// let avg = sum/result.length
// console.log(avg)

// let student = {
//     name: "Ram",
//     marks: 95,
//     attendance: 80
// };

// if(student.attendance < 75){
//     console.log("Detained");
// }
// else if(student.marks >= 90){
//     console.log("A Grade - Excellent!");
// }
// else if(student.marks >= 75){
//     console.log("B Grade - Good Job!");
// }
// else if(student.marks >= 50){
//     console.log("C Grade - Pass");
// }
// else{
//     console.log("F Grade - Fail");
// }

//Duplicate in array 

// let students = [

//     {name:"sandeep",grade:"A "},
//     {name:"shradha",grade:"B "},
//     {name:"hello",grade:"A "},

// ]

// let result = {}

// for(let student of students){
//     if(student.grade in result){
//         result[student.grade].push(student.name)
//     }
//     else
//         result[student.grade]=[student.name]
// }
// console.log(result)

// let cart = [
//     { name: "Shirt", price: 500, quantity: 2 },
//     { name: "Pant", price: 800, quantity: 1 },
//     { name: "Shoes", price: 1200, quantity: 1 }
// ]

// let total = 0
// let discount = 0
// let gst = 0
// let final = 0



// for (let carts of cart) {
//     total += carts.price*carts.quantity

// }

// if (total > 2000) {
//     discount = total * 10 / 100

// }

// total = total - discount
// gst = total * 18 / 100
// final = total + gst
// console.log(`Sub total : ${total} , discount : ${discount} , After discount : ${final}`)

// ===================Comparison learning ===================//

// let score = 33
// console.log(typeof score) //number

// let score = "33"
// console.log(typeof score) //string

// let a = 10
// let b = "10"
// console.log(a+b) // + used for the concate in js

// let a = 10
// let b = "10"
// console.log(a-b) // except + if we perfom *,/,- the string convert into number 

// let a = "20"
// let b = "10"
// console.log((a-b))// In this when we perform the - the string convert into number

// let a = true
// let b = 10
// console.log(a-b) // in this boolen convert into the number //-9

// let a = true
// let b = 10
// console.log(a+b) // if we perform + with boolean and number the boolean convert into number and perform addition 

// let a = true
// let b = "false"
// console.log(a+b)  // whenever we use the string and perform the + the string concate the result

// let a = undefined
// let b = 11
// console.log(a+b) //NaN

// let a = null;
// let b = 11
// console.log(a+b) //11

// let a = null
// let b = null
// console.log(a+b) //0

// let a = "11"
// let b = "11"
// console.log(a*b) //121 // String convert into the number

// for to use the Power we use the two **
// let a = 2
// console.log(a**a) //4

//===================Scope ==============
//===========//================
// console.log(addTwo(5))  // Refernce error
// const addTwo = function(num){ => Expression 

//     return num + 1
// }

// // console.log(addTwo(5)) //6


// console.log(addOne(4)) //5
// function addOne(num){ => Function 
//     return num + 1
// }
// // console.log(addOne(4)) //5

// Mock Practice











