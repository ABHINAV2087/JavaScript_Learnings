 /*

 `` => template literals

 */



 const name = "abhinav";

 let age = 20;

 console.log(`hello my name is ${name.toUpperCase()} and my age in ${age}`);

 // this is called string interpolation


 const Name = new String('tirole-abhinav')
 console.log(Name);

console.log(Name[0]);
console.log(Name.__proto__);// try this in console to get all the functions related to strings

console.log(Name.length);
console.log(Name.charAt(2));
console.log(Name.indexOf('t'));


const newString = Name.substring(0,6)
console.log(newString);


const anotherString = Name.slice(-9,4) //we can give negative values to start from last 
console.log(anotherString);

const anotherString2 = "  hello hello hello     " //we can give negative values to start from last 
console.log(anotherString2);
console.log(anotherString2.trim()); // used to remove extra spaces from string




const url = "https://abhinav.com/abc%20tirole"

console.log(url.replace('%20','-')) //        replace('ky replace krna hai','kisse replce krna hai')


console.log(Name.split('-'))