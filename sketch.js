var ball;
var db,position

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db = firebase.database()
    var ballPosRef = db.ref("ball/position")
    ballPosRef.on("value",read,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-2,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(2,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-2);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+2);
    }
    if(position !== undefined){
    drawSprites();
    }
}

function changePosition(x,y){
    
    db.ref("ball/position").set({
        x: ball.x + x,
        y: ball.y + y
    })
}

function showError(){
    console.log("error")
}

function read(data){
    position = data.val()
    ball.x = position.x
    ball.y = position.y
}