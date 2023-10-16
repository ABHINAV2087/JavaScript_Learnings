//Truthy vs falsy 

//falsy  values

// 0 ,-0 ,BigInt 0n, "", NaN, undefined, null ,false, - false  

//truthy values

// "0", 'false', " ", [], {}, function(){}
// Else every thing will be converted to true 



// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}




// ---------------------------------- NULLISH COALESCING OPERATOR( ?? ):NULL UNDEFINED -----------------------------------------------

let val1;

val1 = 5 ?? 10

console.log(val1)

const result = someValue ?? defaultValue;
