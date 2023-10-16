// this => jab current context ke baare me ho 
//         special keyword that refers to the context in which a function is executed  


const user = {
    username: "abhinav",
    age:20,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()

console.log(this); // node environment me ye cheez empty array degi  
                   //  lekin agar hum browser env me jab run krenge to window ki properties aayengi 








function abc() {
    let username = "abhinav"
    console.log(this.username);
}


abc() // hum functions me iss trah se use nhi kr skte this keyword ko
      // wo hume undefined de dega



const abc1 = function () {
    let username = "abhinav"
    console.log(this.username);
}


abc1() // hum functions me iss trah se use nhi kr skte this keyword ko
      // wo hume undefined de dega



/*_________________ARROW-FUNCTION___________*/;


() => {
    let username = "abhinav";
    console.log(username);
}
 
const func1 = () => {
    let username = "abhinav"
    console.log(this.username);
    console.log(this);
}

func1()

/*_________________IMPLICIT RETURN ARROW-FUNCTION___________*/;

const add = (a, b) => a + b; // isme hume return statement aur parenthesis likhne ki need nhi pdti 

// {} => agr ye wale parenthesis hai to hume return statement use krna pdega 
// () => agr ye wale hai to hum bina return statement ke bhi kaam kr skte hai 

const add2 = (a, b) => ( a + b );

// implicit return mtlb jab hume return statement nhi likhna pd rha 
// explicit return mtlb jab hume return statement likhna pdega 