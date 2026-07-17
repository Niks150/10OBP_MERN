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

let num = 12345;
let reversed = 0;

while (num != 0) {
    num % 10;              // Get last digit
    reversed = reversed * 10 + digit;  // Add digit to reversed number
    num = Math.floor(num / 10);        // Remove last digit
}

console.log(reversed);