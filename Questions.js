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

