//Primitve datatype
//there are total 7 primitive datatype
/*Number
Boolean 
Strings
Null
Undefined
Symbols
let num = Symbol(32)
BigInt*/

//Refernce Datatype
//there are 3 dataypes
/*Arrays
let arr = ["ahad" , "khan" , "18"]
Objects
let obj1 = {
    name:"ahad",
    age:18,
study:{
    matric:"ss9",
fsc:"maragalla"
}
}
console.log(obj1)

functions
let myFunction = function(){
    console.log("Hello World")
}
myFunction()
*/ 

//Stacks (Primitive)
let a = 34
let b = a
b = 45
console.log(a)
console.log(b)
//heap (Reference)
let obj1 = {
    name:"ahad",
    age:18,
}
let obj2 = obj1
obj2.name = "khan"
console.log(obj1)