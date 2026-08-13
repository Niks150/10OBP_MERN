//=========1========//

// Problem: Convert Days to Years, Months, and Days
// Problem Statement
// Write a program that takes a number of days as input and converts it into years, months, and remaining days. Assume:

// 1 year = 365 days
// 1 month = 30 days
// Input
// A single integer d (1 ≤ d ≤ 10000) representing the number of days.

// Output
// Print the result in the format:

// X years, Y months, Z days
// Examples
// Example 1: Input:

// 400
// Output:

// 1 years, 1 months, 5 days
// Example 2: Input:

// 800
// Output:

// 2 years, 2 months, 10

// let d= 400;

// let years = Math.floor(d / 365);
// let remaining = d % 365;
// let months = Math.floor(remaining / 30);
// let days = remaining % 30;

// console.log(years,months,days)


//======2======//

// let num = 12345;
// let reversed = 0;

// while (num != 0) {
//     num % 10;              // Get last digit
//     reversed = reversed * 10 + digit;  // Add digit to reversed number
//     num = Math.floor(num / 10);        // Remove last digit
// }

// console.log(reversed);

//Sum of the digits.

// let num= 123;
// let sum = 0;
// while(num !=0){
//     let last_digit = num % 10;
//     sum = sum + last_digit;
//      num = Math.floor(num/10);
// }
// console.log(sum)

// count of the number

// let num = 123;
// let count = 0;
// while(num != 0){
//     let last_digit = num % 10;
//      count++
//      num = Math.floor(num);

// }
// console.log(count)

//Break and Continue

// for(let i=0; i<=10;i++){
//     console.log(i);
    
//         break
    
// }

//continue :- It will stop the execution code after contion beacome true for the perticular condtion

// for(let i= 1 ; i<=10;i++){
//     if(i==4 || i==6){
//         continue
//     }
//     console.log(i)
// }


// let i = 1
// do {
//     console.log(i)
//     i++
// } while (i <= 5);

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     else if (i == 35) {
//         break;
//     }
//     console.log(i)
// }

// for (let i = 1; i <= 5; i++) {
//     if (i==1 || i==2) {
//         break;
//     }
//     console.log(i)
    
// }

// let a =2,b=3,c;
// c=a+b;
// console.log(c)

// function checkFactorial(n,r){
//     let npr = factorial(n)/factorial(n-r);
//     return npr;
// }


// function factorial(num){

//     let fact = 1;

//     for(let i =1 ; i<=num; i++){
//         fact *= i;
//     }
//     return fact;
// }

// console.log(checkFactorial(5, 2));
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('', n => {
// 	n = parseInt(n);

// 	let sum=0;
	
// 	for(let i = 1 ; i <= n ; i++)
// 	{
// 		if(i % 2 == 0){
			
// 			sum+=i;
// 		}
		
// 	}
// 	console.log(sum)
// 	readline.close();
// });
 
// new Question

// const { count } = require('console');
// const readline = require('readline');
// const { isNumberObject } = require('util/types');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function numDigits(num){
//   num = Number(num);
// 	let count = 0;
// 	while(num != 0){

// 	count ++;
// 	num = Math.floor(num / 10); 
//   }
//   return count
// }


// rl.on('line', (n) => {
//   console.log(numDigits(parseInt(n)));
//   rl.close();
// });

//  let arr = [2,3,4,5,6]
//  let arr2=[]
//  for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]==arr[0]){
//         arr2.push(arr[i]*arr[i+1])
//     }
//     else if(arr[i]== arr[arr.length-1]){
//         arr2.push(arr[i]*arr[i-1])
//     }
//     else{
//         arr2.push(arr[i-1]*arr[i+1])
//     }
    
// }
// console.log(arr2)




// -------------------------------------------------

// // arr is the array of numbers, n is the number fo elements
// function replaceArray(arr, n) {
//   let arr2=[]
//   for(let i = 0 ; i< arr.length ; i++){
//     if(arr[i]== arr[0]){
//       arr2.push(arr[i]*arr[i+1])
//     }
//     else if(arr[i]== arr[arr.length-1]){
//       arr2.push(arr[i]*arr[i-1])
//     }
//     else{
//       arr2.push(arr[i-1]*arr[i+1])
//     }
//     }
  
//   return arr2
//   }
// /*Do not change the code below */

// var readline = require("readline").createInterface(process.stdin);

// let inputArr = [];
// var lineNumber = -1;
// var inputSize;

// //multipleline input from User
// readline.on("line", readInputs);

// function readInputs(line) {
//   inputArr.push(line);
//   lineNumber++;

//   //Exit Condition
//   if (lineNumber == 1) {
//     logic("s");
//     readline.close();
//   }
// }

// function logic(input) {
//   let n=parseInt(inputArr[0].trim());
//   let Arr=inputArr[1].trim().split(" ").map(x=>parseInt(x));
//   console.log(replaceArray(Arr, n).join(" ").trim());
// }
