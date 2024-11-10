let myarr = [3,7,9,1,5]
for (const i of myarr) {
    // console.log(i);
}

// for of loop on strings 

let name = "Ahad-Ur-Rehman"
for (const element of name) {
    if (element== "-" || element=="A" || element=="a") {
        continue
    }    
    // console.log(element);
}

//for of loop on map

const maap = new Map()
maap.set("A","Ahad")
maap.set("K","Khan")
maap.set("D","Don")

console.log(maap);


for (const [key,value] of maap) {
    console.log(maap);
    console.log(`${key} for ${value}`);
    
}