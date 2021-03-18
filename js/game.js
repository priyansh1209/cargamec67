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
   async start(){
        if(gameState === 0){
            player = new Player()
            var playerCountRef = await db.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getPlayerCount() 
            }
            form = new Form()
            form.display()
        }
        car1 = createSprite(300,200)
        car2 = createSprite(700,200)
        car3 = createSprite(1100,200)
        car4 = createSprite(1500,200)
        cars = [car1,car2,car3,car4]
        car1.addImage(car1Image)
        car2.addImage(car2Image)
        car3.addImage(car3Image)
        car4.addImage(car4Image)

    }
    play(){
        form.hide()
        Player.getPlayerInfo()
        if(allPlayers !== undefined){
            background(groundImage)
            image(track1Image,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index = 0
            var x = 200
            var y 
            for(var w in allPlayers){
                index = index + 1
                x = x + 300
                y = displayHeight-allPlayers[w].distance
                cars[index-1].x = x
                cars[index-1].y = y
                if(index === player.index){
                    cars[index-1].shapeColor = "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 5
            player.update()
        }
        if(player.distance >= displayHeight*5){
            gameState = 2
        }
        console.log(gameState)
        drawSprites()
    }
    end(){
        console.log("game ended")
    }
}