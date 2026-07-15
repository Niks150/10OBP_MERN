// Conditional Statements in JavaScript

// == checks only the value and not the data type its is called loose equality operator
// console.log(2=="2");

// line a1

//console.log(1234 == "1234"); // true

//console.log(2 == ""); // false

// when we compare boolean with number it will convert the boolean to number and then compare
// console.log(true == 1); // true

//console.log(1==1.0); // true

// strict equality operator === checks both value and data type
// console.log(2==="2"); // false

//console.log(true === true); //true

// != looze not equality operator

// console.log(2 != "2"); // false

//console.log(true != 0); // true

// strict not equality operator !== checks both value and data type

// console.log(2 !== "2"); // true

// les than operation

// console.log(2<3); // true
// console.log(2<2); // false

// console.log("2"<2); // false
// console.log(5<true); // false
// console.log(2<"45"); // true

//greater than operation

// console.log(2>3); // false
// console.log(2>2); // false

// console.log("2">2); // false
// console.log(5>true); // true
// console.log(2>"45"); // false

// less than or equal to operation

// console.log(2<=3); // true
// console.log(2<=2); // true   

// console.log("2"<=2); // true

//greater than or equal to operation

// console.log(2>=3); // false
// console.log(2>=2); // true
// console.log("2">=2); // true

// logical operators    
// logical AND operator &&

// In js ebery value has a truthy or falsy value.
// falsy values are false, 0, "", null, undefined, NaN
// truthy values are all other values except falsy values

//console.log(Boolean({})); // true
// console.log(Boolean("")); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false

// And operator returns true if both the operands are true else it returns false

// And operator it returns the first falsy value if any of the operand is falsy else it returns the last truthy value

// console.log(true && false); // false
// console.log(true && true); // true

// Or operator returns true if any one of the operands is true else it returns false
// Or operator it returns the first truthy value if any of the operand is truthy else it returns the last falsy value

//console.log( null || 5 || undefined); // 1

// console.log(true || false); // true
// console.log(false || false); // false

// ! not operator returns true if the operand is false and returns false if the operand is true

// console.log(!true); // false
// console.log(!false); // true

// console.log(Boolean(1)); // true
// console.log(Boolean([])); // true

// console.log(1 && 3); //3

// console.log( 6 && 5 && undefined); // undefined
// console.log( 3 && 2 && 8); // 8

//console.log( 1 || 5 || undefined); // 5


//short circut works when a expression contain logical operator like && or || and it will return the value of the first operand that can determine the result of the expression

// console.log( 1 && 5 && undefined); // undefined
// console.log( 1 || 5 || undefined); // 1

// let ans = 2 || 0 || 3 && 4;
// console.log(ans);

// If else statement ( conditional statement)

// const age= 18;

// if(age>=18){
//     console.log("you are eligible")
// }
// else{
//     console.log("ghar chala ja ");
// }


// now given a variable N if the given number is even print even otherwise odd

//else if ladder states that

//Nested if

// const age =20, dl= true;

// if(age >=18){
//     if(dl== true){
//         console.log("person is eligible");
    
//     }
//     else{
//         console.log("person is not eligible");
//     }
// }
// else{
//     console.log("you are under age ");
// }


//switch statement

//  const months = 12;


// switch(months){
//      case 1: {
//         console.log("jan");
//         break;
//      }
//      case 2: {
//         console.log("Feb");
//         break;
//      }
//      case 3: {
//         console.log("Mar");
//         break;
//      }
//      case 4: {
//         console.log("April");
//         break;
//      }
//      case 5: {
//         console.log("May");
//         break;
//      }
//      case 6: {
//         console.log("Jun");
//         break;
//      }
//      case 7: {
//         console.log("July");
//         break;
//      }
//      case 8:{
//         console.log("Aug");
//         break;
//      }
//      case 9:{
//         console.log("sept");
//         break;
//      }
//      case 10:{
//         console.log("Oct");
//         break;
//      }
//      case 11:{
//         console.log("Nov");
//         break;
//      }
//      case 12:{
//         console.log("Dec");
//         break;
//      }
//      default :{
//         console.log("Invalid number")
//      }
// }

// switch case without break keyword

// const num=1;

// switch(num){
//     case 1:{
//         console.log(`Number is ${num}`);
//         }
//     case 2:{
//         console.log(`Number is ${num}`);
//         }
//     default:{
//         console.log(`Numbers is ${num}`);
//     }
// }

// when we need to inform smae action on diff value

// let n=4;

// switch(n){
//     case 1:
//     case 2:
//         console.log("Number is either 1 or 2");
//         break;
//     case 3:
//     case 4:
//         console.log("Number is either 3 or 4");
//         break;
//     default:
//         console.log("Invalid number ");
//         break;
// }

//Ternery operator

//const n = 18;

//Syntax

//condition ? expressionIfTrue : expressionIfFalse;

//(n>=18)?console.log("you are eligible"):console.log("Not eligible"); 

//approach 2

// const a=2;

// let isEligible = a>=18?console.log("you are eligible"):console.log("Not eligible");
// const EvenOdd = a%2==0?"Number is prime":"Number is Odd";
// console.log(EvenOdd);

//nested turney condition 

// const age=18,dl=true;

// if(age>=18){

//     if(dl==true){
//         console.log("You are eligible to drive");
//     }
//     else{
//         console.log("You are not eligible to drive");
//     }
// }
// else{
//     console.log("You are under age ");
// }

//Nested turney

//const age = 18 ,dl= true;

//age>=18 && dl==true?console.log("You are eligible to drive"):console.log("You are not eligible to drive");

//age>=18?dl==true?console.log("you are eligible"):console.log("not eligible"):console.log("under age");


//given three variable which is largst

//const a=1,b=2,c=3;

// if (a >= b && a >= c) {
//     console.log(a + " is the largest");
// } else if (b >= a && b >= c) {
//     console.log(b + " is the largest");
// } else {
//     console.log(c + " is the largest");
// }