/*===================STRING================*/

// let str1 ="Hello"
// console.log(str1)

// let str2 = "There we are starting"
// console.log(str2)

// let str3 = ""
// console.log(`string${str3}`)

// how to access the string 

//we have two approach to access the string 

//1. charAt it is a function with which we can access the string

//let str = "Sandeep" 
//console.log(str.charAt(2)); // n

//2. with the use of Index value 

// let str = "Niku"
// console.log(str[2]) //K

//How to find length of the following String 

// let str = "Niku"
// console.log(str.length) //4



//String InterPolation  //template literals
// let str = "Niku"
// console.log(`Hello there my nick name is ${str}`) //Hello there my nick name is Niku

//Question 1 :- 

// let marks = 90;
// let str = `My marks are ${marks}`
// console.log(str)

//Question 2 :-

//Immutable :- String in javaScript is Immutable : we cannot change the value on the run time 

// let str = "Hello"
// //Now i have to replace the value e to T
// str[1] = "t"
// console.log(str) //Hello so the we can say that e is not replace to t 

//String concatenation  (+)

// let a = "12"
// let b ="12"
// console.log(a*b)



// let str = "sandeep"

// function revesreString(str){
//     let rev=''
//     for(let i = str.length-1 ; i>=0; i--){
//         rev += str[i]
//     }    
//     return rev
// }
// console.log(revesreString(str))

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

// const  str = "sandeep"

// console.log(str.substring(0,2)) 

// console.log(str.slice(0,2)) // slice and substring are same but slice can take negative index but substring cannot take negative index

// const str = "   hello   "
// console.log(str.trim()) // remove the white spaces from the start and end of the string 

//given a string split the string in to the array of words without using the split method


// let srt = "this word is so much polluted"
// let arr = []
// let temp = ""
// for(let i = 0 ; i < srt.length ; i++)
// {
//     if(srt[i] == " ")
//     {
//         arr.push(temp)
//         temp = ""
//     }
//     else
//     {
//         temp += srt[i]
//     }
// }
// console.log(arr)

// const res = srt.split(" ")
// console.log(res)
// console.log(srt.replace(" ", "-"))
// console.log(srt.split(" ",3))

// let str = "this word is so much polluted"

// function reverseWords(str) {
//     // 
//     let rev = ""

//     for(let i = str.length -1 ; i>=0 ; i--){
//         rev+=str[i]
//     }
//     return rev
// }
// console.log(reverseWords(str))

// function reverseWords(str) {
//     return str.split(" ").reverse().join(" ")
// }
// console.log(reverseWords(str))

// join() : is a method that joins all the elements of an array into a string. It takes one parameter, 
// which is the separator to use between the elements. 
// The default separator is a comma (,).

// let arr = ["this", "word", "is", "so", "much", "polluted"]
// console.log(arr.join(" ")) // this word is so much polluted

// let str = "this word is so much polluted"
// let s = str.split(" ")
// let r = s.reverse()
// let j = r.join(" ")
// console.log(j)

// const str = "       this word is so much polluted"

// console.log(str.trimStart())

//PADSTART : is a method that pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
// The padding is applied from the start of the current string.

// const str = "check"
// console.log(str.padStart(3, "0")) // "005"

// let str2 = "check"
// console.log(str2.padEnd(10, "0")) // "00000check"

// let str3 = "hello"
// console.log(str3.padEnd(7, "-"))

//  ascii value of A is 65 and a is 97
//  ascii value of Z is 90 and z is 122

//charCodeAt() : is a method that returns the character at the specified index in a string. 
// It takes one parameter, which is the index of the character to return.

// let str = "hello"
// console.log(str.charCodeAt(0)) // 104

//fromCharCode() : is a method that returns a string created from the specified sequence of UTF-16 code units.

// console.log(String.fromCharCode(104)) // h
