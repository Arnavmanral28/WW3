var player;
var playerImage,playerReverseWalk,idle;
var bg;
var ground;
var gameState =1;
var start;
var bulletGroup;
var bulletImage;
var fighterjetImage;
var fighterjetsGroup;
var score =0;



function preload(){
    playerImage = loadAnimation("Images/walk1.png","Images/walk2.png","Images/walk3.png","Images/walk4.png","Images/walk5.png","Images/walk6.png","Images/walk7.png","Images/walk8.png");
    bg = loadImage("Images/cartoonbackground.jpg");
    playerReverseWalk = loadAnimation("Images/reverseWalk1.png","Images/reverseWalk2.png","Images/reverseWalk3.png","Images/reverseWalk4.png","Images/reverseWalk5.png","Images/reverseWalk6.png","Images/reverseWalk7.png","Images/reverseWalk8.png")
    idle = loadAnimation("Images/walk1.png");
    bulletImage = loadAnimation("Images/bullet.png");
    trapImage1 = loadImage("Images/trap.png");
    trapImage2 = loadImage("Images/bomb.png");
    fighterjetImage1 = loadImage("Images/fighterjet1.png");
    fighterjetImage2 = loadImage("Images/fighterjet2.png");
    fighterjetImage3 = loadImage("Images/fighterjet3.png");
    fighterjetImage4 = loadImage("Images/fighterjet4.png");
    cyborgAnimation = loadAnimation("Images/robowalk1.png","Images/robowalk2.png","Images/robowalk3.png","Images/robowalk4.png","Images/robowalk5.png","Images/robowalk6.png","Images/robowalk7.png","Images/robowalk8.png")
    cyborgReAnimation = loadAnimation("Images/roboRewalk1.png","Images/roboRewalk2.png","Images/roboRewalk3.png","Images/roboRewalk4.png","Images/roboRewalk5.png","Images/roboRewalk6.png","Images/roboRewalk7.png","Images/roboRewalk8.png")
    boxImage1 = loadImage("Images/cargoBox1.png"); 
    boxImage2 = loadImage("Images/cargoBox2.png"); 
    boxImage3 = loadImage("Images/cargoBox3.png"); 
    boxImage4 = loadImage("Images/cargoBox4.png"); 
    tankImage1 = loadImage("Images/tank1.png");
    tankImage2 = loadImage("Images/tank2.png");
    tankImage3 = loadImage("Images/tank3.png"); 
    tankImage4 = loadImage("Images/tank4.png");   
    flagImage = loadImage("Images/flag.png");
}


function setup() {
    createCanvas(windowWidth,windowHeight); 

    //player
    player = createSprite(windowWidth/2-600,windowHeight/2+280,20,20);
    player.addAnimation("player",playerImage);
    player.addAnimation("playerReverseWalk",playerReverseWalk);
    //player.addAnimation("idle",idle)
    player.scale = 0.6;

    

    //ground
    ground = createSprite(camera.position.x+windowWidth/2-600,windowHeight/2+360,windowWidth,30);
    //ground = createSprite(windowWidth/2,windowHeight/2+360,windowWidth,30);
    ground.shapeColor = "black" ;

    //flag
    flag = createSprite(15000,590,40,40);
    flag.addImage(flagImage);
    flag.scale = 0.5

    //cyborg
    cyborg1 = createSprite(1800,665,30,30);
    cyborg1.velocityX = -5
    cyborg1.addAnimation("cyborg",cyborgAnimation);
    cyborg1.scale = 0.8;

    //cargo
    cargoBox1 = createSprite(1500,680);
    cargoBox1.addImage(boxImage1);
    
    cargoBox2 = createSprite(1500,570);
    cargoBox2.addImage(boxImage1);

    cargoBox3 = createSprite(2000,690);
    cargoBox3.addImage(boxImage2);
    
    cargoBox4 = createSprite(2000,580);
    cargoBox4.addImage(boxImage2);  

    //tank
    tank1 = createSprite(3000,645);
    tank1.addImage(tankImage1);
    tank1.scale = 0.5;
    tank1.depth = player.depth;
    player.depth +=1;

    //start button
    start = createButton("Let's Start");
    start.position(camera.position.x+windowWidth/2-90, windowHeight/2+200);
    start.style('background-color', color(17, 255, 0));
    start.style('font-size', '40px');
    start.style('font-family', 'Architects Daughter');
    start.style('border-radius','40px');
    start.style('border-width','10px');
    start.style('border-color','white');
    start.style('border-style','outset double outset double');

    //restart button
    reStart = createButton("Press to Play Again");
    reStart.position(camera.position.x+windowWidth/2-140, windowHeight/2+200);
    reStart.style('background-color', color(17, 255, 0));
    reStart.style('font-size', '40px');
    reStart.style('font-family', 'Architects Daughter');
    reStart.style('border-radius','40px');
    reStart.style('border-width','10px');
    reStart.style('border-color','white');
    reStart.style('border-style','outset double outset double');

    bulletGroup = createGroup();
    trapGroup = createGroup();
    fighterjetsGroup = createGroup();
    tankGroup = createGroup();


}

function draw() {
    if(gameState === 0){
        background(0);

        start.show();
        reStart.hide();
        //display the game name
        strokeWeight(2);
        stroke("blue");
        fill('#39ff14');
        textSize(70);
        textFont('Rockwell');
        text('WW3', camera.position.x+windowWidth/2-940, windowHeight/2-300);

        //display the game information
        noStroke();
        fill("cyan");
        textSize(30);
        text("Hi Captain, this is Major X. You are on a mission to save this world from getting nuked by the mad dictator Felon, who wants",camera.position.x+windowWidth/2-1700,windowHeight/2-220);
        text("to rule the entire world. And his madness will destroy the whole world. You are our only hope. But safety is important. Read",camera.position.x+windowWidth/2-1700,windowHeight/2-180);
        text("the pointers given below and start the game. Best of luck captain",camera.position.x+windowWidth/2-1700,windowHeight/2-140);
        fill(147, 58,22)
        text("1. Press the right and left arrow keys to move",camera.position.x+windowWidth/2-1200,windowHeight/2-20);
        text("2. Press space to jump",camera.position.x+windowWidth/2-1200,windowHeight/2+20);
        text("3. Dodge the bullets and the trap",camera.position.x+windowWidth/2-1200,windowHeight/2+60);
        text("4. Collect medikits and cammo boxes to increase your score",camera.position.x+windowWidth/2-1200,windowHeight/2+100);

        //hiding the sprites
       // player.visible = false;
        //ground.visible = false;

        //go to play state
        start.mousePressed(()=>{
            gameState = 1;
            player.x = windowWidth/2-600;
            //player.x = 2600;
            player.y = windowHeight/2+280
            ground.x = windowWidth/2-1000;
        })

    }
    else if(gameState === 1){
        background(bg);

        //if(!keyDown(RIGHT_ARROW) || !keyDown(LEFT_ARROW)){
        //  player.changeAnimation("idle",idle);
       // }


        
        if(cyborg1.isTouching(cargoBox1)){
            cyborg1.changeAnimation("Re walk ",cyborgReAnimation);
            cyborg1.velocityX = 5
        }

        if(cyborg1.isTouching(cargoBox3)){
            cyborg1.changeAnimation("walk",cyborgAnimation);
            cyborg1.velocityX = -5
        }
        
        // camera position 
        camera.position.x = player.x;
        if(camera.position.x+width/2>ground.x+ground.width/2){
            ground.x = camera.position.x;
           

        }
        
        cargoBox1.setCollider("rectangle",0,0,150,100)
        cargoBox2.setCollider("rectangle",0,0,150,100)
        cargoBox3.setCollider("rectangle",0,0,110,100)
        cargoBox4.setCollider("rectangle",0,0,110,130)

        //show the buttons
        start.hide();
        reStart.hide();

        //ground.visible = false;
        
        if(keyDown("space")&&player.y>=300){

            player.velocityY = -12; 
        }

        if(keyDown(RIGHT_ARROW)){
          player.x += 10
          player.changeAnimation("playerImage",playerImage);
        }
        
        if(keyDown(LEFT_ARROW)){
           player.x -= 10
           player.changeAnimation("playerReverseWalk",playerReverseWalk);
        }

        player.velocityY = player.velocityY + 1;

        if(bulletGroup.isTouching(player)||trapGroup.isTouching(player)||player.isTouching(cyborg1)){
            gameState = 2; 
            bulletGroup.setVelocityXEach(0);
            trapGroup.setVelocityXEach(0); 
            fighterjetsGroup.setVelocityXEach(0)

            bulletGroup.setLifetimeEach(-1); 
            trapGroup.setLifetimeEach(-1);
            fighterjetsGroup.setLifetimeEach(-1);

            bulletGroup.destroyEach();
            trapGroup.destroyEach();
            fighterjetsGroup.destroyEach();
            
        }

        player.collide(ground);
        player.collide(cargoBox1);
        player.collide(cargoBox2);
        player.collide(cargoBox3);
        player.collide(cargoBox4);

        Traps();
        Bullet();
        //Tank();
        Fighterjet();
        drawSprites();
        
    }
    else if(gameState === 2){
        background("black");
        //hide the buttons
        start.hide();
        reStart.show();
        //go to start state
        reStart.mousePressed(()=>{
            gameState = 0;
        })
        //text
        strokeWeight(2);
        stroke("blue");
        fill('#39ff14');
        textSize(70);
        textFont('Rockwell');
        text('WW3',camera.position.x+windowWidth/2-900, windowHeight/2-300);
        
        textSize(100)
        fill("red");
        text("GAME OVER",camera.position.x+windowWidth/2-1110,windowHeight/2)


    }

    
   
  
}

function Bullet(){
    if(frameCount%120===0){
      bullet = createSprite(camera.position.x+windowWidth/2,680,30,30);
      bullet.y = Math.round(random(200,680));
      bullet.velocityX = -10
      bullet.addAnimation("bullet",bulletImage);
      bullet.lifetime = windowWidth-1000; 
      bullet.scale = 0.08;
      bulletGroup.add(bullet); 
    }
}

function Traps(){
    if(frameCount%250===0){
      trap = createSprite(camera.position.x+windowWidth/2,720,30,30);
      trap.velocityX = -10
      trap.lifetime = windowWidth-1000; 
      trap.scale = 0.15;

      var select_traps= Math.round(random(1,2))
      if (select_traps===1){
        trap.addImage(trapImage1);
      } else{
        trap.addImage(trapImage2)
      }
      trapGroup.add(trap); 
    }
}
function Fighterjet() {
    //write code here to spawn the clouds
    if (frameCount % 80 === 0) {
      fighterjet = createSprite(camera.position.x+windowWidth/2,100,40,10);
      fighterjet.y = Math.round(random(100,200));
      fighterjet.velocityX = -30;
      fighterjet.scale = 1;

      var select_fighterjet= Math.round(random(1,4))
      if (select_fighterjet===1){
        fighterjet.addImage(fighterjetImage1);
        fighterjet.scale = 0.4
      } else if(select_fighterjet==2){
        fighterjet.addImage(fighterjetImage2);
        fighterjet.scale = 2
      } else if(select_fighterjet==3){
        fighterjet.addImage(fighterjetImage3)
        fighterjet.scale = 2
      } else{
        fighterjet.addImage(fighterjetImage4)
        fighterjet.scale = 1.2
      }
      
      
      fighterjet.lifetime = windowWidth-1000;

      fighterjet.depth = player.depth;
      player.depth = player.depth + 1;
      
      //adding cloud to the group
      fighterjetsGroup.add(fighterjet);
    }
}

function Tank() {
    //write code here to spawn the clouds
    if (frameCount % 300 === 0) {
      tank = createSprite(camera.position.x+windowWidth/2,645,40,10);
      tank.velocityX = -0.1;
      tank.scale = 1;

      var select_tank= Math.round(random(1,4))
      if (select_tank===1){
        tank.addImage(tankImage1);
        tank.scale = 0.5
      } else if(select_tank==2){
        tank.addImage(tankImage2);
        tank.scale = 0.5
      } else if(select_tank==3){
        tank.addImage(tankImage3)
        tank.scale = 1.3
      } else{
        tank.addImage(tankImage4)
        tank.scale = 0.8
      }
      
      
      tank.lifetime = windowWidth-1000;

      tank.depth = player.depth;
      player.depth = player.depth + 1;
      
      //adding cloud to the group
      tankGroup.add(tank);
    }
}


  


