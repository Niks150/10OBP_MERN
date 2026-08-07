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

let person = {
  name : "sandeep",
  age :20
}

let check = "name"

