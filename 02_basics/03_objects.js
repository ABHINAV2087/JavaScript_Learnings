// singleton

// jab constructor se object banate h to singleton ek object bnta hai mtlb ki apne trah ka ye ek hi object hai 

// object literals ==>  is a way to define and create objects using a concise and intuitive syntax. It allows you to declare an object and its properties and methods in a single statement.

//  Object.create //constructor method


const mySym = Symbol("key1")

const Jsuser = {
    name:"abhinav",
    [mySym]:"mkey1", // symbol ko use krne k liye square bracket hi use krna pdta hai 
    age:20,
    location:"bhopal",
    lastLoginDays: ["monday","tuesday"]
}

console.log(Jsuser.lastLoginDays[0]);
console.log(Jsuser.name);
console.log(Jsuser[mySym]);

console.log(Jsuser["name"]);

Jsuser.age = 20;//change krne k liye 

// Object.freeze(Jsuser) // change hone se rokne ke liye

Jsuser.greeting = function(){
    console.log("hello user !!");
}
Jsuser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
}// jab bhi same object ko reference krna hai tab hum this ka use kr skte hai 

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());