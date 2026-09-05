
// for of loop 
// let arr = [1,2,3,4]

// for(let elemnt in arr){
//     console.log(elemnt)
// }


// const student = {
//     name:"sandeep"
// }

// for(let ele in student){
//     console.log(ele)
// }

// let arr = [1,2,3,4,5,6]

// const myNums = arr.filter( (nums) => nums > 4  )

// console.log(myNums)



// the following is the database of the book and we can see that it is nothing but array of object
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// for(let bk of books){
//     if(bk.genre === "History"){
//         console.log(bk.title)
//     }
// }

//   const userBook = books.filter( (bk) => bk.genre === "History" )// bk == books in the array object

// const userBook = books.filter( (bk) => {
//     return (bk.genre === "History" || 
//     bk.genre === "Science") && bk.publish > 2000
// }  )
//   console.log(userBook)

//==================map====================//

// let arr = [1,2,3,4,5]

// let newArr = arr.map( (nums) => nums * 10 )

// console.log(newArr)

//=======================================//

//Map chaining//

// let arr = [1,2,3,4,5]

// let newArr = arr
//         .map( (nums) => nums * 10 )
//         .map( (nums) => nums + 1 )

// console.log(newArr) //11,21,31,41,51

// now one question first * the nums with 10 then add 1 then filter the odd number from the newArr

//expected outoutput 31,41,51

// let arr = [1,2,3,4,5]

// let newArr = arr
//         .map( (nums) => nums * 10 )
//         .map( (nums) => nums + 1 )
//         .filter( (nums) => nums % 2 == 1 )

// console.log(newArr)

// let arr = [1,2,3,4,5]

// let newArr = arr.reduce( (acc,currValue) => 
// acc+currValue ,0)

// //0 is the initial value of the accumulator


// console.log(newArr)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// let sum = 0 

// for(let sumOfCart of shoppingCart){
//     sum+=sumOfCart.price
// }
// console.log(sum)

let sumOfCart = shoppingCart.reduce( (acc,currvalue) => acc+ currvalue.price ,0 )
 console.log(sumOfCart)