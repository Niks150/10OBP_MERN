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

/*========================= Done ==================*/

