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
        title.position(130,20)
        this.button.position(130,300)
        this.input.position(130,200)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount = playerCount +1
            player.index = playerCount
            player.updateCount(playerCount)
            player.update()

            this.greeting.html("welcome "+ player.name)
            this.greeting.position(20,440)
        })
    }
}