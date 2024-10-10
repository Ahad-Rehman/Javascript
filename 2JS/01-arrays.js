// there are two method of array declaration
let arr1 = [2,4,6,4,2,6]
let arr2 = new Array(3,5,2,3,4,6,8,6)

// methods used in array 

let arr = [23,56,2,4,6,86,5,6,3,2,67,332,]
// add value at end remove value from end 
arr.push(234)
arr.pop()
// add value in first remove value from front 
arr.shift(32)
arr.unshift()
// console.log(arr)

//check if the value is present or not give answer in true or false 
arr.includes(9)

//check the index of element in the array
arr.indexOf(23)

// join function make the array to string
// console.log(typeof arr.join());
 
// slice and splice  
//slice always print last number in range but not first number in range
const a1 = arr.slice(0,4)
console.log(a1);

const a2 = arr.splice(0,4)
console.log(a2,`${arr}`);


let arrr1 = [1,4,2,6,8,5]
let arrr2 = ["adh","ada", "adad"]