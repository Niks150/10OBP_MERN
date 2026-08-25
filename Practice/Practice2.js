// let students = [
//   {
//     name: "Brijesh",
//     age: 20,
//     address: {
//       city: "Pune"
//     }
//   },
//   {
//     name: "Akash",
//     age: 20,
//     address: {
//       city: "Delhi"
//     }
//   },
//   {
//     name: "Mahesh",
//     age: 30,
//     address: {
//       city: "Pune"
//     }
//   }
// ];

// let result = {}

// for(let student of students){
//     if(student.address.city in result){
//         result[student.address.city].push(student.name)
//     }
//     else{
//         result[student.address.city]=[student.name]
//     }
// }
// console.log(result)

// console.log(a)
// let a = 10; // Here a is the TDZ [coz we cannot acces the a before the initialization ]
// //error :- ReferenceError: Cannot access 'a' before initialization

// let arr = [5,8,9,9,5,8,4,5]

// let largest = -Infinity
// let second_largest = -Infinity

// for(let i = 0 ; i< arr.length ; i++){
//     if(arr[i]> largest){
//         largest = arr[i]
//     }
// }

// for(let j = 0 ; j< arr.length ; j++){
//     if(arr[j]> second_largest && arr[j]!= largest){
//             second_largest = arr[j]
//         }
// }
// console.log(`largest is ${largest} and seondlargest is ${second_largest}`)


// let arr = [1,2,5,4,5,4,2,1,1]

// let frequency = {}

// for(let i = 0 ; i< arr.length ; i ++){
//     if(arr[i] in frequency){
//         frequency[arr[i]]++
//     }
//     else{
//         frequency[arr[i]] = 1
//     }
// }
// console.log(frequency)

// let largestFrequency = 0
// let mostFrequentNumber =  0

// for(let freq in frequency){
//     if(frequency[freq] > largestFrequency)
//         {
//             largestFrequency = frequency[freq]
//             mostFrequentNumber = freq// here i print the key
//     }
// }
// console.log(largestFrequency)
// console.log(mostFrequentNumber)