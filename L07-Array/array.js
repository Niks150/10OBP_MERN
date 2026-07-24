// let Arr = [1,2,3,4];
// console.log(Arr[2]);

const { useActionState } = require("react")

// let student = [1,2,3,4];
// let sum = 0;
// for(let i = 0;i<student.length;i++){

//      sum += student[i];

// }
// console.log(sum);

// Hw:- print the array into reverse

// const arr = [1,2,3,4]

// arr.reverse();

// console.log(arr);

// const arr = [1,2,3,4]
// let i = arr.length-1;
// while(i>=0){

//     console.log(arr[i]);
//      i--;
// }

// print index of all the irems of the array

//  const arr = [1,2,3,4]
// let i = 0;
// while(i<arr.length){

//     console.log(i);
//      i++;
// }

//approach 2
// const arr = [1,2,3,4]
// for(let index in arr){          //for in loop
//     console.log(arr[index]);
// }

//Approach 3
// const arr = [1,2,3,4]
// for(let elem of arr){          //for of loop
//     console.log(elem)
// }


// let arr = [1, 2, 3, 4]

// console.log(arr.push())

//arr.pop() -> Removes the last element from an array and returns it.If the array is empty, undefined is returned and the array is not modified.
//arr.reverse() -> Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
//arr.unshift() -> Inserts new elements at the start of an array, and returns the new length of the array.
//arr.shift() -> Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// let arr = [4,5,2,1];
// let k =11
// for ( i= 0 ;i < k ; i++){
//     let last = arr.pop()

// arr.unshift(last)
// }
// console.log(arr)   


//slice(it takes two parameter start and end )

//it returns tje part of the array from the start index to end index where the end index is excluded

// let arr = [1,2,3,4]
// // console.log(arr.slice(0,3))  // 1,2,3 the last index is excluded 
 // if the end is not given then the slice method take arr.lenght as the end



 //arr.splice() //The zero-based location in the array from which to start removing elements.
 //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

 // delete two itme from the start 

//  let arr = [1,2,3,4,5]
// arr.splice(0,2)
//  console.log(arr)

// delete 3 from the array amd insert 10 on the place of 3

// let arr = [9,7,3,4,2];

// arr.splice(2,1,10)

// console.log(arr)

//insert two items 3 and 4 after 9

// let arr = [9,7,3,4,2]
// arr.splice(1,0,4,3)
// console.log(arr)