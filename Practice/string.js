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
    

//starstWith(): is a method that returns true if the string starts with the specified value, otherwise false.
//it takes two parameters: the first parameter is the value to search for, and the second parameter is the position in the string to start searching from. 
// The default position is 0.

// // count all the substring frm the given string starts wih "ec"
// let str = "ecoecaec"
// let count = 0;
// for(let i = 0 ; i < str.length ; i++)
// {
//     if(str.startsWith("ec", i))
//     {
//         count++;
//     }
// }
// console.log(`count is ${count}`);


//endsWith(): is a method that returns true if the string ends with the specified value, otherwise false.
//it takes two parameters: the first parameter is the value to search for, and 
// the second parameter is the position in the string to end searching from.

//given a file name with extension, check if the file is a pdf file or not

// let str = "file.pfd"

//first approach
// console.log(str.endsWith("pdf"));

//second approach 
// if(str.endsWith(".pdf"))
// {
//     console.log("file is a pdf file")
// }
// else 
//     console.log("file is not a pdf file")

//slice() : is a method that extracts a section of a string and returns it as a new string, without modifying the original string.

// let str = "Hello Sandeep"
// console.log(str.slice(-2));

//find all the substring of length 2

// let str = "Validate"

// for(let i = 0 ; i < str.length ; i++)
// {
//     let substring = str.substring(i,i+2);
//     if(substring.length == 2)
//     {
//         console.log(substring);
//     }
// }

//capatalize the first letter of each word in a string

// let str = "sandeep"

// console.log(str[0].toUpperCase() + str.slice(1)); 

//convert the middle charcater into upper case 

// let str = "nikma"

// // console.log(str[0] + str[1].toUpperCase() + str[2]); //nIk

// let middle = Math.floor(str.length/2)

// console.log(str.slice(0,middle) + str.slice(middle).toUpperCase() + str.slice(middle+1));

// const  str = "sandeep"

// console.log(str.charAt(2))
// console.log(str.indexOf("n"))
// console.log(str.toUpperCase()) // convert the string into upper and lower case 

const  str = "sandeep"

console.log(str.substring(0,2)) 

console.log(str.slice(0,2)) // slice and substring are same but slice can take negative index but substring cannot take negative index

const str = "   hello   "
console.log(str.trim()) // remove the white spaces from the start and end of the string 