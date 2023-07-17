
let shuffledList, totNumClicks, activePlayer, cardTargets, pickOne, scores;
let foundCards = 0;

function shuffleDeck() {
  const photoList = ["2Diamond", "3Spade", "4Heart", "5Clubs", "6Spade", "7Diamond", "8Heart", "9Clubs"];
  shuffledList = new Array(16);
  const isPhotoPicked = [0, 0, 0, 0, 0, 0, 0, 0];
  scores = [0, 0];
  //populate the shuffledList array
  for (let i = 0; i < 16; i++) {
    //pick an card by random number
    let picked = Math.floor(Math.random() * 8);

    //check if this card has already been picked twice,
    //if NOT, then assign that card to the element of the shuffledDeck array
    //update the isPhotoPicked Array
    while (isPhotoPicked[picked] >= 2) {
      picked = Math.floor(Math.random() * 8);
    }

    if (isPhotoPicked[picked] < 2) {
      shuffledList[i] = photoList[picked];
      isPhotoPicked[picked]++;
    }
  }

  return shuffledList;
}

function changeTurn(active) {
  if (active == 0) {
    document.querySelector("#zero").classList.remove('active');
    document.querySelector("#one").classList.add('active');
  } else if (active == 1) {
    document.querySelector("#one").classList.remove('active');
    document.querySelector("#zero").classList.add('active');
  };
  active === 0 ? activePlayer++ : activePlayer--;
};

// App Controller

const startGame = function () {
  for (let i = 0; i < 16; i++) {
    document.getElementById('game-board').innerHTML +=
      `<div class="card">
        <img src="images/placeholder.png" alt="" class="question" ID="${i}">
      </div>`;
  }
  shuffledList = shuffleDeck();
  totNumClicks = 0;
  activePlayer = 0;
  cardTargets = document.querySelectorAll(".question");
}

startGame();

for (const cardTarget of cardTargets) {
  cardTarget.addEventListener('click', function getElement() {
    if (cardTarget.src.includes("placeholder")) {
      // Identify the picked card
      this.src = "images/" + shuffledList[this.id] + ".jpeg";
      totNumClicks++;
      let element1 = this;

      // check if its time to change turns
      if (totNumClicks % 2 === 0) {

        // check for a match
        if (element1.src === pickOne.src) {
          scores[activePlayer]++;

          foundCards++;

          const domString = "score" + activePlayer;
          document.querySelector("#" + domString).textContent = scores[activePlayer];

          if (foundCards >= 8) {
            if (scores[0] > scores[1]) {
              if (confirm(`Player 1 won by ${scores[0]}. Continue playing?`)) {
                window.location.reload();
              }
            } else if (scores[0] < scores[1]) {
              if (confirm(`Player 2 won by ${scores[1]}. Continue playing?`)) {
                window.location.reload();
              }
            } else {
              if (confirm(`Draw!. Continue playing?`)) {
                window.location.reload();
              }
            }

          }

          changeTurn(activePlayer);

        } else {
          setTimeout(function () {
            pickOne.src = "images/placeholder.png";
            element1.src = "images/placeholder.png";

            changeTurn(activePlayer);

          }, 500);
        };
      } else {
        pickOne = element1;
      };
    }
  });
};
