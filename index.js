let player ={
    name : "Per",
    chips: 144
}
let cards = []; //ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")//grabs dom
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips



function getRandomCard() {
    let randomNumber =Math.floor(Math.random()*13 )+1
    if (randomNumber ===1) {
        return 11
    }else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }    
}



function startGame() {
    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    if (sum <=20 ) {
        message ="Do you want to draw a new card?"
    } else if ( sum === 21){
        message = "you got Blackjack"
        hasBlackJack = true
    } else {
        message = "you're out"
        isAlive = false
    }
      messageEl.textContent = message
      sumEl.textContent = "Sum: " + sum
      cardsEl.textContent ="Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " // += allows the for loop to add to line 30
    } 

}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        // statements and events must be inside the if statement 
        let card = getRandomCard()
        sum += card 
        cards.push(card)
        console.log(cards)
        renderGame()
    }  
}










