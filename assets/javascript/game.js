// Declare all variables here


var winCount = 0;
var lossCount = 0;

//Variables for gems, random 1-12 
var randRuby = Math.floor(Math.random() * 12) + 1;
var randSapphire = Math.floor(Math.random() * 12) + 1;
var randTopaz = Math.floor(Math.random() * 12) + 1;
var randEmerald = Math.floor(Math.random() * 12) + 1;

//Variable for target number
var winningNumber = Math.floor(Math.random() * 101) + 19;

//Track Player total
var playerCount = 0;

//Restart the game
function reset () {

	randRuby = Math.floor(Math.random() * 12) + 1;
 	randSapphire = Math.floor(Math.random() * 12) + 1;
 	randTopaz = Math.floor(Math.random() * 12) + 1;
 	randEmerald = Math.floor(Math.random() * 12) + 1;
 	winningNumber = Math.floor(Math.random() * 101) + 19;
 	playerCount = 0;

}

