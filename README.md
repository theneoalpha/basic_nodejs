Node Js

- Developer Embedded chrome v8 engine in C++ , except DOM/window related things 


Day 1 : Basics Of Node

    Step 1 : Simple Printing the message in console

    Step 2 : npm initalise using "npm init"

    Step 3 : Adding "Start" script in package.json file


    Step 4 : We always follow modular programming (split our code in multiple files) and to import the files we follow
                "const math = require("./math); "

                step 4.1 : Lets create a file named as math.js

                Step 4.2 : lets define a function of adding two number

                Step 4.3 : to use the function we have to export it 

                Step 4.4 : Lets import it in index.js

                Step 4.5 : now lets use the math function

                3 different way to export/import and use the functions
                     

                        1.only single function

                        export :  module.exports = add;
                        import : const math = require("./math);
                        use :  console.log(add(4,5));
        

                        2.multiple functions export

                        export :  module.exports = {add, substract, multiply, divide}
                        import : const math = require("./math);
                        use : console.log(math.add(4,5));

                        3.Multiple function export as well as import

                        export : module.exports = {add, substract, multiply, divide}
                        import : const {add, substract, multiply, divide} = require("./math")
                        use : console.log(add(4,5));



Day 2 : File System of nodejs "fs" module :  to read, write in a file

    Step 5.1 : lets create "file.js" file to perform all file system tasks
    Step 5.2 : import buit in fs module of node 
                const fs = require("fs"); 

    Step 5.3 : Simple write a text in a file    

                There is two way to write, read and all 

                    - Blocking request : Synchronus

                        Step 5.3.1 : Synchronus request

                    - Non-Blocking request : Asynchronus   

                        Step 5.3.2 : Asynchronus request : isme callback bhi define karte hai jo error and result carry karta hai 


    Step 5.4 Simple Read a file using fs module

                    - Blocking request : Synchronus request

                        Step 5.4.1 :  generally hame file name and encoding type define karna padhta hai 

                            const result = fs.readFileSync("file name", "encoding type");

                    - Non-Blocking request : Asynchronus request - ye callback bhi expect karta hai

                        Step 5.4.2 : isme hame callback function bhi dena padega

                            const result = fs.readFile("file name", "encoding type", (err, result)=>{
                                if(err){
                                    console.log("Error", err);
                                }
                                else {
                                    console.log("Result", result);
                                }
                            })
    Step 5.5 Simple append(create) file using fs module

                    - Blocking request : synchronus request

                        Step 5.5.1 : isme bhi normal file name and text denge jo append karna hai

                            fs.file




