// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

// Hook up a click event listener to the Roll Dice Button. 
rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    
    // 1. Find out which players turn it is
    // 2. log out the value e.g. "Player 1 rolled 5"
    // 3. Switch the turn back to the other player
    if (player1Turn) {
        console.log("player 1 rolled " + randomNumber)
    } else {
       console.log("player 2 rolled " + randomNumber)
    }
    player1Turn = !player1Turn
})
