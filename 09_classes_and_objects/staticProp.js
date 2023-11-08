class User{
    constructor(username,email){
        this.username = username ;
       
    }
    logMe(){
        console.log(`username : ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const abc = new User("abhinav")

// static keyword uss property ko use hone se bachata hai