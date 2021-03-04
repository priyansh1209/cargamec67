class Player{
    constructor(){
        this.name = null
        this.index = null
        this.distance = 0

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
    update(){
        var playerIndex = "players/player"+this.index
        db.ref(playerIndex).update({
            name:this.name,
            distance:this.distance
        })
    }
   static getPlayerInfo(){
        db.ref("players").on("value",(data)=>{
          allPlayers = data.val()  
        })
    }
}