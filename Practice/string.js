// new Topic String 

// const str = "Nik"

// console.log(str[2])

// string are immutable : we cannot change the string value directly 

// const str = "Nik"

// str[2] = "T"
// console.log(str) //Nik

// string using loops 

// const str = "name"
// for(let i = 0 ; i < str.length ; i++){
//     console.log(str[i])
// }

// Concatenation

// const s = "A"
// const t = "B"
// console.log(s+t) //AB

//string comparison

// for of loop : we use for of loop to traverse the string or array

// let str = "Nik"

// for (let char of str) {
//     console.log(char)
// }

//escape characters : we use escape characters to print the special characters in the string
// we use the backslash (\) to escape the special characters in the string

// console.log("Hello\nSandeep");

//string serching and manipulation : 

//indexOf(): is a method that returns the index of the first occurrence of 
// a specified value in a string. If the value is not found, it returns -1.

// let str = "Hello Sandeep"
// console.log(str.indexOf("p")) //12

// let str = "Hello Sandeep"
// console.log(str.indexOf(" ")) //5

//LastIndexOf(): is a method that returns the index of the last occurrence of 
// a specified value in a string. If the value is not found, it returns -1.
// let str2 = "H e l l o"
// console.log(str2.lastIndexOf(" ")); //7

//includes()

// const str = "abhishek"

// console.log(str[0].toUpperCase() + str.slice(1));


// let s = "Hello Sandeep"
// function reverseWords(s) {
//     let rev = ""
//     for(let i = s.length - 1 ; i >= 0 ; i--){
//         rev += s[i]
//     }
//     return rev
// }
// console.log(reverseWords(s)) //peednaS olleH

// let s = "Hello Sandeep"
// function reverseWords(s) {
//     return s.split(" ").reverse().join(" ")
// }
// console.log(reverseWords(s)) //Sandeep Hello
 //dlrow olleH

//  let sentance = "Hello World";
//  let slength = sentance.split(" "); // ['Hello', 'World']
 
//  for (let i = 0; i < slength.length; i++) {
//         let word = slength[i];
//         let rev = "";
//                for (let j = word.length - 1; j >= 0; j--) {  //Word Reversals
//             rev += word[j];
//         }
//         let newWord = rev;
//         slength[i] = newWord;
//     }           
//         console.log(slength.join(" "));
       
 


