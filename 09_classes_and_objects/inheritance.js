class User{
    constructor(username,email){
        this.username = username ;
        this.email = email;
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password 
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const abc = new teacher("abhinav","abc@gmail.com",1)

abc.addCourse()

const xyz = new user("user")

xy