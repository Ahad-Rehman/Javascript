//Simple arrow function 
func = ()=>{
//    console.log("Ahad");
}
func()

// For each loop

let arr = ["Ahad","khan","don","jon"]

arr.forEach((names)=>{
    // console.log("These are my name"+names);
    
})

//function to foreach loop

function name(val){
    // console.log(val);
}
arr.forEach(name)

//more feature of for each loop

arr.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

// taking value from object in arr

let arr1 = [
    {name:"Ahad",age:20},{name:"Shanoor",age:8},{name:"Abu",age:55}
]

arr1.forEach((item)=>{console.log(item.name);
})