/* const name = "sandeep"
console.log(`Hello my name is ${name}`); // we use backtags for the string interpolation

// Fahrenheit = (Celsius × 9/5) + 32
 const celsius = 30;
 const fahrenheit = (celsius * 9/5) + 32;
 console.log(fahrenheit);

 ------------Number------------
 
 const hundered = 10000000;
 console.log(hundered.toLocaleString()); // 10,000,000

 console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
 console.log(Number.MIN_VALUE); // 5e-324

 console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

 console.log(isNaN("hello")); // true
 console.log(Number.isNaN("sandeep ")); // false

 */

//----------------Math-----------------

// console.log(Math.ceil(a)); // 26
// console.log(Math.floor(4.4)); //4


// const N=13;

// switch(N){

//     case 12:{
//       console.log("I am even");
//       break;
//     }
//     case 13:{
//       console.log("I am prime");
//       break;
//     }
//     case 25:{
//       console.log("I am odd");
//       break;
//     }
//     default:{
//       console.log("I am just a number");
//       break;
//     }
//   }

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('', input => {
//   const [a, b,c] = input.split(' ').map(Number);

//   console.log(a+b);
//   console.log(a-b);
//   console.log(a*b);
//   console.log(Math.floor(a/b));
//   console.log(a%b);



//   readline.close();
// });

// let a=1;
// let b=2
// a = a + b;
// b =  a - b;
// a = a - b;
// console.log("a"+a);
// console.log("b"+b); //swap using without third variable 


// let c=27;

// let F= (c * 9 / 5) + 32;
// console.log(F.toFixed(6)) // covert c to f

// const s= "qwer"

// console.log(s.length);// find the leength of the given string

// let a=1,b=3;

// if(a>b){
//   console.log("A is greatest of all time");
// }
// else{
//   console.log("B is greatest of all time"); //comparing 2 number which is greatest 
// }

// let a=10,b=2,c=8;

// if(a>=b && a>=c){
//   console.log("a is greatest of all time");
// }
// else if(b>=a && b>=c){
//   console.log("b is greatest of all time");

// }
// else{
//   console.log("C is greates of all time")
// } // comparing which is greates of all time using 3 variable 

// let marks = 69;

// switch (true) {
//   case (marks > 90): console.log("Grade A");
//     break;
//   case(marks <= 90 && marks>70):{
//     console.log("Grade B");
//     break;
//   }
//   case (marks<=70 && marks>=50):{
//     console.log("Grade c");
//     break;
//   }
//   case (marks<50):{
//     console.log("Fail")
//     break;
//   }
//   default:{
//     console.log("invalid input")
//     break;
//   }
// } //grade student using switch case

//

// let age=20,dl=false;

// switch(true){
//   case (age>=18 && dl==true):
//     {
//       console.log("Eligible");
//       break;
//     }
//   default:{
//     console.log("Not eligible");
//     break;
//   }      //
// }

// let months=7;

// switch(months){
//   case 1:
//   case 2:
//   case 3:
//     console.log("Quarter 4");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("Quarter 3");
//     break;
//     case 7:
//   case 8:
//   case 9:
//     console.log("Quarter 2");
//     break;
//   case 10:
//   case 11:
//   case 12:
//     console.log("Quarter 1");
//     break;
//   default:{
//     console.log("Invalid");
//     break;
//   }
// }  approach 2

// let month = 7;

// switch (true) {
//   case (month >= 1 && month <= 3):
//     console.log("Quarter 4");
//     break;

//   case (month >= 4 && month <= 6):
//     console.log("Quarter 3");
//     break;

//   case (month >= 7 && month <= 9):
//     console.log("Quarter 2");
//     break;

//   case (month >= 10 && month <= 12):
//     console.log("Quarter 1");
//     break;

//   default:
//     console.log("Invalid");
// }


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', input => {
    const d = Number(input);

    years = Math.floor(d / 356);
    remaining = d % 365;
    months = Math.floor(remaining / 30);
    days = remaining % 30;

    // years = Math.floor(d / 365);

    // remaining = d % 365;

    // months = Math.floor(remaining / 30);

    // days = remaining % 30;


    console.log(`${years} Years, ${months} months, ${days} days`)

    readline.close();
});