//frequency

// let arr = [1,2,1,2,1,3,3]

// let result = {}

// for(let element of arr){
//     if(element in result){
//         result[element] = result[element] + 1
//     }
//     else{
//         result[element] = 1
//     }
// }
// console.log(result)

// let str = "the cat sat on the mat because the cat was tire"

// let words = str.split(" ")

// let freq = {}

// for(let word of words){
//     if(word in freq){
//         freq[word] = freq[word]+1
//     }
//     else{
//         freq[word] = 1
//     }
// }
// console.log(freq)

// let arr = [1,2,3,8,9,10]  //prime number how to find the number is prime or not 

// function isPrime(num){
//     if(num < 2){
//         return false
//     }
//     for(let i = 2 ; i < num ; i++){
//         if(num % i == 0){
//             return false
//         }
//     }
//     return true
// }

// for(let i = 0 ; i < arr.length ; i++){
// if(isPrime(arr[i])){
//         console.log(arr[i])
//     }
// }

// let number = 12357

// let count = 0

// while(number > 0){
//     let lastDigit = number % 10;
//     number = Math.floor(number/10)
//     if(lastDigit % 2== 1){
//         count++
//     }
// }
// console.log(count)