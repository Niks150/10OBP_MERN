/////////////Lest start practice Array//////

//Syntax

//const MyArray = []

// Keyword ArrayName = []

// How to Access Array Element 
// const arr = [1,2,3,4,5]
// console.log(arr[0])

// const arr = [1,2,3,4]
// arr.push(6)
// arr.pop()
// arr.unshift(5)
// arr.shift()
// console.log(arr.includes(8))
// console.log(arr.indexOf(3))

//  console.log(arr.slice(1,3))

// const arr = [1,2,3]
// const arr2 = [4,5,6]

// //arr.push(arr2) 
// let concate = arr.concat(arr2) //concate the two string arr and arr2
 
//  console.log(concate)

// const arr = [8 ,5 ,1 ,4 ,5 ,3 ,2]

// // console.log(arr.indexOf(2))

// console.log(arr.lastIndexOf(5,7))

// let arr = [1, 2, 1];

// let newArr = [...arr];

// newArr.reverse();

// let isPalindrome = true;
                                            //palindrom
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== newArr[i]) {
//         isPalindrome = false;
//         break;
//     }
// }

// console.log(isPalindrome);


// let arr = [1,2,3]
// let arr2 = [...arr]
// console.log(arr2)   // spread operator

// let arr = [1,2,3,[4,5],6,[7,8,[9,10]]]

// console.log(arr.flat(Infinity))  //falt 

//is array 

// console.log(Array.isArray("sandeep")) //false
// console.log(Array.isArray([1,2,3])) //true

// console.log(Array.from("Sandeep")) // ['S', 'a', 'n','d', 'e', 'e','p'] 

// const arr = 100;
// let arr1 = 200;
// let arr3 = 500;
// console.log(Array.of(arr,arr1,arr3));

// const arr = [1,2,3]

// console.log(Array.isArray(arr))

/* ================= some built in arry methods =========*/

// arr.length              // 3 (Number of elements)
// arr.push(4)             // Returns: 4 (new length), arr = [1, 2, 3, 4]
// arr.pop()               // Returns: 4, arr = [1, 2, 3]
// arr.shift()             // Returns: 1, arr = [2, 3]
// arr.unshift(0)          // Returns: 3 (new length), arr = [0, 2, 3]
// arr.includes(2)         // true
// arr.indexOf(2)          // 1
// arr.lastIndexOf(2)      // 1 (last occurrence of 2)
// arr.reverse()           // Returns: [3, 2, 0], arr = [3, 2, 0]
// arr.sort()              // Returns: [0, 2, 3], arr = [0, 2, 3]
// arr.slice(1, 3)         // Returns: [2, 3], arr remains unchanged
// arr.splice(1, 2)        // Returns: [2, 3], arr = [0]
// arr.concat([4, 5])      // Returns: [0, 4, 5], arr remains [0]
// arr.join("-")           // Returns: "0"
// arr.flat()              // Returns: [0] (flattens nested arrays)
// arr.fill(0)             // Returns: [0], arr = [0]
// arr.copyWithin(1, 3)    // Returns: [0] (no change because index 3 doesn't exist)

/*==============================================================================================*/

// Array.isArray([1, 2, 3]);      // true
// // Checks whether the value is an array.

// Array.from("Hello");
// // ['H', 'e', 'l', 'l', 'o']
// // Converts an iterable or array-like object into an array.

// Array.from(new Set([1, 2, 2, 3]));
// // [1, 2, 3]
// // Converts a Set into an array.

// Array.of(1, 2, 3);
// // [1, 2, 3]
// // Creates a new array from the given arguments.

// Array.of(5);
// // [5]
// // Creates an array with one element (unlike new Array(5)).

// Array(5);
// // [ <5 empty items> ]
// // Creates an empty array of length 5.

// Array.from({ length: 5 });
// // [undefined, undefined, undefined, undefined, undefined]
// // Creates an array from an array-like object.

// Array.from({ length: 5 }, (_, i) => i + 1);
// // [1, 2, 3, 4, 5]
// // Creates and fills an array using a mapping function.

/*========================= Done ==================*/

//Question 1  Sum of array

// const arr = [1, 2, 3 ,4 ,5]

// let sum = 0 ;

// for (let i = 0 ; i< arr.length; i++){
//     sum+=arr[i]
// }
// console.log(sum)

//Question 2 Largest and smallest element

// let arr = [5,7,6,8,5]

// let maxValue = 0

// for(let i = 1 ; i< arr.length ;i++){
//     if(arr[i]> maxValue){
//         maxValue = arr[i]
//     }
// }
// console.log(maxValue)


// Question 3 reverse an array
// const arr = [1,2,3,4]

// console.log(arr.reverse())

//Question 4 Count even and odd elements
// const arr = [1,2,3,4,8,10]
// let evenCount = 0;
// let oddCount = 0;

// for(let i = 0 ; i<arr.length;i++){
//     if (arr[i]%2==0){
//         evenCount ++;
//     }
//     else if (arr[i]%2==1){
//         oddCount ++;
//     }
//     else {
//         console.log("Invalid number ")
//     }
// }
// console.log(`Even count is ${evenCount} and odd count is ${oddCount}`)

// let arr = [8,7,56,4,8,5]

// let largest = 0;
// let secondLargest = 0;

// for(let i = 0 ; i< arr.length; i++){
//     if(arr[i]>largest){
//         secondLargest = largest;
//         largest = arr[i]
//     }
//     else if(arr[i]>largest){
//         largest = arr[i]
//     }
// }

// // }
// console.log(secondLargest);
// console.log(largest)


//Question
// let arr = [1,2,3]
// let sum = 0;
// let avg = 0;
// let maximu = 0;

// for(let i = 0 ; i< arr.length;i++){
//     sum += arr[i]
//     avg = sum/arr[i];
//     if(arr[i]>maximu){
//         maximu = arr[i]
//     }
// }
// console.log(avg,sum,maximu)


//Question 
// let arr = [1 ,2 ,3 ,-1]
// let mul = 1
// for(let i = 1 ; i< arr.length;i++){
//       mul *= arr[i]
// }
// console.log(mul)


//Question 
// let arr = ["santa" , "manta" , "ramuuu"]

// let longest = arr[0];//////////////Find the longest string in the array

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i].length > longest.length){
//         longest = arr[i]
//     }
// }

// console.log(longest)

let arr = [2,3,4,5,6]

for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[arr.length-1])
}