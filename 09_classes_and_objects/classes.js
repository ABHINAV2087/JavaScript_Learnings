//  this was introduced after ES6


class User{
    constructor(username,email,password){
        this.username = username ;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const abc = new User("abhinav","user@gmail.com","123")

console.log(abc.encryptPassword());
console.log(abc.changeUsername());
console.log(abc);