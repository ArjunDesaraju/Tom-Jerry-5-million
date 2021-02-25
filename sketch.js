var tom, jerry;
var tomSitting, tomRunning, tomCollided;
var garden, gardenImage;
var jerryCollided, jerryNormal;

function preload() {
    //load the images here
    gardenImage = loadImage ("images/garden.png");

    tomSitting = loadAnimation ("images/cat4.png");
    tomRunning = loadAnimation ("images/cat3.png");
    tomCollided = loadAnimation ("images/cat1.png");


    jerryCollided = loadAnimation ("images/mouse4.png");
    jerryNormal = loadAnimation ("images/mouse2.png");
    
}

function setup(){
    createCanvas(800,1100);
    //create tom and jerry sprites here
    garden = createSprite (550,550);
    garden.addImage (gardenImage);

    tom = createSprite (700,750,30,30);
    tom.addAnimation ("catRunning",tomRunning);
    tom.addAnimation ("catSitting",tomSitting);
    tom.addAnimation ("catCollided", tomCollided);
    tom.scale = 0.20;

    jerry = createSprite (150,790,30,30);
    jerry.addAnimation ("jerryNormal",jerryNormal);
    jerry.scale = 0.15;


    

}

function draw() {
    background(255);

    if (tom.x - jerry.x < (tom.width - jerry.width)/2)
{
    tom.addAnimation ("tomCollided",tomCollided);
    tom.changeAnimation ("tomCollided");
    jerry.addAnimation ("jerryCollided",jerryCollided);
    jerry.changeAnimation ("jerryCollided");
    tom.velocityX = 0;
}
    drawSprites();
}


function keyPressed(){
    
    if (keyCode === LEFT_ARROW){
        tom.velocityX = -5;
    }

}
