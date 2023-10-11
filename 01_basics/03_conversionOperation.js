let score = "40"

let valueInNumber = number(score) // to convert any string to number

let num = 10;
let str = String(num); // str will be the string "10"

let str1 = "20";
let num1 = Number(str1); // num will be the number 20


let num2 = 10;
let bool = Boolean(num2); // bool will be true

let str2 = "";
let bool2 = Boolean(str2); // bool2 will be false

let num3 = 10;
let str3= String(num3); // str will be the string "10"

let now = new Date();
let str4 = now.toString(); // str will be the date as a string

let arr = [1, 2, 3];
let str5 = arr.toString(); // str will be "1,2,3"


console.log("1"+2); //12

console.log(1+"2"); //12

console.log("1"+2+2); //122

console.log(1+2+"2"); //32





/* PREFIX - POSTFIX */

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


