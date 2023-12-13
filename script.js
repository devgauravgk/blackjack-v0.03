let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum =  firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("msg-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){
    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1 ;
    if (randomNumber >10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
}
function renderGame(){
    cardsEl.textContent = "cards : ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "sum : " + sum;
    if (sum <= 20){
        message = "Do you want to draw a new card ?";
    }else if (sum === 21){
        message = " you've got a blackjac!";
        hasBlackJack = true;
    }else{
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    console.log(message);
    
}


function newCard(){
    if (isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the deck!");
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame()
    }
    
}