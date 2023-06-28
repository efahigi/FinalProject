
//The objective of the game is to turn over pairs of matching cards to get 1 point
//  This game is played  by two-players. 
// The winner is the player that reaches  more than half points first on the board.
//-----------------------------
//Making psudocode and some HTML cosing  on 1st Day 
// Making javascript of the game on 2nd and 3rd day.
// Making some css and javascript of the game on 4th day.
//------------------------------
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

document.addEventListener('DOMContentLoaded', () => {
const giridsContainer = document.querySelector(".grids")
let gameOverMsg = document.querySelector('#memoryID');
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
}
]
})