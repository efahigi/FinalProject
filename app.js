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

  //Create a DOM event-listener for the event DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {

    const cards= [
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
    // cards.sort(() => 0.5 - Math.random())
  
      const gridContainer= document.querySelector('.gridContainer')
    // score
      const result1 = document.querySelector('#result1')
      const result2 = document.querySelector('#result2')
      //player
      const p1 = document.querySelector('#p1')
      const p2 = document.querySelector('#p2')
      //game state
      let flippedCard = []
      let flippedCardId = []
      const cardsMatchedByPlayer1 = []
      const cardsMatchedByPlayer2 = []
      let player1 = true
      let player2 = false
  //to make reshiffle cards randamily
      shuffleCards()
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
  
      //create your Players board
    function buildGameBaord() {
      for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('img') //creat the HTML element
        card.setAttribute('src', 'images/placeholder.png') //placeholder image is as reversed card
        card.setAttribute('data-id', i)
        card.setAttribute('class', 'card')
        card.addEventListener('click', flipCard)
        gridContainer.appendChild( card) //add the card into the board
      }
    }
    //flip card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    flippedCard.push(cards[cardId].name)
    flippedCardId.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if (flippedCard.length ===2) {
      setTimeout(checkMatch, 1000)
    }
  }
    //check for matches
  function checkMatch() {
    let cards = document.querySelectorAll('img')
    const flippedCard1 = flippedCardId[0]
    const flippedCard2 = flippedCardId[1]
    
    if(flippedCard1 === flippedCard2) {
      cards[flippedCard1].setAttribute('src', 'images/placeholder.png')
      cards[flippedCard2].setAttribute('src', 'images/placeholder.png')
      alert('You have clicked the same image!')
    }
    else if (flippedCard[0] === flippedCard[1]) {
      
      cards[flippedCard1].setAttribute('src', 'images/blank.png')
      cards[flippedCard2].setAttribute('src', 'images/blank.png')
      cards[flippedCard1].removeEventListener('click', flipCard)
      cards[flippedCard2].removeEventListener('click', flipCard)
      
      if(player1){
        cardsMatchedByPlayer1.push(flippedCard)
      }
      else if(player2){
        cardsMatchedByPlayer2.push(flippedCard)
      }
    } else {
      setTimeout(() => {
        cards[flippedCard1].setAttribute('src', 'images/placeholder.png')
        cards[flippedCard2].setAttribute('src', 'images/placeholder.png')
        if(player1){
          player1=false
          player2=true
        }
        else if(player2){
          player2=false
          player1=true
        }
      }, 500)
      currentPlayer()
    }
    flippedCard = []
    flippedCardId = []
    // current player
    
    function currentPlayer(){
      if(player1){
        p2.classList.add("active")
        p1.classList.remove("active")
      }
      else{
        p1.classList.add("active")
        p2.classList.remove("active")
      }
    }
    if(player1){
      result1.textContent = cardsMatchedByPlayer1.length 
    }
    else if(player2){
      result2.textContent = cardsMatchedByPlayer2.length
    }
    checkGameOver()
  }   
  buildGameBaord()
  function checkGameOver(){ // game is over if either player gets morethan 4 points frist
    if ((cardsMatchedByPlayer1.length > 4) || (cardsMatchedByPlayer2.length > 4)){
      let result;
      if (cardsMatchedByPlayer1.length > cardsMatchedByPlayer2.length) {
        result = 'CONGRATULATIONS! PLAYER 1 WON!';
        window.alert(result);
        document.location.reload();
      }
      else {
        result = 'CONGRATULATIONS! PLAYER 2 WON!';
        window.alert(result);
        document.location.reload(); 
        }
      
      // else {
      //    result = 'DRAW!';
      //   window.alert(result);
      //   document.location.reload(); 
      // }
    }
  }
})