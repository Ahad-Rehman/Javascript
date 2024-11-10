// we can immediatly invoke any function by following method 

(function ahad(){
    console.log("ahad");
    
})(); //use semi must

(function ahad(yes){
    console.log(`ahad is my ${yes}`);
    
})('name');