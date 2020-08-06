var startGamebackground
var gameState
var startGamebutton, textbutton
var currentObjects = []
var ground, groundflag
var pedasl, pedasr, pedasimg
var swordimgup, swordchoose
var chooseBackground
var gunchoose
var player
var choosegun, chooseblaster
function preload(){
    startGamebackground = loadImage("images/startgameback.png", 1000, 1000)
    startGamebimg = loadAnimation("images/start.png","images/start.png", "images/blank.png","images/blank.png", "images/blank.png" )
    choosebimg = loadAnimation("images/start.png","images/start.png", "images/blank.png","images/blank.png", "images/blank.png" )
    starttextimg = loadImage("images/startext.png", 1000, 1000)
    pedasimg = loadImage("images/pedas.png", 100, 200)
    swordimgup = loadImage("images/swordup.png", 100,100)
    chooseBackground = loadImage("images/chooseability.jpg", 1000, 1000)
    playerstand = loadImage("images/robot stand.png", 100, 100)
    choosensword = loadImage("images/chooseblaster.png", 1000, 1000)
    choosenblaster = loadImage("images/choosesword.png", 1000, 1000)
}
function setup(){
    canvas = createCanvas(1000, 1000);
    gameState = "start"
    startflag = 0
    textflag = 0
    groundflag = 0
    //startGamebutton.scale = 2
    
}
function draw(){
    text("Xpos: "+mouseX +"yPos: "+ mouseY,500,40);
    if(gameState === "start" ){
    background(startGamebackground);
    if(startflag === 0){
    startDisplay();
    }
    drawSprites();
    if(mousePressedOver(startGamebutton)){
        clear();
        gameState = "starttext"
        startGamebutton.destroy();
    }
    }
    if(gameState === "starttext"){
        clear();
        background(starttextimg);
        if(textflag === 0){
            textDisplay();
        }
        drawSprites();
        if(mousePressedOver(textbutton)){
            clear();
            gameState = "firstchoose"
            textbutton.destroy();
        }
    }
    if(gameState === "firstchoose"){
        console.log("works")
        

        clear();
        
      background(chooseBackground);
        if(groundflag === 0){
            chooseDisplay();
        }
        player.setVelocity (0, 30)
        player.collide(ground);
        player.collide(pedasl);
        player.collide(pedasr);
        drawSprites();
        createEdgeSprites();
        if(keyDown(RIGHT_ARROW)){
            player.x = player.x + 30
        }

        if(keyDown(LEFT_ARROW)){
            player.x = player.x -30
        }
        if(keyDown(UP_ARROW)){
            player.y = player.y - 100
        }
        if(player.isTouching(swordchoose)){
            clear();
        gameState = "choosensword"
        ground.destroy()
        pedasl.destroy()
        pedasr.destroy()
        swordchoose.destroy()
        gunchoose.destroy()
        ground.destroy()
        player.destroy()
        
        }
        if(player.isTouching(gunchoose)){
            clear();
        gameState = "choosenblaster"
        ground.destroy()
        pedasl.destroy()
        pedasr.destroy()
        swordchoose.destroy()
        gunchoose.destroy()
        ground.destroy()
        player.destroy()
        
        }
    }
    if(gameState === "choosenblaster"){
        background(choosenblaster)
        console.log("hello")
    }
    if(gameState === "choosensword"){
        background(choosensword)
    console.log("bye")
    }
}
function startDisplay(){
    startGamebutton = createSprite(500,600,1,1);

    startGamebutton.addAnimation("startbutton", startGamebimg)
    startflag = 1 

}
function textDisplay(){
   textbutton = createSprite(500,800,1,1);
   textbutton.addAnimation("textbutton", choosebimg)
   textflag = 1
}
function chooseDisplay(){

   ground = createSprite(500,970,1000, 50);

   pedasl = createSprite(100,870,1,1);
   pedasl.addImage("ped",pedasimg)
   pedasr = createSprite(900,870,1,1);
   pedasr.addImage("peda", pedasimg)
   swordchoose = createSprite(895, 730, 1,1)
   swordchoose.addImage("swordup",swordimgup)
   gunchoose = createSprite(195, 730, 1,1)
   gunchoose.addImage("swordup",swordimgup)
   ground.shapeColor = "black"
   groundflag = 1

   player = createSprite(500,730,1,1)
   player.addImage("robotstand", playerstand)
   player.scale = 0.2
   player.debug= true
   swordchoose.debug = true
   gunchoose.debug = true
   
}