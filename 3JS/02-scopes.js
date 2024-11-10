function one(){
    const name = "ahad"

    function two() {
        const webName = "Progression"
        console.log(name);
    }
two()
// console.log(webName);

}
one()

//we can take variable from parent but cannot give data to parent
//same is the case with if else statment 
if (true) {
    const username = "Ahad"

    if (username === "Ahad") {
        const webname = "yt"
        console.log(username + webname);
    }
    // console.log(webname);
    
    
}
// console.log(username);

///===========================interest===================
function name(val){

}
// also functions can be declared like this further in next page we will 
//convert it arrow function
const name2 = function(val){

}