// objects literals
const obj = {
    name: "Ahad",
    "Full Name": "Ahad Ur Rehman",
    age: 20,
    email: "ahadr459234@gmail.com",
    isLoggin: true,
}
// we can access object by two methods one using with dot other with square braces
// and writing it as a string in a bracket 
// 1
// console.log(obj.name);
//both works fine but if the value before semicolon is in 
//string we can not access it through dot method
// 2
// console.log(obj["isLoggin"]);

// ===========================symbols in object=================
//first out of the object we have to declare Symbol 
const Symb = Symbol()
//the syntax of Symbol in the object is following 
const obj1 = {
    name: "Ahad",
    "Full Name": "Ahad Ur Rehman",
    [Symb]:"symb1",
    age: 20,
    email: "ahadr459234@gmail.com",
    isLoggin: true,
}
//it is accessed with the following method
// console.log(obj1[Symb]);
// we can change data in object by following method
obj1.name = "Khan"
// console.log(obj1.name)

//we can not change data in object by following method
// Object.freeze(obj1)

obj1.greeting = function(){
    console.log(`Hello, ${this.name}`);
}
obj1.greetingTwo = function(){
    console.log(`Hello, ${this.name}`);
}

console.log(obj1.greeting())

console.log(obj1.greetingTwo())