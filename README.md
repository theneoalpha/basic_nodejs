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