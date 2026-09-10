//====================== Creating Map =======================//

// let mp = new Map()

// mp.set("sanu",30);
// mp.set("ranu",40);

//Get 

// for to fetch the value we use the get 
// mp.get(key)

// console.log(mp.get("sanu"))

//Has -> this returns true and flase if the value is exist or not

// console.log(mp.has("prem")) //flase

//delete

// console.log(mp.delete("sanu"))

// console.log(mp)  -> it delete the props of the key sanu

//Remove ->


//Size it returns the size of the map  ||  the number of elements in the Map.
// console.log(mp.size) //2

//Clear
// Removes all elements from the Map.
// mp.clear()

// console.log(mp)

// let students = new Map();

// students.set("Rahul", 85);
// students.set("Amit", 90);
// students.set("Sandeep", 78);
// students.set("Priya", 95);

// console.log(students.get("Amit"),students.get("Sandeep"))

// let students = new Map();

// students.set("Rahul", 85);
// students.set("Amit", 90);
// students.set("Sandeep", 78);
// students.set("Priya", 95);

// for(let props of students){
// //console.log(props)// it converts all the elemnt into the array 
// // // [ 'Rahul', 85 ]
// // // [ 'Amit', 90 ]
// // // [ 'Sandeep', 78 ]
// // // [ 'Priya', 95 ]

// //so for to fetch the key and value we will separet like key as props[0] and value is[1]

// // console.log(props[0],props[1])// output given below
// // Rahul 85
// // Amit 90
// // Sandeep 78
// // Priya 95

// }

// let arr= [1,1,2,2,4,1,5,4,]

// let mp = new Map();

// for(let freq of arr){
//     if(mp.has(freq)){
//         mp.set(freq,1);
//     }
//     else{
//         let prevFreq = mp.get(freq)
//         mp.set(freq,prevFreq+1)
//     }
    
// }

// for(let [key,value] of mp){
//     console.log(`${key} -> ${value}`)
// }


//converting array into set 

// let st = new Set([1,2,3,4])
// console.log(st)

//print the unique itme 

// let arr = [8,8,2,3,4,5,5,5];

// let st = new Set(arr)

// console.log(st)

// for(let unique of arr){
//     if(st.has(unique) == false){
//         st.set(unique,true);
//     }
// }
// console.log(st)


// HW check if dupliate exist or not 

// group by city

// let arr = [
//     {
//         name : "sandeep",
//         city:"Pune"
//     },
//     {
//         name : "pradeep",
//         city:"Pune"
//     },
//     {
//         name : "ankit",
//         city:"lucknow"
//     },
//     {
//         name : "dhiraj",
//         city:"Garib"
//     },
// ]

// let st = new Map()

// for(let elem of arr){
//     if(st.has(elem.city) == false){
//         st.set(elem.city,[elem.name])
//     }
//     else{
//       let name = st.get(elem.city)
//       name.push(elem.name)
//       st.set(elem.city,name)
      
//     }
// }
// console.log(st)

