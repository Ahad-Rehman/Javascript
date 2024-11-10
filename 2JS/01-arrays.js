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
// console.log(a1);

const a2 = arr.splice(0,4)
// console.log(a2,`${arr}`);
// =======================================array=====================

// if we push the second array then the array will be shown 
//like a single element in the first array  

const arrr1 = ['asad','adasd']
const arrr2 = ['adh','ada', 'adad']
// arrr1.push(arrr2)
// console.log(arrr1)

// to concat we have declare another array variable where the array will be stored 
//storing all the elements of second array in the first array

const cont = arrr1.concat(arrr2)
console.log(cont)
console.log(cont[4]);
// ======================spread operator=====================

//mostly we will use spread operator
const all_arr = [...arrr1, ...arrr2]
console.log(all_arr);

//flat operator 

const array1 = [12,4,[32,42,14,[3,8,4,9,2],42,2,5,],234,7,3,2,]
console.log(array1.flat(Infinity));

//convert a string to array
console.log(Array.from("ahadkhan"))

// of operator make an arrray from variable 
let var1=3243 
let var2=6742
console.log(Array.of(var1,var2))

