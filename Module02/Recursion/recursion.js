//Recusrion

// function print1to10(n) {
// let sum = 0
// for(let i = 0 ; i<= n ; i++){
//     sum+=i
// }
//     return sum
// } 
// console.log(print1to10(5))


// function totalSum (n,sum){
//     if(n==0){
//         console.log(sum) //base 
//         return
//     }
//     sum+=n
//     totalSum(n-1,sum) // recursive methods
// }
// totalSum(5,0)

    
// function facatorial(i,fact){
//     if(i==1){
//         console.log(fact)
//         return
//     }
//     fact*=i
//     facatorial(i-1,fact)
// }
// facatorial(4,1)

// sum of digit 

// function sumOfDigit (n,sum){
//     if(n<=0){
//         console.log(sum)
//         return
//     }
    
//         let lastDigit = n % 10
//         n = Math.floor(n/10)
//         sum+=lastDigit

//         sumOfDigit(n,sum)
    
// }
// sumOfDigit(123,0)

// function sumOfDigit (n){
//     if(n==0){
//         return 0;
//     }

//     return n%10 +  sumOfDigit(Math.floor(n/10))
// }
// console.log(sumOfDigit(121))

//==============================================//

//call stackk

//time complexity -> O(log 10n)
//space complexit -> O(log 10n) ----> Factorial 

//find maximum itme of an array using recursion 

// let arr = [1,2,5]

// function findMax(arr,i,ans){
//     if(i==arr.length){
//         console.log(ans)
//         return
//     }
//     if(arr[i]>ans){
//         ans = arr[i]
//     }
//     findMax(arr,i+1,ans)
// }
// findMax(arr,0,-Infinity)

//approach 2

// let arr = [1,1,3,5]

// function findMax(arr,i,ans){
//     if(i == arr.length){
//         return ans
//     }
//     if(arr[i] > ans){
//         ans=arr[i]
//     }
//     return findMax(arr,i+1,ans)
// }
// console.log(findMax(arr,0,-Infinity))

// let arr = [1,4,5,2,5]

// function isSortedArray(a,b){
// for(let i = 0 ; i < arr.length-1 ; i++){
//         let a = arr[0]
//         let b = arr[i+1]
// if(a>b){
//     return true
// }

// }
// return false
// }

// let arr = [1,5,2,3]

// function isSortedArray(arr,i){
//     if(i == arr.length){
//         return true
//     }
//     if(arr[i]<arr[i-1]){
//         return false
//     }
//     return isSortedArray(arr,i+1)
// }
// console.log(isSortedArray(arr,1))


//Palindrom or not 

// let str = "rar"

// function isPalindrome (left,right,str){

//     if(right < left){
//         return true
//     }
//     if(str[left] != str[right]){
//         return false
//     }

//     return isPalindrome(str,left+1,right-1)


// }
// console.log(isPalindrome(str,0,str.length-1))

// let str = "rar";

// function isPalindrome(str, left, right) {

//     if (right < left) {
//         return true;
//     }

//     if (str[left] != str[right]) {
//         return false;
//     }

//     return isPalindrome(str, left + 1, right - 1);
// }

// console.log(isPalindrome(str, 0, str.length - 1));



// return true when no is prime otherwise false
// let n = 5
// function isPrime(i,num){
//     if(i==num){
//         return true
//     }   
//     if(num%i==0){
//         return false
//     } 
//    return  isPrime(i+1,num)
// }

// function print(){
//     let n = 10
//     for(let num =2;num<=n;num++){
//         if(isPrime(2,num)){
//             console.log(num)
//         }
//     }
// }
// print();


//array revese using the recursion 

// let arr = [1,2,3,4,5]
// function reverseArray (arr,left,right){
//     if(left >= right)
//         return
    
//     let temp = arr[left]
//     arr[left]= arr[right]
//     arr[right]= temp
//    return  reverseArray(arr,left+1,right-1)
// }
// reverseArray(arr,0,arr.length-1)
// console.log(arr)

// Tree recusrion 

// function fibo(n){
//     if(n==1 || n==2){
//         return 1
//     }

//     return fibo(n-1)+fibo(n-2)
// }
// console.log(fibo(5))

