//function declaration
function myName(){
    // console.log("ahad is");
}
// myName()

//now writing a afunction to add two numbers
function addNumbers (num1,num2){
    let res = num1 + num2
    // 1
    // console.log(res);
    //we also can return value
    //2
    return res
}
// important note
// we have to stored the return value in any variable after that we
// can print the returned value
// or  either we can store the function in the console and print
//  the result both ways we have
//1
// let rese = addNumbers(2,3)
//2 
//console.log(addNumbers(2,3));
// console.log(res);

function login(user){
    if(user === undefined){
        console.log("Write the correct username");
        return 
    }
    else if(user === "ahad"){
        let loggedIn = `${user} just loggedin`
        return loggedIn
    }
}
// console.log(login("ahad"));

//rest operator in js
// suppose we have many values we have no idea that how many parameter we should take
// their spread operator helps 

function items(...toys){
    return toys
}

// console.log(items("doll","car"));

//following we are passing object to a function
const user = {
    name: "ahad",
    id:342
}
function getuser(getUserName){
    // console.log(`${getUserName.name} is my name`);   
}
getuser(user)
// we can also pass object by the following method 
getuser({
    name:"ahaerfd",
    id:342234
}
) 
//following we are passing array to a function
const arr =[23,6,3,7,2,54]
function returnArr(val){
    return val[3]
}
// console.log(returnArr(arr));
// we can also pass it by the following method 
// console.log(returnArr([234,426,2523,6235,62]));
const num1 = 454234
const num2 = 462423546
const op = '*'
function calc(input,n1,n2) {
    if (input === '+') {
        return n1+n2
    }
    else if(input=== '*'){
        return n1*n2
    }
}
console.log(calc(op,num1,num2));
