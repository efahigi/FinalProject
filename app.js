
//The objective of the game is to turn over pairs of matching cards to get 1 point
//  This game is played  by two-players. 
// The winner is the player that reaches  more than half points first .
//-----------------------------
//1.INITIALIZATION
     //making random card Ready
  //2. shuffle card
     //flip card -first click on frist Card 
//second click on second Card
    //3. check match
//if frist Card and second card much than player going to get 1 point
 //and any muched cards cannot be clicked again(removed)
      //4. scoring points
// if frist Card and second card doesnot much then turn them over(hide) again
//then resart game board over again
//no more than 2 card are flipped at time
      //Declare when game is won
// Either player who can get more than half will win. 
// document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.querySelector(".grid-container");
  const result1 = document.querySelector('#score1')
  const result2 = document.querySelector('#score2')
  const p1 = document.querySelector('#player1')
  const p2 = document.querySelector('#player2')
  const moves = document.getElementById("movesMounter");
  
  const cards = [
  {
  name: '1',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/1200px-Playing_card_heart_A.svg.png"
},
{
  name: '2',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/200px-Playing_card_spade_2.svg.png?20070326035258"
},
{
  name: '3',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/1200px-Playing_card_spade_3.svg.png"
},
{
  name: '4',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Playing_card_heart_4.svg/1638px-Playing_card_heart_4.svg.png"
},
{
  name: '5',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/1200px-Playing_card_club_5.svg.png"
},
{
  name: '6',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/1638px-Playing_card_heart_6.svg.png"
},
{
  name: '7',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/819px-Playing_card_club_7.svg.png"
},
{
  name: '8',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/614px-Playing_card_heart_8.svg.png"
},
{
  name: '1',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/1200px-Playing_card_heart_A.svg.png"
},
{
  name: '2',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/200px-Playing_card_spade_2.svg.png?20070326035258"
},
{
  name: '3',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/1200px-Playing_card_spade_3.svg.png"
},
{
  name: '4',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Playing_card_heart_4.svg/1638px-Playing_card_heart_4.svg.png"
},
{
  name: '5',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/1200px-Playing_card_club_5.svg.png"
},
{
  name: '6',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/1638px-Playing_card_heart_6.svg.png"
},
{
  name: '7',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/819px-Playing_card_club_7.svg.png"
},
{
  name: '8',
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/614px-Playing_card_heart_8.svg.png"
},
];
// game state
let firstCard, secondCard;
let lockBoard = false;
let score = 0;
let player1 = true
let player2 = false
let move = 0;
// score
document.querySelector("#score1").textContent = score;

document.querySelector("#score2").textContent = score;

const movesCounter = () => {
  moves += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCounter}`;
   
};
//making random card Ready
function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-img", card.img);
    cardElement.innerHTML = `
    
      <div class="before">?</div>

      <div class="after">
      <img class="front-image" src=${card.img} />
      </div>
    `;
  
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  score++;
  document.querySelector("#score").textContent = score;
  
  lockBoard = true;

  checkForMatch();
}
    function checkForMatch() {
      let cards = document.querySelectorAll('img')
      let isMatch = firstCard.dataset.img === secondCard.dataset.img;
    
      isMatch ? disableCards() : unflipCards();
    }
    
    function disableCards() {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    
      resetBoard();
    }
    
    function unflipCards() {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
      }, 1000);
    }
    function resetBoard() {
      firstCard = null;
      secondCard = null;
      lockBoard = false;
    }
    function restart() {
      resetBoard();
      shuffleCards();
      score = 0;
      document.querySelector("#score1").textContent = score;
      document.querySelector("#score1").textContent = score;
      gridContainer.innerHTML = "";
      generateCards();
    }