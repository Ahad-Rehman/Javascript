//following is a truthy value
let name = "ahad"

if(name){
    console.log("ok");
}else{
    console.log("wrong");
    
}

//folowing are falsy number other than that are truth values
// "", NAN, undefined, null, 0, -0, bigint 0n, false

// check for array if empty or not

let arr = []
if(arr.length === 0){
    console.log("empty array");
    
}

//to check that we dont get null value
//we use ?? this operator
let val23 = undefined ?? null ?? 453
console.log(val23);

//ternary operator

let val32432 = 423
val32432>=34 ? console.log("Price is more than 3") : console.log("Price is more than 3");


