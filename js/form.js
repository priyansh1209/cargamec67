class Form{
    constructor(){

    }
    display(){
        var title = createElement("h3")
        title.html("car racing game")
        title.position(130,20)
        var button = createButton("submit")
        button.position(130,300)
        var input = createInput("type name")
        input.position(130,200)

        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount = playerCount +1
            player.updateCount(playerCount)
            player.update(name)

            var greeting = createElement("h5")
            greeting.html("welcome "+ name)
            greeting.position(20,440)
        })
    }
}