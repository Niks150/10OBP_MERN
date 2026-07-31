// let Arr = [1,2,3,4];
// console.log(Arr[2]);



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

// let arr = [1,2,3,4,5]
// // console.log(arr.reverse());
// let n = arr.length;
// for(let i = 0 ; i < arr.length/2; i++){
//     let temp = arr[i]
//     arr[i] = arr[n-i-1]
//     arr[n-i-1] = temp
// }
// console.log(arr)



// const arr = [1,2,3,4,5]

// console.log(arr.indexOf(2))

// const arr = [1,2,3,4,5]

// given an array and two number find the number of item between given two values in the array 

// const arr = [1,3,4,6,9,10]

// let a = 3 
// let b = 10;
// console.log(arr.indexOf(b)-arr.indexOf(a)-1);

// const arr = [1,1,2,1,2]

// console.log(arr.lastIndexOf(3)) //The value to locate in the array.// Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

// const arr = [1,2,3,4]

// console.log(arr.includes(4))

//reverse 

// const arr = [1,2,3]
// arr.reverse()
// console.log(arr)


//  let arr = [1,2,1]

// let newArr = [];

// for(let i = arr.length-1;i>=0 ; i++){
//     newArr.push(arr[i])
// }

// let isPalindrom = true;

// for(let i = 0 ; i< arr.length ; i++){
//     if(arr[i]!=newArr[i]){
//         isPalindrom = flase
//     }
// }
// console.log(isPalindrom)

//Shallow copy

// let arr = [1,2,3,[4,5]]

// let newArr = arr.slice()

// newArr[3].push(5); 
// console.log(arr) //[ 1, 2, 3, [ 4, 5, 5 ] ]
// console.log(newArr) //[ 1, 2, 3, [ 4, 5, 5 ] ]

// let arr = [1,2,[5,8,6]];

// let newArr = arr.slice(1);

// newArr.push(6);
// arr[2].push(9);


// console.log(arr);
// console.log(newArr);

//start 

// let arr = [1,2,3]

// let arr2 = [8,...arr]

// console.log(arr2)

//array destructuring 

// let arr = [1,2,3];
 
// let [a,b,c] = arr

// console.log(a,b,c)

// let arr = [1,2,3]
// let [a,b,c,d] = arr;
// console.log(a,b,c,d) //1 2 3 undefined

//rest operator

