const obj = {
    name:"Ahad",
    getId : function(){
        console.log(`${this.name} , welcome to our yt channel`);
    }
}
obj.getId();
obj.name = "khan"
obj.getId()
// important note we use this in objects only in functions it executes undefined
function one(){
    let username = "ahad"
    console.log(username);
    
}
one()

//==========================arrow functions====================================
//()=>{}
const addTwo = ()=>{

}

// also we can use it like this
//we will not use curly brace because then we have to use return
const addthree = (n1,n2,n3)=> (n1 + n2 +n3)
console.log(addthree(324,84,54));
