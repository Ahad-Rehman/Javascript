// for objects we use for-in loop
const obj = {
    "A": "Ahad",
    "K": "Khan",
    "D": "Don",
}

for (const [key] in obj) {
    console.log(key+" for "+obj[key]);
    
}