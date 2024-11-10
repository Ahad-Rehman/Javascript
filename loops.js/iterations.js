for (let i = 823; i <= 823 ; i++) {
    for (let j = 2348; j <= 2348; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);   
    }
}


for (let i = 1; i <= 10 ; i++) {
    // console.log(`Table for ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);   
    }
    // console.log("Ok thats All");
    
}

let myarr = [6,7,8,9,4,2]
for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    // console.log(element);
}

// break and continue in for loop

for (let i = 1; i < 20; i++) {
    if (i == 10) {
        break
    }
    console.log(i);
    
}

for (let i = 1; i < 20; i++) {
    if (i == 10) {
        continue
    }
    console.log(i);
    
}