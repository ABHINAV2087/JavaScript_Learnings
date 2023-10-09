const DOB = 6012003;

let name = "abhinav";

var c = "bhopal"

// DOB = 05020004 // NOT ALLOWED BECOZ WE DECLARED IT AS A CONST 

name = "abhinav tirole"

c = "banglore"

console.table([DOB, name, c])

/*
   1. var

        // Function Scoped
   
           function example() {
               var x = 10;
               if (true) {
               var x = 20; // This will overwrite the outer 'x'
                   console.log(x); // 20
               }
           console.log(x); // 20
   }


   2. let

        // Block Scoped:
   
           function example() {
                let x = 10;
                if (true) {
                        let x = 20; // This is a different 'x' than the outer one
                        console.log(x); // 20
                    }
                    console.log(x); // 10
            }
   2. let

        // Block Scoped:
   
           function example() {
                let x = 10;
                if (true) {
                        let x = 20; // This is a different 'x' than the outer one
                        console.log(x); // 20
                    }
                    console.log(x); // 10
            }
   3. const

        // Block Scoped:
   
           function example() {
                const x = 10;
                if (true) {
                    const x = 20; // This is a different 'x' than the outer one
                    console.log(x); // 20
                }
               console.log(x); // 10
            }

        // Cannot be Reassigned: 
        // Must be Initialized:


*/

