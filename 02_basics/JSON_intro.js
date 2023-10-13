// object de structuring



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "abhinav"
}

// course.courseInstructor // jab hume same cheez baar baar print krwani hogi to ye use nhi hoga 

const {courseInstructor: instructor } = course // tab hum ye use krenge  .......... instructor sirf isilie use kiya taaki hume kisi aur naam se call krna hai to krna hai shortcut type

// const {yha ky value extract krni hai wo aata hai } = yha wo aata hai jaha se hume extract krna hai

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "abhinav",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

/* What is JSON?
JSON is a lightweight data-interchange format. It's used to exchange data between a client 
and a server. In simpler terms, it's a way to represent information in a structured way so
that computers can understand it.

/* JSON Syntax */

/*

{
    "name": "John Doe",
    "age": 25,
    "city": "New York"
}

*/

// Example with Arrays

/*
 
[
    {
        "name": "Alice",
        "age": 30
    },
    {
        "name": "Bob",
        "age": 35
    }
]

*/