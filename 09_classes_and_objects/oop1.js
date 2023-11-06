// example 1 

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA"
    },
    sayHello: function() {
      console.log("Hello!");
    }
  };

  

  console.log(person.sayHello());
  console.log(person.address.street);


console.log("___________________________________");

// example 2

const user = {
    username: "abhinav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);


console.log("___________________________________");

// example 3

function user2(username , loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new user2("abhinav",15,true)

console.log(userOne);