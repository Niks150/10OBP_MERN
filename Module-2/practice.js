// Q1. Find the Largest Element
// Given:
// const arr = [10, 25, 7, 45, 18];
// Find the largest element in the array.

// let arr = [1,2,5,7,8,9,54,69,21];

// function findLargestElement(arr) {
//     let largest = arr[0]
//     for(let i = 0 ; i < arr. length ; i++){
        
        
//        if(arr[i] > largest) {
//         largest = arr[i]
//        }
       
//     }
//     return largest
// }
// console.log(findLargestElement(arr)); // Output: 45

// Q2. Find the Smallest Element
// Given:
// const arr = [10, 25, 7, 45, 18];
// Find the smallest element in the array.
// Expected Output:
// 7

// let arr = [10, 25, 7, 45, 18];

// function findSmallestElement(arr) {
//     let smallest = arr[0]
//     for(let i = 0 ; i < arr. length ; i++){
//         if(arr[i] < smallest) {
//             smallest = arr[i]
//         }
//     }
//     return smallest;
// }
// console.log(findSmallestElement(arr)); // Output: 7


// Q3. Find the Second Largest Element
// Given:
// const arr = [10, 45, 23, 67, 12, 67, 34];
// Find the second largest distinct element.
// Expected Output:
// 45

// let arr = [10, 25, 7, 45, 18];

// function findSmallestElement(arr) {
//     let smallest = arr[0]
//     let secondSmallest = arr[0]
//     for(let i = 0 ; i < arr. length ; i++){
//         if(arr[i] < smallest) {
//             smallest = arr[i]
//         }
//         if(arr[i] < secondSmallest && arr[i] !== smallest) {
//             secondSmallest = arr[i]
//         }
//     }
//     return [smallest, secondSmallest];
// }
// console.log(findSmallestElement(arr));



// let arr = [1, 2, 2, 3, 1, 2, 4, 3];

// let result = {}

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] in result){
//         result[arr[i]] = result[arr[i]] + 1
//     }
//     else{
//         result[arr[i]] = 1
//     }
// }
// console.log(result)

// const student = {
//  name: "Rahul",
//  marks: 75
// };

// student.marks = 90; // Modifying the marks property
// console.log(student.marks); 


// const student = {
//  name: "Rahul",
//  age: 20,
//  course: "JavaScript"
// };

// if ("marks" in student) {
//   console.log("Marks property exists");
// } else {
//   console.log("Marks property does not exist");
// }

// const student = {
//  name: "Rahul",
//  age: 20,
//  course: "JavaScript",
//  marks: 85
// };

// let values = Object.values(student);

// console.log(values); 

// console.log(Object.values(student)); // Output: [ 'Rahul', 20, 'JavaScript', 85 ]

// const students = [
//  { name: "Rahul", age: 20, marks: 85 },
//  { name: "Amit", age: 21, marks: 72 },
//  { name: "Priya", age: 19, marks: 91 },
//  { name: "Neha", age: 20, marks: 88 }
// ];

// for(let student of students){
//     console.log(student.name)
// }

// const students = [
//  { name: "Rahul", age: 20, marks: 85 },
//  { name: "Amit", age: 21, marks: 72 },
//  { name: "Priya", age: 19, marks: 91 },
//  { name: "Neha", age: 20, marks: 88 }
// ];

// for(let student of students){
//     if(student.marks > 80){
//         console.log(student.name)
//     }
// }

// const students = [
//  { name: "Rahul", age: 20, marks: 85 },
//  { name: "Amit", age: 21, marks: 72 },
//  { name: "Priya", age: 19, marks: 91 },
//  { name: "Neha", age: 20, marks: 88 }
// ];

// let highestMarks = 0;
// let nameofStudent = "";
// for(let student of students){
//     if(student.marks > highestMarks){
//         highestMarks = student.marks
//         nameofStudent = student.name
//     }
// }
// console.log(nameofStudent + " has the highest marks: " + highestMarks);

// const students = [
//  { name: "Rahul", age: 20, marks: 85 },
//  { name: "Amit", age: 21, marks: 72 },
//  { name: "Priya", age: 19, marks: 91 },
//  { name: "Neha", age: 20, marks: 88 }
// ];

// let sum = 0;

// for(let student of students){
//     sum+= student.marks
// }
// // console.log(sum)
// let avg = sum / students.length
// console.log(avg)

// const students = [
//  { name: "Rahul", age: 20, marks: 85 },
//  { name: "Amit", age: 21, marks: 72 },
//  { name: "Priya", age: 19, marks: 91 },
//  { name: "Neha", age: 20, marks: 88 }
// ];

// for(let student of students){
//     if(student.marks > 80){
//         console.log(`${student.name} students is passed`)
//     }
// }

// const students = [
//  { name: "Rahul", dept: "CSE" },
//  { name: "Amit", dept: "ECE" },
//  { name: "Priya", dept: "CSE" },
//  { name: "Neha", dept: "IT" },
//  { name: "Ravi", dept: "ECE" }
// ];

// let department = {} ;

// for(let student of students){
//     if(student.dept in department){
//         department[student.dept].push(student.name)
//     }
//     else{
//         department[student.dept] = [student.name]
//     }
// }

// console.log(department)


// const products = [
//  { name: "Laptop", category: "Electronics", price: 60000 },
//  { name: "Mobile", category: "Electronics", price: 25000 },
//  { name: "Shirt", category: "Clothing", price: 1500 },
//  { name: "Jeans", category: "Clothing", price: 2000 },
//  { name: "Apple", category: "Grocery", price: 150 },
//  { name: "Milk", category: "Grocery", price: 60 }
// ];


// let categoryWiseProducts = {};

// for(let product of products){
//     if(product.category in categoryWiseProducts){
//         categoryWiseProducts[product.category].push(product.name)
//     }
//     else{
//         categoryWiseProducts[product.category] = [product.name]
//     }
// }
// console.log(categoryWiseProducts)

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let n = 5

// for(let row = 1 ; row <= n ; row++){
//     let str = ""
//     for(let col = 1 ; col <= row ; col++){
//         str+=col + " "
//     }
//     console.log(str)
// }

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// let n = 5

// for(let row = 1 ; row <= n ; row++){
//     let str = ""
//     for(let col = 1 ; col <= row ; col++){
//         str+=row + " "
//     }
//     console.log(str)
// }


//       * 
//      * * 
//     * * * 
//    * * * * 
//   * * * * * 
//  * * * * * * 
// * * * * * * * 
// let n = 7

// for(let row = 1 ; row <= n ; row++){
//     let str = ""

//     //space

// for(let space = 1 ; space <= n-row ; space++){
//     str+=" "
// }

// //column

// for(let col = 1 ; col <= row ; col++){
//     str+="* "
// }
// console.log(str)
// }


//       * 
//      * * 
//     * * * 
//    * * * * 
//   * * * * * 
//  * * * * * * 
// * * * * * * * 
// * * * * * * * 
//  * * * * * * 
//   * * * * * 
//    * * * * 
//     * * * 
//      * * 
//       * 
// let n = 7

// function pattern(n){
//     for(let row = 1 ; row <= n ; row++){
//     let str = ""

//     //space

// for(let space = 1 ; space <= row ; space++){
//     str+=" "
// }

// //column

// for(let col = 1 ; col <= (n-row+1) ; col++){
//     str+="* "
// }
// console.log(str)
// }
// }
// function pattern2(n){
//     for(let row = 1 ; row <= n ; row++){
//     let str = ""

//     //space

// for(let space = 1 ; space <= n-row ; space++){
//     str+=" "
// }

// //column

// for(let col = 1 ; col <= row ; col++){
//     str+="* "
// }
// console.log(str)
// }
// }


// pattern2(n)
// pattern(n)


// // 1
// // 0 1
// // 1 0 1
// // 0 1 0 1
// // 1 0 1 0 1

// let n = 5

// for(let row = 0 ; row <= n ; row++){
//     let str = ""

//     for(let col = 1 ; col <= row ; col++){
//         str+= (col % 2 === 1 ? 1 : 0) + " "
//     }
// console.log(str)
// }


// for(let n = 0 ; n <=10 ; n++){
//     if(n == 5){
//         continue;
//     }
    
// console.log(n)
// }
