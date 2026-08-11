// in this will learn about the object in javascript

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

// let person = {
//   firstName : "sandeep",
//   age : 20,
//   city: "Pune",
//   salery : 3000
// }
// let count = 0;

// for( let key in person){
//   count++
// }
// console.log(count)

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

let library = {
  insName : "AccioCentre",
  location : "Pune",
  book :[ {
    bookName : "HTML",
    issuedDate : "4th dec",
    author : "sharma"
  },{
    bookName : "css",
    issuedDate : "5th dec"
  },{
    bookName : "javascript",
    issuedDate : "9th dec",
    author:"sharma"
  }]
}
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


//Print the following pattern 


// let n = 3;
// for( let i = 0 ; i <= n ; i++){
//   let row = ""
//   for(let j = 0 ; j <=i ; j++){
//     row+="*"
//   }
//   console.log(row)

//output
// *
// **
// ***

// }
// let n = 4
//   for(let i = 1 ; i <= n ; i++){
//     let row = ""
//       for(let j = 1 ; j <= i ; j++)
//       {
//         row += String.fromCharCode(65+(i+j-2)%26)
//       }
//       console.log(row)
//   }

//output
// A
// BC
// CDE
// DEFG
// EFGHI


//  let n = 4;

//  for(let i = 0 ; i <= n ; i++){
//     let row = ""
//     for(let j = 0 ; j <= n ; j++){
//       row+="*"
//     }
//     console.log(row)
//  }

//  o/p :- 
// *****
// *****
// *****
// *****
// *****

// let n = 4;

// for(let i = 0 ; i < n ; i++){
//   let row = "";
//     for(let j = i ; j < n ; j++){
//       row+="*"
//     }
//     console.log(row)
    
//   }

// o/p 
// ****
// ***
// **
// *

// let n = 4;

// for(let i = 0 ; i <= n ; i++){
//   let row = "";
//     for(let j=0 ; j<=n ; j++){
//       row+= String.fromCharCode(97+i)
//     }
//     console.log(row)
// }
//output
// aaaaa
// bbbbb
// ccccc
// ddddd
// eeeee

// let n = 4;

// for(let i = 0 ; i <= n ; i++){
//   let row = "";
//     for(let j=i ; j <= n ; j++){
//       row+= String.fromCharCode(65+i)
//     }
//     console.log(row)
// }

// for(let i = 0 ; i <= n ; i++){
//   let row = "";
//     for(let j=0 ; j <= n ; j++){
//       row+= String.fromCharCode(65+i)
//     }
//     console.log(row)
// }
// for(let i = 0 ; i <= n ; i++){
//   let row = "";
//     for(let j=i ; j <= n ; j++){
//       row+= String.fromCharCode(65+i)
//     }
//     console.log(row)
// }

// let n = 4;

// for(let i = 1 ; i <= n ; i++){
//   let row = "";
//     for(let j = 1 ; j <= i ; j++){
//       row+=i
//     }
//     console.log(row)
//   }

// 1
// 22
// 333
// 4444


// let n = 4;

// for(let i = 1 ; i <= n ; i++){
//   let row = "";
//     for(let j = 1 ; j <= i ; j++){
//       row+=(j)

//     }
//     console.log(row)
// }

// 1
// 12
// 123
// 1234