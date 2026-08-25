// console.log(0 || "" || null || undefined || "hello" || 42) //"Hello"



// console.log("foo" && 10 && [] && 0 && "bar") //the answer is 0

// console.log(!!"false") 

// let a = 0 ,b = 1, c=2;

// console.log( a || b && c) //2


// Question 6


// if(temp > 30){
//     console.log("hot")
// }else if(temp >=20){
//     console.log("warm")
// }
// else{
//     console.log("cold")
// }

// temp > 30 ? console.log("hot") : temp >=20 ? console.log("warm") : console.log("cold")

// temp > 30 ? console.log("Hot") : temp >=20 ? console.log("warm") : console.log("cold");

// const students = [
//     { name: "Amit", math: 78, science: 82, english: 90 },
//     { name: "Sneha", math: 88, science: 75, english: 86 },
//     { name: "Ravi", math: 92, science: 90, english: 85 }
// ];
// let count = 0
// for (let student of students) {

//     count++
//     let totalSubject = student.english + student.math + student.science

//     let avg = totalSubject/3

//     console.log(` ${student.name} -> Total ${totalSubject} and Avg is ${avg.toFixed(2)},`)

// }
// console.log(count) 

// let arr = [5,5,8,9,8,,6,2]
// let largest = arr[0]
// let smallest = arr[0]
// for(let i = 1 ; i < arr.length ; i++){
//     if(arr[i]>largest){
//         largest = arr[i]
//     }
//     if(arr[i]<smallest){
//         smallest=arr[i]
//     }
// }


// console.log(`largest is ${largest} and smallest is ${smallest}`)

// const peoples = [
//     { name: "Meena", age: 25 },
//     { name: "Rahul", age: 19 },
//     { name: "Simran", age: 30 },
//     { name: "Arjun", age: 22 }
// ];

// let largest = peoples[0].age
// let smallest  = peoples[0].age
// let largestName = peoples[0].name;
// let smallestName = peoples[0].name;

// for(let people of peoples){

//     if(people.age > largest){
//         largest = people.age
//         largestName = people.name
//     }
//     if( people.age < smallest){
//         smallest = people.age
//         smallestName = people.name
//     }
// }
// console.log(`Youngest is ${smallestName} (${smallest})`);
// console.log(`Oldest is ${largestName} (${largest})`);

// let str = "how are you"

// console.log(str.split(" ").reverse().join(" ").slice(1).toUpperCase())

// Questions sum of number 


// let n = 123

// let sum = 0

// while ( n > 0){
//     let lastDigit = n % 10
//     n = Math.floor(n/10)
//     sum+=lastDigit
// }
// console.log(sum)

//Question count a number
// let n = 123458

// let count = 0;

// while(n>0){
//     let lastDigit = n % 10
//     n = Math.floor(n/10)
//     count++
// }
// console.log(count)

//Question reverse a number

// let n = 123458

// let rev = 0;

// while(n>0){
//     let lastDigit = n %10
//     rev = rev * 10 + lastDigit
//     n = Math.floor(n/10)
// }
// console.log(rev)

//Question  Rev a string 

// let str = "hell"
// let rev = ""
// for(let i = str.length-1 ; i >= 0 ; i-- ){
//     rev+=str[i]
// }
// console.log(rev)

//Revese a array

// let str = [1,2,3]
// let rev = []
// for(let i = str.length-1 ; i >= 0 ; i-- ){
//     rev+=str[i]
// }
// console.log(rev)

// let arr = [1,2,1,4,5,6,1,2]

// let frequency = {}

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] in frequency){
//         frequency[arr[i]] = frequency[arr[i]] + 1
//     }else{
//     frequency[arr[i]] = 1
//     }
// }
// console.log(frequency)

// arr = [12,1,2,3]
// console.log(Array.isArray(arr))

//palindrome

// let str = 578

// let rev = 0

// while (str > 0) {
//     let lastDigit = str % 10
//     rev = rev * 10 + lastDigit
//     str =  Math.floor(str / 10)

// }
// console.log(rev)

// let arr = [1,2,3,1]
// console.log(arr.indexOf(1))
// console.log(arr.lastIndexOf(1))