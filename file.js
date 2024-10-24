// Step : 5.2
const fs = require("fs"); 

// Step 5.3 : Simple write a text in a file



// Step 5.3.1 : Synchronus request

fs.writeFileSync("./test.txt","Hello I am from File System");


// Step 5.3.2 : Asynchronus request

fs.writeFile("./test2.txt", "I am from Asynchronus", (error)=>{ });


// Step 5.4 Simple Read a file using fs module

    // Step 5.4.1 : Synchronus request
                                    // (file name , incoding type) : for normal text we use utf-8 to read(incode)
        const result = fs.readFileSync("./read.txt", "utf-8");
        console.log(result);


    // Step 5.4.2 : Asynchronus request
    
        const result2 = fs.readFile("read.txt", "utf-8", (err, result2)=>{
            if(err){
                console.log("Error : ", err);
            }
            else {
                console.log("Result :", result2);
            }
        })




    // Step 5.5.1 : Synchronus file append

    const resultAppend = fs.appendFileSync("append.txt", "Hello I am from append file");

    console.log(resultAppend);

