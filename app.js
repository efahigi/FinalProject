



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
  //const gridContainer = document.querySelector(".gridContainer");
  // const result1 = document.querySelector('#score1')
  // const result2 = document.querySelector('#score2')
  // const p1 = document.querySelector('#p1')
  // const p2 = document.querySelector('#p2')
  // //let gameOverMsg = document.querySelector('#memoryID');
  // const move1 = document.getElementById("#move1");
  // const move2 = document.getElementById("#move2");
  // let matchCard= document.getElementsByClassName('match');
 
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
//cards.sort(() => 0.5 - Math.random())
const gridContainer = document.getElementById("gridContainer");
// const result1 = document.querySelector('#score1');
// const result2 = document.querySelector('#score2');
// const p1 = document.querySelector('#p1');
// const p2 = document.querySelector('#p2');
// const placeholder = 'https://cloud-5ystxzer7.vercel.app/7placeholder.png';
// const blank = 'https://cloud-5ystxzer7.vercel.app/6blank.png';
// game state


let card = [];
let matchedCards= [];
let flippedCards= [];
let currentPlayer = 1;
let player1Pairs = 0;
let player2Pairs = 0;
let player1 = true;
let player2 = false;



//creating div for Gameboard

  for (let i = 0; i < 16; i++){
  const card = document. createElement('div');
    card.className = 'card';
    card.dataset.img = cards[Math. floor (i/2)];
    // card.setAttribute("data-img", card.img);
    card.addEventListener("click", flipCard);
    gridContainer.appendChild(card);
   cards.push(card);
  }
 // shafiling the card
 shuffleCards()
function shuffleCards() {
  for(let i = cards.length-1; i > 0; i--){
     let j = Math. floor (Math.randon() * (i+1)); 
    let temp = cards [i].dataset.img;
    cards[1]. dataset.img = cards[j].dataset. img;
    cards [j] .dataset. img- temp;
  }

  // let currentIndex = cards.length,
  //   randomIndex,
  //   temporaryValue;
  // while (currentIndex !== 0) {
  //   randomIndex = Math.floor(Math.random() * currentIndex);
  //   currentIndex -= 1;
  //   temporaryValue = cards[currentIndex];
  //   cards[currentIndex] = cards[randomIndex];
  //   cards[randomIndex] = temporaryValue;
  // }

}

function flipCard(){
  if(flippedCards.length < 2 && !matchedCards.includes(this)){ 
    this.style.backgroundImage = 'url('+ this.dataset.img + ')';
    flippedCards.push(this);
    this.classList .add('player' + currentPlayer);
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000)
    }
  }
 
}

function checkMatch(){
  //var cards = document.querySelectorAll('img')
  var card1 = flippedCards[0];
  var card2 = flippedCards[1];
  
  if (card1.dataset.img = card2.dataset.img) {
  card1.style.boxshadow = getPlayerBoxShadowColor(currentPlayer);
  card2.style.boxShadow = getPlayerBoxShadowColor(currentPlayer);
  matchedCards.push(card1, card2)
  updateScore();
  checkGameEnd();
  }
  else {
  card1.style.backgroundImage = '';
  card2.style.backgroundImage = '';
  card1.classlist.remove('player' + currentPlayer)
  card2.classlist.remove('player' + currentPlayer)
  if (currentPlayer ===1){
    currentPlayer = 2;
  }
  else{
    currentPlayer = 1;
  }
  }
  flippedCards = [];
}
function updateScore(){
  if (currentPlayer ===1){
    player1Pairs++;
    document.querySelector('#result1').textContent = 'Score:' +player1Pairs;
  }
  else{
    player2Pairs++;
    document.querySelector('#result2').textContent = 'Score:' +player2Pairs;
    
  }
  checkGameOver()
}
function getPlayerBoxShadowColor(player){
  if (player ===1){
  return'5px spx 20px #f20090'
  } else{
    return'5px spx 20px #56cfe3'
  }
}
function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
 
}
// restart();
// function restart() {
//   resetBoard()
//   shuffleCards();
//   createBoard()
// }
function checkGameOver(){ // game is over if either player gets 4 points frist
  if (matchedCards.length === 4){
    let result;
    if (player1Pairs > player2Pairs) {
      result = 'CONGRATULATIONS! PLAYER 1 WON!';
      window.alert(result);
      document.location.reload();
    }
    else if  (player2Pairs > player1Pairs) {
      result = 'CONGRATULATIONS! PLAYER 2 WON!';
      window.alert(result);
      document.location.reload(); 
      }
    else {
      result = 'YOU ARE DRAW!';
      window.alert(result);
      document.location.reload(); 
    } 
  }
  restart()
}
//     let cardsChosen = []
//     let cardsChosenId = []
//     const cardsMatchedBy1 = []
//     const cardsMatchedBy2 = []
//     let player1 = true
//     let player2 = false

//     //create your board
//     function createGrid() {
//       for (let i = 0; i < cards.length; i++) {
//        const card = document.createElement('img')
//         card.setAttribute('src', placeholder.png)
//         card.setAttribute('data-id', i)
//         card.setAttribute('class', 'tile')
//         card.addEventListener('click', flipCard)
//         gridContainer.appendChild(card)
//       }
//     }

//     //check for matches
//     function checkMatch() {
//       let cards = document.querySelectorAll('img')
//       const optionOneId = cardsChosenId[0]
//       const optionTwoId = cardsChosenId[1]
      
//       if(optionOneId == optionTwoId) {
//         cards[optionOneId].setAttribute('src', placeholder.png)
//         cards[optionTwoId].setAttribute('src', placeholder.png)
//         alert('You have clicked the same image!')
//       }
//       else if (cardsChosen[0] === cardsChosen[1]) {
        
//         cards[optionOneId].setAttribute('src', blank.png)
//         cards[optionTwoId].setAttribute('src', blank.png)
//         cards[optionOneId].removeEventListener('click', flipCard)
//         cards[optionTwoId].removeEventListener('click', flipCard)
//         if(player1){
//           cardsMatchedBy1.push(cardsChosen)
//         }
//         else if(player2){
//           cardsMatchedBy2.push(cardsChosen)
//         }
        
//       } else {
//         setTimeout(() => {
//           cards[optionOneId].setAttribute('src', placeholder.png)
//           cards[optionTwoId].setAttribute('src', placeholder.png)
//           if(player1){
//             player1=false
//             player2=true
//           }
//           else if(player2){
//             player2=false
//             player1=true
//           }
//         }, 500)
//         currentPlayer()
//       }
//       cardsChosen = []
//       cardsChosenId = []
//       // current player
//       function currentPlayer(){
//         if(player1){
//           p2.classList.add("active")
//           p1.classList.remove("active")
//         }
//         else{
//           p1.classList.add("active")
//           p2.classList.remove("active")
//         }
//       }
      
      

//       if(player1){
//         result1.textContent = cardsMatchedBy1.length 
//       }
//       else if(player2){
//         result2.textContent = cardsMatchedBy2.length
//       }
//       checkGameOver()
//     }
    
//     //flip card
//     function flipCard() {
//       var cardId = this.getAttribute('data-id')
//       cardsChosen.push(cardArray[cardId].name)
//       cardsChosenId.push(cardId)
//       this.setAttribute('src', cardArray[cardId].img)
//       if (cardsChosen.length ===2) {
//         setTimeout(checkMatch, 500)
//       }
//     }    

//     createGrid()
   

//     function checkGameOver(){ // game is over if either player gets 4 points frist
//       if (matchedCards.length === 4){
//         let result;
//         if (player1Pairs > player2Pairs) {
//           result = 'CONGRATULATIONS! PLAYER 1 WON!';
//           window.alert(result);
//           document.location.reload();
//         }
//         else if  (player2Pairs > player1Pairs) {
//           result = 'CONGRATULATIONS! PLAYER 2 WON!';
//           window.alert(result);
//           document.location.reload(); 
//           }
//         else {
//           result = 'YOU ARE DRAW!';
//           window.alert(result);
//           document.location.reload(); 
//         } 
//       }
//     }
