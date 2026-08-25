// in this will learn about the object in javascript

// const { use, useReducer } = require("react")

  // we can access the key using the dot notation and bracket notation

//   let chair = {
//     color: "brown",
//     legs: 4,
//     material: "wood",
//     price: 2000,
//     isAvailable: true,
//   }

//   let student = {
//     name: "Sandeep",
//     age: 22,
//     gender: "male",
//     isMarried: false,
//     address: {
//       city: "Bangalore",
//       state: "Karnataka",
//       country: "India"
//     }
//   }
//   console.log(student.address.city) //Bangalore 

// 
// let person = {
//     name: "Sandeep",
//     age : 22,
//     iseligible(){
//         console.log(person.age>=18?"eligible":"not eligible")
//     }
// }


// console.log(person.iseligible())

//dynamic key :- use [] bracket for dynamic key

// let key1 = "name"
// let key2 = "age"
// let value1 = "sandeep"
// let value2 = 20

// let person={
//   [key1] : value1,
//   [key2] : value2
// }

// // console.log(person)

// //Adding property

// //we can add using the . notation and the [] bracket both 

// //. notation

// person.gender = "Male"



// //using []

// person["City"] =  "Pune"
// console.log(person)

//update the key 

//deletion in object 

// delete person.age
// console.log(person)

// let person = {
//   firstName : "sandeep",
//   lastName : "vaishnav",
//   age : 20,
//   city: "Pune"
// }

//delete lastName
// delete person.lastName

//update age
//  person.age = 30

 //add one more property

// person["homeTown"] = "Mysore"

// console.log(person)

// for to acces the key in the object we use the For in loop

// for (let key in person){
//   console.log(key)
// }

// for(let key in person){
//   console.log(key,person[key])
// }

let person = {
  firstName : "sandeep",
  age : 20,
  city: "Pune",
  salery : 3000
}
let count = 0;

for( let key in person){
  count++
}
console.log(count)

//No of key which have some value 

// let person = {
//   firstName : "sandeep",
//   age : 20,
//   city: null,
//   salery : 3000
// }

// count = 0;

// for(let key in person){
//   if( person[key] != null){
//     count++
//   }
// }
// console.log(count);

// let person = {
//   name : "sandeep",
//   age :20
// }

// let check = "name"

// let obj = {
//   per1 : "abhi",
//   per2 : "mahan"
// }

// for(let sub in obj){
//   console.log(sub)
// }

// let arr = [1,2,2,1]
// let target = 2;
// let count = 0;

// for(let i = 0 ; i < arr.length ; i++)
// {
//   if(arr[i]==target){
//     count++
//   }
// }
// console.log(count)

// let arr=[1,2,3,4,4,4];
// let obj={}
// for(let i=0;i<arr.length;i++){
// if(arr[i] in obj == false){
//   obj[arr[i]] =1;
// }
// else{
//   obj[arr[i]]++
// }
// }
// console.log(obj);

//object.keys(obj_name) -> it return keys of the obj as an array

// let arr = {
//   name :"helo",
//   std : "+ve"
// }
// console.log(arr.Object.keys(arr))

// let person = {
//   name : "mohit",
//   lname : "patel",
//   add :{
//     city :"maha",
//     pincode : "14115"
//   }
// }

//update the pin code

// person.add.pincode = 411111 //using the . notation 
// console.log(person)

// person["add"]["city"] = "guj"  //using the square bracket []
// console.log(person)

//add property 

// person.add.houseProperty = "TMKOC"
// console.log(person)

// let serial = {
//   name : "TMKOC",
//   ID : 1234
// }

// //Update
// serial.ID=4567
// //Add
// serial.city="pune"
// //delete
// // delete serial.ID

// console.log(serial)

// let person = {
//   name : "mohit",
//   lname : "patel",
  
// } 

//For in Loop...

// for(let elem in person){
//   console.log(elem)
// }

// console.log( Object.keys(person))
// console.log( Object.values(person))

//Assign method

// let person = {
//   name : "Sandeep",
//   std : 10
// }
// let data = {}

// Object.assign(data,person)

// console.log(data)


// let school = {
//   schoolName : "BPS",
//   schoolLocation : "Pune",
//   studentData : [{
//     className:10,
//     devision:"A"
  
//   },{
//     className:9,
//     devision:"B"
  
//   },{
//     className:8,
//     devision:"D"
  
//   }]

// }
// console.log(school)


//Create a accio library

// let library = {
//   insName : "AccioCentre",
//   location : "Pune",
//   book :[ {
//     bookName : "HTML",
//     issuedDate : "4th dec",
//     author : "sharma"
//   },{
//     bookName : "css",
//     issuedDate : "5th dec"
//   },{
//     bookName : "javascript",
//     issuedDate : "9th dec",
//     author:"sharma"
//   }]
// }
// console.log(accio)

//print all the book name 

// console.log(accio.library)

// for(let book of accio.library){
//   console.log(book.bookName)
// }

// add publisher property to each

// for(let book of accio.library){
//  book.publisher = "123"  
  
// }

// console.log(accio)

// let count = 0 ;

// for(let book of accio.library){
//   count++
// }
// console.log(count)

//remove all the books 

// for(let book of library.book){
//   if(book.author == "sharma"){
//     delete book.author
//   }
// }
// console.log(library)

// for(let i = 0 ; i < library.book.length ; i++){
//   if(library.book[i].author == "sharma"){
//     library.book.splice(i,1);
//     i--;
//   }
// }

// console.log(library)

//Arrays of the object

// let library = [
//  {
//     bookName : "HTML",
//     issuedDate : "4th dec",
//     author : "sharma"
//   },{
//     bookName : "css",
//     issuedDate : "5th dec"
//   },{
//     bookName : "javascript",
//     issuedDate : "9th dec",
//     author:"sharma"
  
// }]

// for(let books of library){
//   console.log(books.bookName)
// }


//print the frequency of the follwing array

// let arr = [1,2,3,3,2]
// let obj = {}
// for(let i = 0 ; i < arr.length ; i++){
//   if(arr[i] in obj == false){
//     obj[arr[i]] =1
//   }
//   else{
//     obj[arr[i]]++
//   }
// }
// console.log(obj)


// let students = [
//   {name:"Abhishek",grade:"A"},
//   {name:"Rakhi",grade:"b"},
//   {name:"Naman",grade:"A"},
//   {name:"Raman",grade:"c"}

// ]
// let resl = {}

// for(let student of students){
//   if(student.grade in resl){
//     resl[student.grade].push(student.name)
//   }
//   else{
//     resl[student.grade]=[student.name];
//   }
// }
// console.log(resl)

//extraxt the value of the object in to varibales

//object destructuring

// let person = {
//   name:"naman",
//   age : 20
// }
// let{name,age}=person;
// console.log(name,age)

//ReName the variable 
// let {name:firstName,age:currentAge} = person;

// console.log(firstName,currentAge)

/////  sumofbooks
// let sum = 0;
// let arr = [
//   { title: "Book 1", price: 10 },
//   { title: "Book 2", price: 20 },
//   { title: "Book 3", price: 30 }
// ]

// for(let element of arr){
//   sum+=element.price
// }
// console.log(sum)

// let school = [
//   {name:"DPS",location:"pune"},
//   {name:"BPS",location:"banglore"},
//   {name:"Ambe",location:"Kasol"},
//   {name:"BAPS",location:"vadodara"},
// ]

// for(let elem of school){
//   console.log(elem.name) /// use to extract all the name 
// }

// for(let element of school){
//   console.log(element.location+"-"+element.name)
// } 
// o/p -> pune-DPS
// banglore-BPS
// Kasol-Ambe
// vadodara-BAPS

// for(let element of school){
//   if(element.name == "BPS"){
//     delete element.name
//   }
//   else if(element.location == "pune"){
//     element.bookName = "HTML"
//   }
//   else if(element.location == "pune" || element.name == "BAPS"){
//     delete element.location
//     // element.location = "Hydrabad"
//   }
// }
// console.log(school)

// o/p -> [
//   { name: 'DPS', location: 'pune', bookName: 'HTML' },
//   { location: 'banglore' },
//   { name: 'Ambe', location: 'Kasol' },
//   { name: 'BAPS', location: 'vadodara' }
// ]


//Group By city

// let person =[
//   {name:"Abhishel", 
//     address : {
//       city:"pune"
//     }
//   },
//   {name:"Pawan", 
//     address : {
//       city:"pune"
//     }

//   },
//   {name:"Hemant",
//     address : {
//       city:"lucknow"
//     }
//   },
//   {
//     name: "mohit",
//     address:{
//       city:"vadodara"
//     }
//   }
// ]

// let resul = {}

// for(let elem of person){
//     if(elem.address.city in resul){
//         resul[elem.address.city].push(elem.name)
//     }
//     else{
//       resul[elem.address.city]=[elem.name]
//     }
// }

// console.log(resul)

// o/p -> { pune: [ 'Abhishel', 'Pawan' ], Lucknow: [ 'Hemant' ] }

// let {name:firstName} = person;

// console.log(person)

//Function Parameter

// let user = {
//   name:"sandeep",
//   city:"pune"
// }

// function printCity({name,age}){
//   console.log(user.name,user.city)
// }

// printCity(user)

//REST operator

//spread Operator ->

// let person = {
//   name:"sandeep",
//   age:22
// }

// let user = {...person}

// console.log(user)

//shallow copy and deep copy 


//Linear Search

// let person = [
//   {name:"sandeep",age:20},
//   {name:"shradha",age:22},
// ]

// for(let element of person){

//   if(element.name = "sandeep"){

//     console.log("Present")

//   }
//   else{
//     console.log("not Present")
//   }
// }


//consicutive pair of the sum 
//  let  arr = [10,20,30,40,50]
 
//  let count = 0;

//  for(let i = 0 ; i < arr.length -1 ; i++){
//   if(true){
//     count++
//   }
//  }

// console.log(count)

// let user = [
//   {name: "Abhishek" , age : 20 , address :{
//     city: "pune"
//   } },
//   {name: "sandeep" , age : 22 , address :{
//     city: "pune"
//   } },
//   {name: "Shraddha" , age : 20 , address :{
//     city: "banglore"
//   } },
//   {name: "Abhishek" , age : 20 , address :{
//     city: "pune"
//   } }
// ]

// for(let result of user){
//   if(result.address.city == "Pune"){
//     result[result.address.city].push(result.name)
//   }
// }


//  console.log(a)
//  let a = 20  //access 'a' before initialization

//student more than have 55% attendence and 
// scored atleast 50% marks are passed print the array consisting of the name of the passed student 

// let students = [
//   {name:"shravan",attendence:"50%",makrks:35,totalMarks:78},
//   {name:"Himanshu",attendence:"70%",makrks:40,totalMarks:90},
//   {name:"Manak",attendence:"60%",makrks:50,totalMarks:100}
// ]
// let result = []

// for(let student of students){

//   let percentage = (student.makrks / student.totalMarks) * 100

//   if(student.attendence > "55%" && percentage >=50)
//   {
//     result.push(student.name)
//   }
// }
// console.log(result)

//String Comperision 

// let str1 = "125"
// let str = "2"
// console.log(str1>str) //false
//===========================================================================//

//Sorting method //

//sort method is used to sort the array 

// arr.sort 
// Function used to determine the order of the elements. 
// It is expected to return a negative value if the first argument is less than the second argument, 
// zero if they're equal, and a positive value otherwise. 
// If omitted, the elements are sorted in ascending, UTF-16 code unit order.
// [11,2,22,1].sort((a, b) => a - b)
// Sorts an array in place. This method mutates the array and returns a reference to the same array.

//sort method first convert the number into strig then it checks Lexicographacelly then print the output 

// let arr = [1,2,5,8,5,5]
// arr.sort()
// console.log(arr)

// let arr = [0,1,2,8,74,12,45]
// arr.sort()
// console.log(arr)  //0,1,12,2,45,74,8

//comperator operator

// we use a-b for ascending order anf b-a for the descending order 

// function comp(a,b){
//   return a-b
// }

// let arr = [1,2,89,65,1]
// arr.sort(comp)
// console.log(arr)// [ 1, 1, 2, 65, 89 ]

// function comp(a,b){
//   return b-a
// }

// let arr = [1,2,8,9,5,4,7,8]
// arr.sort(comp)
// console.log(arr)// [9,8,8,7,5,4,2,1]

// let arr = [{marks:9},{marks:19},{marks:1},{marks:18}]

// function comp(a,b){
//   return a.marks - b.marks
// }

// arr.sort(comp)

// console.log(arr)

// let persons = [{age:9},{age:19},{age:1},{age:18}]

// function comp(a,b){
//   return b.age - a.age

// }

// persons.sort(comp)

// console.log(persons)


// [i+1] = next 
// [i-1] = pervious
// [i] = present

// let persons =[
//   {name:"sanu",age:12},
//   {name:"ruh",age:12},
//   {name:"megha",age:15},
// ]




//sort it in acsending order of no of character of array

// let arr = ["raman", "ram", "atul"];

// function comp(a, b) {
//     return a.length - b.length;
// }

// arr.sort(comp);

// console.log(arr);


//localeCompare : used to compare two string 
//if a is lexicographacelly greater than b it returns -> 1
//if b is lexicographacelly greater than a it returns -> -1
//if a and b is lexicographacelly equal it returns -> 0

//predict the output

//Given the arr sort it to revese lexicographical order

let arr = ["raman", "ram", "atul"];

function comp(a,b){
   return a.localeCompare(b)
}

arr.sort(comp)
console.log(arr)

// let student = [
//   {name:"Abhishek",age:30},
//   {name:"Akrit",age:45},
//   {name:"aansh",age:45}
// ]

// function comp(a,b){
//   if(a.age != b.age){
//     return a.age - b.age
//   }
//   else
//    return a.name.localeCompare(b.name) // for to compare two string we use localeCompre        
// }
// student.sort(comp)
// console.log(student)

// let student = [
//   {name:"Abhishek",age:30},
//   {name:"Akrit",age:45},
//   {name:"aansh",age:45}
// ]

// let result = Object.keys(student)

// console.log(result)

