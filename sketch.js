var gameState = 0
var playerCount = 0
var player
var game
var form
var db
var allPlayers

function setup(){
    createCanvas(500,500);     
    db = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}
function draw(){
  if(playerCount === 4){
      game.update(1)

    }
    if(gameState === 1){
        clear()
        game.play()
    }
}
