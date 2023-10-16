function add(num1,num2) {
    console.log(num1+num2);
    return num1 + num2 
}
add(3,4)


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username) {
    return `$(username) just logged in` 
}
console.log(loginUserMessage("abhinav"));


function loginUserMessage(username = "you"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("abhinav"))
// console.log(loginUserMessage("abhinav"))


