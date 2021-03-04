class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = db.ref("gameState")
        gameStateRef.on("value", function(data){
            gameState = data.val()
        })
    }
    update(state){
        db.ref("/").update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getPlayerCount()  
            form = new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        textSize(25)
        text("game start",50,50)
        Player.getPlayerInfo()
        if(allPlayers !== undefined){
            var displayPos = 100
            for(var w in allPlayers){
            displayPos = displayPos + 50
            fill("blue")
            if(w === "player"+player.index){
                fill("red")
            }
            text(allPlayers[w].name+" : "+allPlayers[w].distance,120,displayPos)
            }
            console.log(allPlayers)
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 5
            player.update()
        }
    }
}