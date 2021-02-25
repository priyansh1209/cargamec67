class Player{
    constructor(){

    }
    getPlayerCount(){
        var playerCountref = db.ref("playerCount")
        playerCountref.on("value",function(data){
            playerCount = data.val()
        })
    }
    updateCount(count){
        db.ref("/").update({
            playerCount: count
        })
    }
    update(name){
        var playerIndex = "player"+playerCount
        db.ref(playerIndex).update({
            name:name
        })
    }
}