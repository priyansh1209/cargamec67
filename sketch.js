var gameState = 0
var playerCount = 0
var player
var game
var form
var db

function setup(){
    createCanvas(500,500);     
    db = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}
function draw(){
  
}
