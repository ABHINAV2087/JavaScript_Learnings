// const jsUser = new Object()
const jsUser = {}

jsUser.id = "123abc"
jsUser.name = "abhi"
jsUser.isLoggedIn = false

// console.log(jsUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: { 
        userfullname: {
            firstname: "abhinav",
            lastname: "tirole"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} // spread operator 
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(jsUser);

// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));
// console.log(Object.entries(jsUser));

// console.log(jsUser.hasOwnProperty('isLoggedIn'));// pata krne k liye k liye ki aisa kuch exist krta hai ya nhi 



