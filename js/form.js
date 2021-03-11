class Form{
    constructor(){
        this.button = createButton("submit")
        this.input = createInput("type name")
        this.greeting = createElement("h5")
    }
    hide(){
        this.button.hide()
        this.input.hide()
        this.greeting.hide()
    }
    display(){
        var title = createElement("h3")
        title.html("car racing game")
        title.position(displayWidth/2-50,20)
        this.button.position(displayWidth/2-50,displayHeight/2+50)
        this.input.position(displayWidth/2-50,displayHeight/3)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount = playerCount +1
            player.index = playerCount
            player.updateCount(playerCount)
            player.update()

            this.greeting.html("welcome "+ player.name)
            this.greeting.position(displayWidth/4,displayHeight/2+50)
        })
    }
}