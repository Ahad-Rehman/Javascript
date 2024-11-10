//previously we have studied about no object literals
//in this we will learn about singlton object
// const obj = new Object()  

// now we will be seeing non singltton object 
const obj = {}
obj.name = "ahad"
obj.email = "ahad@gmail.com"

// console.log(obj)

const obj1 = {
    username: {
        name: {
            firstname: "Ahad",
            lastname: "khan"
        },
    }
}
console.log(obj1.username.name.firstname);
//so if we want to add all objects element into single object then we will use
//assign operator like in array we have used concat
const object1 = {
    1: "a",
    2: "b"
}
const object2 = {
    3: "c",
    4: "d"
}
console.log(Object.assign(object2, object1));
//on object we can also use spread operator like in arrays
const object3 = { ...object1, ...object2 }
console.log(object3);

//how we can access objects in array
const arr = [
    {
        n: "ahad"
    },
    {
        n: "ahad"
    },

    {
        n: "ahad"
    }
]
console.log(arr[1].n);
// from object to array 
console.log(Object.keys(obj1.username.name));
console.log(Object.values(obj1.username.name));
console.log(Object.entries(obj1.username.name));

//check if the entity is available in the object
console.log(obj1.hasOwnProperty('username'));

// =================================destructuring================================
// suppose we have an object 
const product = {
    productId:12,
    productName:"Shoe",
    productSize:9
}
//we can access object also by this method 
const {productId} =product
console.log(productId);
// also we can access the Elementgiving it a short name or elses 
const {productId : as} =product
console.log(as) 