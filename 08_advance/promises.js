// creating promises

const promise1 = new Promise(function(resolve , reject){
    // do an async tasks 
    // db class , cryptography , network etc
    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },2000)
})

// .then ka direct relation hota hai resolve ke sath

promise1.then(function(){
    console.log("promise consumed");
    console.log("_______________________");
})



new Promise(function (resolve , reject) {
    setTimeout(function(){
        console.log("async task 2 done ")
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
    console.log("_______________________");
})

// for example hum database se fetch kr rhe hai ye tbke liye 
//  use kr skte hai jb data paas krna ho hume 


const promise3 = new Promise(function(resolve , reject){

    setTimeout(function(){
        resolve(
            { 
                username: "abhinav tirole",
                email: "abc@example.com"
            }
        )
    },1000)
})

// data consumption
promise3.then(function(user){
    console.log(user)
    console.log("_______________________");
})




const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = true
        let error = false

        if(!error ){
            resolve({username: "abhinav" , password: 123})
        }
        else{
            reject('ERROR : something went wrong')
        }
    },3000)
})

promise4.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function (error){
    console.log(error);
})
.finally(() => {
    console.log('error is either resolved or rejected');
})

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = true
        let error = false

        if(!error ){
            resolve({username: "xyz" , password: 123})
        }
        else{
            reject('ERROR : js went wrong')
        }
    },5000)
});

async function consumePromise5(){
    const response = await promise5 
    console.log(response);
}
consumePromise5()



// fetch method 

fetch('https://api.github.com/users/abhinav2087')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))