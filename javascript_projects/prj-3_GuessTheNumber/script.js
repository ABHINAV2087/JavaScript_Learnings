const randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submit-btn')
const userInput = document.querySelector('#guessfield')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastresult')

const startOver = document.querySelector('#resultarea')

let prevGuess = []
let numGuess = 1

let playGame = true 

if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('enter a valid number')
    } 
    else if ( guess<1 || guess>100){
        alert('enter a number between 1 and 100')
    }
    else{
        prevGuess.push(guess)
        if ( numGuess === 11) {
            displayGuess(guess)
            displayMessage(`game over , Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){

}
function displayGuess(guess){
     
}
function displayMessage(message){

}
function newGame(){
    
}
function endGame(){

}