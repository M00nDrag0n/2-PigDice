// Back-end Function

//Player Object
function Player(name) {
  this.name = name,
  this.gameScore = 0,
  this.roundScore = 0
}

//Game Object
//2 players
function Game() {
  var player1 = new Player("player1");
  var player2 = new Player("player2");
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = this.player1;
  console.log(this.currentPlayer);
  //The game has a max score
}

//player clicks roll dice
//Die returns a random number between 1 and 6
Game.prototype.rollDie = function() {
  var roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
  //player rolls a 1
  if (roll === 1) {
    //round score goes to zero
    this.currentPlayer.roundScore = 0;
    //turn ends
    this.switchPlayer();
  } else {
    //That number is added to their round score
    this.currentPlayer.roundScore += roll;
  }
}
//turn ends
Game.prototype.switchPlayer = function() {
  if (this.currentPlayer === this.player1) {
  this.currentPlayer = this.player2;
  } else if (this.currentPlayer === this.player2) {
  this.currentPlayer = this.player1;
  }
}

//player can click hold
Game.prototype.hold = function() {
  //round score is added to total score
  console.log(this);
  // var storePoints = this.currentPlayer.roundScore;
  //
  this.currentPlayer.gameScore += this.currentPlayer.roundScore;
  this.currentPlayer.roundScore = 0;
  //turn ends
  if (this.currentPlayer.gameScore >= 20){
    console.log("You Won!");
}
}
//UI function
$(document).ready(function(){
  var newGame = new Game();
  console.log(newGame);
  $("#roll").click(function(){
    newGame.rollDie();
    $("#rolledScore").text(newGame.currentPlayer.roundScore);
  });
  $("#hold").click(function(){
    newGame.hold();
    $("#" + newGame.currentPlayer.name).text(newGame.currentPlayer.gameScore);
    newGame.switchPlayer();
  });
});
