var player;
var playerImage;
var bg;
var ground;
var gameState =0;
var start;



function preload(){
    playerImage = loadAnimation("Images/walk1.png","Images/walk2.png","Images/walk3.png","Images/walk4.png","Images/walk5.png","Images/walk6.png","Images/walk7.png","Images/walk8.png");
    bg = loadImage("Images/cartoonbackground.jpg");

}


function setup() {
    createCanvas(windowWidth,windowHeight); 

    player = createSprite(windowWidth/2-600,windowHeight/2+280,20,20);
    player.addAnimation("player",playerImage);
    player.scale = 0.6;

    ground = createSprite(windowWidth/2,windowHeight/2+360,windowWidth,30);

    //start button
    start = createButton("Let's Start");
    start.position(windowWidth/2-80, windowHeight/2+200);
    start.style('background-color', color(17, 255, 0));
    start.style('font-size', '40px');
    start.style('font-family', 'Architects Daughter');
    start.style('border-radius','40px');
    start.style('border-width','10px');
    start.style('border-color','white');
    start.style('border-style','outset double outset double');




}

function draw() {
    if(gameState === 0){
        background(0);

        start.show();
        //display the game name
        strokeWeight(2);
        stroke("blue");
        fill('#39ff14');
        textSize(70);
        textFont('Rockwell');
        text('WW3', windowWidth/2-50, windowHeight/2-300);

        //display the game information
        noStroke();
        fill(147, 58,22)
        textSize(30);
        text("1. Press the right and left arrow keys to move",windowWidth/2-300,windowHeight/2-200);
        text("2. Press space to jump",windowWidth/2-300,windowHeight/2-100);
        text("3. Dodge the bullets and the trap",windowWidth/2-300,windowHeight/2);
        text("4. Collect medikits and cammo boxes to increase your score",windowWidth/2-300,windowHeight/2+100);

        //hiding the sprites
        player.visible = false;
        ground.visible = false;

        //go to play state
        start.mousePressed(()=>{
            gameState = 1;
        })

    }
    else if(gameState === 1){
        background(bg);

        //show the buttons
        start.hide();

        player.visible = true;   


        ground.visible = false;
    }
    else if(gameState === 2){
        //hide the buttons
        start.hide();

    }



    drawSprites();
   
  
}


