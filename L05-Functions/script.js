// create a function to print your name

// function  Name(){
//     console.log("Hello my name is sandeep ");
// }
// Name();

//Multiple Parameters

// function Details(username, age){
//     console.log(`Hello my name is ${username} and my age is ${age}`)
// }
// Details("sandeep",20)

// function signIn(Age){

//      if(Age>18){
//             return true;
//         }
//         else{
//             return false;;
//         }

// }
// console.log(signIn(5))

// function fact(num){
//     let factorial = 1;
//     for (let i = 1; i <= num; i++) {
//         factorial*=i
//     }
//     return factorial;
// }
// console.log(fact(5))/

//create a function primeSum and that should sum of the prime number in between 1 to n
function primeSum(n) {
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += i;
    }
  }

  return sum;
}

console.log(primeSum(15));

