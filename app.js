



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
  const p1 = document.querySelector('#p1')
  const p2 = document.querySelector('#p2')
  //let gameOverMsg = document.querySelector('#memoryID');
  const move1 = document.getElementById("#move1");
  const move2 = document.getElementById("#move2");
  let matchCard= document.getElementsByClassName('match');

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
//cards.forEach(card => card.addEventListener('click', flipCard));
shuffleCards(); // randomizes the board before each game
// game state
let movesNumber = 0;
let matchedCouplesNumber = 0;
let matchNumber = 1;
let score1= 0;
let score2= 0;
let firstCard, secondCard;
let lockBoard = false;

let player1 = true
let player2 = false
//let move = 0;
const isMatch1= []
const isMatch2= []


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
  return cards
}

//     //Initial Time
// let seconds = 0,
// minutes = 0;
// //Initial moves and win count
// let movesCount = 0,
// winCount = 0;
// //For timer
// const timeGenerator = () => {
// seconds += 1;
// //minutes logic
// if (seconds >= 60) {
//   minutes += 1;
//   seconds = 0;
// }
// //format time before displaying
// let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
// let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
// timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
// };
//For calculating moves
const movesCounter = () => {
openedCards.length === 2
move1 ++;
move2 ++;
counter.innerHTML = move1
counter.innerHTML = move2
};

  
// // score
// document.querySelector("#score1").textContent = result1;
// document.querySelector("#score2").textContent = result1;
// //move
// document.querySelector("#move1").textContent = move1;
// document.querySelector("#move2").textContent = move1;


function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-img", card.img);
    cardElement.innerHTML = `
    
      <div class="before">  Efa </div>

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
    //firstCard = true; //first click
    firstCard = this;// 'this' = the element that has fired the event
    return;
  }
  //firstCard = false; //second click
  secondCard = this;
  // score++;
  // move++;
  // document.querySelector("#score1").textContent = score;
  // document.querySelector("#score2").textContent = score;
  // document.querySelector("#move1").textContent = move;
  // document.querySelector("#move2").textContent = move;
  lockBoard = true;
  // if the second card has been chosen, check if they match
  checkForMatch();
}
function checkForMatch() {
  let isMatch = firstCard.dataset.img === secondCard.dataset.img;
  isMatch ? disableCards() : unflipCards(); 
  if(player1){
    isMatch1.push(isMatch)
    player1=false
    player2=true
  
  }
  else {
    isMatch2.push(isMatch)
    player2=false
    player1=true
   
  }
  currentPlayer();

}
// current player
function currentPlayer (){
  if(player1){
    p1.classList.add("active")
    p2.classList.remove("active")
   
  }
  else{
    p2.classList.add("active")
    p1.classList.remove("active")
  }
  checkGameOver();
}
//  player result 
function playerResult(){
if(player1){
  result1.textContent = isMatch1.length
  move1.textContent = cardsMatchedBy1.length 
}
else {
  result2.textContent = isMatch2.length
  move2.textContent = cardsMatchedBy1.length 
  }
  
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


// if (player1) {
//   result1 +=2;
//   scoreCounter1.textContent = result1.toString();
// }
// else {
//  result2 +=2;
//   scoreCounter2.textContent = result2.toString();
// }
// checkGameOver();
// } else{
// //if the cards are not a match then turn them over again
// lockBoard = true;
// setTimeout(() => {
// firstCard.classList.remove('flip');
// secondCard.classList.remove('flip');
// lockBoard = false;
// resetBoard();
// }, 1000);
// if (p1Turn){
//   p1Turn = false;
// }
// else if (!p1Turn){
//   p1Turn = true;
// }
// // p2Turn = true;
// }
function restart() {
  resetBoard();
  shuffleCards();
  currentPlayer ();
  // score = 0;
  // move = 0;
  // document.querySelector("#score1").textContent = score;
  // document.querySelector("#score2").textContent = score;
  // document.querySelector("#move1").textContent = move;
  // document.querySelector("#move2").textContent = move;
  gridContainer.innerHTML = "";
  generateCards();
}
   
function checkGameOver(){ // game is over if either player gets 4 points frist
  if (score1 === 4){
     alert("CONGRATULATIONS! YOU WON!");
     shuffleCards();
     location.reload();
  }
  else if (score2 === 4){
     alert("CONGRATULATIONS! YOU WON!");
     shuffleCards();
     location.reload();
  }
}
