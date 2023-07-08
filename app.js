



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

  
document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
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
  cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const result1 = document.querySelector('#result1')
    const result2 = document.querySelector('#result2')
    // score
    const p1 = document.querySelector('#p1')
    const p2 = document.querySelector('#p2')
    // console.log([p1, p2])
    var cardsChosen = []
    var cardsChosenId = []
    const cardsMatchedBy1 = []
    const cardsMatchedBy2 = []
    var player1 = true
    var player2 = false

    //create your board
    function createGrid() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'imgs/placeholder.png')
        card.setAttribute('data-id', i)
        card.setAttribute('class', 'tile')
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }

    //check for matches
    function checkMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'imgs/placeholder.png')
        cards[optionTwoId].setAttribute('src', 'imgs/placeholder.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        
        cards[optionOneId].setAttribute('src', 'imgs/blank.png')
        cards[optionTwoId].setAttribute('src', 'imgs/blank.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
       
        if(player1){
          cardsMatchedBy1.push(cardsChosen)
        }
        else if(player2){
          cardsMatchedBy2.push(cardsChosen)
        }
      } else {
        setTimeout(() => {
          cards[optionOneId].setAttribute('src', 'imgs/placeholder.png')
          cards[optionTwoId].setAttribute('src', 'imgs/placeholder.png')
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
      cardsChosen = []
      cardsChosenId = []
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
        result1.textContent = cardsMatchedBy1.length 
      }
      else if(player2){
        result2.textContent = cardsMatchedBy2.length
      }
      
    }
    
    //flip card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkMatch, 500)
      }
    }    

    createGrid()
})