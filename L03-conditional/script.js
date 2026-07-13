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

console.log( 1 || 5 || undefined); // 5




