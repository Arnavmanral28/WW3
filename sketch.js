var player;
var playerImage,playerReverseWalk,idle;
var bg;
var ground;
var gameState =0;
var playerLifeLine=3; 
var start;
var bulletGroup;
var bulletImage;
var fighterjetImage;
var fighterjetsGroup;
var score =0;
var costume =0;
var fire = 0;
var fire2 =0;
var fire3 =0;
var fire4 =0;
var num;
var medikitGroup; 
var revivalGroup;
var bullGroup;
var bull2Group;
var fireCount = 4;
var fire2Count = 4;
var bulletCount  = 4;
var bullet2Count = 4; 
var reloadCount = 0;


function preload(){
    playerImage = loadAnimation("Images/walk1.png","Images/walk2.png","Images/walk3.png","Images/walk4.png","Images/walk5.png","Images/walk6.png","Images/walk7.png","Images/walk8.png");
    rePlayerImage = loadAnimation("Images/reverseWalk1.png");
    bg = loadImage("Images/back1.jpg");
    bg2 = loadImage("Images/back2.jpg");

    ninBg1 = loadImage("Images/nBack1.jpg");
    ninBg2 = loadImage("Images/nBack2.jpg");

    space1Image = loadImage("Images/space1.jpg")
    space2Image = loadImage("Images/space2.jpg")

    playerReverseWalk = loadAnimation("Images/reverseWalk1.png","Images/reverseWalk2.png","Images/reverseWalk3.png","Images/reverseWalk4.png","Images/reverseWalk5.png","Images/reverseWalk6.png","Images/reverseWalk7.png","Images/reverseWalk8.png")
    idle = loadAnimation("Images/walk1.png");
    bulletImage = loadAnimation("Images/bullet.png");
    trapImage1 = loadImage("Images/trap.png");
    trapImage2 = loadImage("Images/landmine.png");
    fighterjetImage1 = loadImage("Images/fighterjet1.png");
    fighterjetImage2 = loadImage("Images/fighterjet2.png");
    fighterjetImage3 = loadImage("Images/fighterjet3.png");
    fighterjetImage4 = loadImage("Images/fighterjet4.png");
    cyborgAnimation = loadAnimation("Images/roboWalk1.png","Images/roboWalk2.png","Images/roboWalk3.png","Images/roboWalk4.png","Images/roboWalk5.png","Images/roboWalk6.png","Images/roboWalk7.png","Images/roboWalk8.png")
    cyborgReAnimation = loadAnimation("Images/roboReWalk1.png","Images/roboReWalk2.png","Images/roboReWalk3.png","Images/roboReWalk4.png","Images/roboReWalk5.png","Images/roboReWalk6.png","Images/roboReWalk7.png","Images/roboReWalk8.png")
    boxImage1 = loadImage("Images/cargoBox1.png"); 
    boxImage2 = loadImage("Images/cargoBox2.png"); 
    boxImage3 = loadImage("Images/cargoBox3.png"); 
    boxImage4 = loadImage("Images/cargoBox4.png"); 
    tankImage1 = loadImage("Images/tank1.png");
    tankImage2 = loadImage("Images/tank2.png");
    tankImage3 = loadImage("Images/tank3.png"); 
    tankImage4 = loadImage("Images/tank4.png");   
    finishImage1 = loadImage("Images/flag.png");
    finishImage2 = loadImage("Images/cammo.png");
    finishImage3 = loadImage("Images/nuclear.png");
    medikitImage = loadImage("Images/medikit.png");
    bridgeImage = loadImage("Images/bridge.png");
    portalImage = loadImage("Images/portal.png"); 
    fortImage1 = loadImage("Images/fort.png");
    fortImage2 = loadImage("Images/fort2.png");
    brickImage = loadImage("Images/brick1.png");
    healthImage1 = loadImage("Images/health1.png");
    healthImage2 = loadImage("Images/health2.png");
    healthImage3 = loadImage("Images/health3.png");
    healthImage4 = loadImage("Images/health4.png");
    healthUpgradeImage = loadImage("Images/healthUpgrade.png");

    ninWarriorAnimation = loadAnimation("Images/tile000.png","Images/tile001.png","Images/tile002.png","Images/tile003.png","Images/tile004.png","Images/tile005.png","Images/tile006.png","Images/tile007.png","Images/tile008.png","Images/tile009.png","Images/tile010.png","Images/tile011.png","Images/tile012.png","Images/tile013.png","Images/tile014.png","Images/tile015.png")
    reNinWarriorAnimation = loadAnimation("Images/reTile000.png","Images/reTile001.png","Images/reTile002.png","Images/reTile003.png","Images/reTile004.png","Images/reTile005.png","Images/reTile006.png","Images/reTile007.png","Images/reTile008.png","Images/reTile009.png","Images/reTile010.png","Images/reTile011.png","Images/reTile012.png","Images/reTile013.png","Images/reTile014.png","Images/reTile015.png")

    rover1Image = loadImage("Images/rover1.png")
    rover2Image = loadImage("Images/rover2.png")
    spaceShipImage = loadImage("Images/spaceShips.png")

    s2Image = loadAnimation("Images/s3.png");
    s3Image = loadAnimation("Images/3.1.png");
    s4Image = loadAnimation("Images/idle.png");
    res4Image = loadAnimation("Images/reidle.png");
    
    s5Image = loadAnimation("Images/ri1.png","Images/ri2.png","Images/ri3.png","Images/ri4.png","Images/ri5.png");
    sIdle5Image = loadAnimation("Images/ri1.png");
    res5Image = loadAnimation("Images/reri1.png","Images/reri2.png","Images/reri3.png","Images/reri4.png","Images/reri5.png");

    s2Animation = loadAnimation("Images/2.1.png","Images/2.2.png","Images/2.3.png","Images/2.3.png","Images/2.4.png","Images/2.5.png","Images/2.6.png");
    s3Animation = loadAnimation("Images/3.1.png","Images/3.2.png","Images/3.3.png","Images/3.3.png","Images/3.4.png","Images/3.5.png","Images/3.6.png");
    s4Animation = loadAnimation("Images/n2.png","Images/n3.png","Images/n4.png","Images/n5.png","Images/n6.png","Images/n7.png");
    res5Animation = loadAnimation("Images/rerr10.png","Images/rerr9.png","Images/rerr8.png","Images/rerr7.png","Images/rerr6.png","Images/rerr5.png","Images/rerr4.png","Images/rerr3.png","Images/rerr2.png","Images/rerr1.png");
    res2Animation = loadAnimation("Images/re2.1.png","Images/re2.2.png","Images/re2.3.png","Images/re2.3.png","Images/re2.4.png","Images/re2.5.png","Images/re2.6.png");
    res3Animation = loadAnimation("Images/re3.1.png","Images/re3.2.png","Images/re3.3.png","Images/re3.3.png","Images/re3.4.png","Images/re3.5.png","Images/re3.6.png");
    res4Animation = loadAnimation("Images/ren2.png","Images/ren3.png","Images/ren4.png","Images/ren5.png","Images/ren6.png","Images/ren7.png");
    s5Animation = loadAnimation("Images/rr1.png","Images/rr2.png","Images/rr3.png","Images/rr4.png","Images/rr5.png","Images/rr6.png","Images/rr7.png","Images/rr8.png","Images/rr9.png","Images/rr10.png");
    
    bullet2Image = loadImage("Images/bullet (2).png");
    bullet3Image = loadImage("Images/bullet (3).png");
    bullet4Image = loadImage("Images/bullet (4).png");

    bulletIcon2Image = loadImage("Images/bulletReloadIcon1.png");
    bulletIcon3Image = loadImage("Images/bulletReloadIcon2.png");

    spaceShip3Image = loadImage("Images/spaceships1.png")
    spaceShip4Image = loadImage("Images/spaceships2.png")
    spaceShip5Image = loadImage("Images/spaceships3.png")

    res2Image = loadImage("Images/res3.png");

    stallImage = loadImage("Images/stall.png")
    animalImage = loadImage("Images/animal.png")

    res3Image = loadImage("Images/re3.1.png");

    fireBallImage = loadImage("Images/fireBall.png");
    fireBall2Image = loadImage("Images/fireBall2.png");

    reloadImage = loadImage("Images/bulletReload.png")
    reload2Image = loadImage("Images/bulletReload2.png")

    reloadBulletImage = loadImage("Images/reloadBullet.png")

    lasserImage = loadAnimation("Images/lasserBeam.png")
    knifeImage = loadAnimation("Images/starKnifes.png")

    spikeImage = loadImage("Images/spike.png");

    ammunationImage = loadImage("Images/ammunation.png");

    rar5 = loadAnimation("Images/rar1.png","Images/rar2.png","Images/rar3.png","Images/rar4.png","Images/rar5.png","Images/rar6.png","Images/rar7.png","Images/rar8.png","Images/rar9.png","Images/rar10.png")
    rar = loadAnimation("Images/rar1.png")
    rerar5 = loadAnimation("Images/rerar1.png","Images/rerar2.png","Images/rerar3.png","Images/rerar4.png","Images/rerar5.png","Images/rerar6.png","Images/rerar7.png","Images/rerar8.png","Images/rerar9.png","Images/rerar10.png")
    rerar = loadAnimation("Images/rerar1.png")

    niAnimation = loadAnimation("Images/ni1.png","Images/ni2.png","Images/ni3.png","Images/ni4.png")
    reniAnimation = loadAnimation("Images/reni1.png","Images/reni2.png","Images/reni3.png","Images/reni4.png")

    attackAnimation = loadAnimation("Images/attack1.png","Images/attack2.png","Images/attack3.png","Images/attack4.png","Images/attack5.png")
    reAttackAnimation = loadAnimation("Images/reAttack1.png","Images/reAttack2.png","Images/reAttack3.png","Images/reAttack4.png","Images/reAttack5.png")
}


function setup() {
    createCanvas(windowWidth,windowHeight); 
    //medikitGroup = createGroup();
    //prompt
    num = prompt("Enter Your name");

    fireWall = createSprite(camera.position.x+windowWidth/2-125,650,400,200);
    fireWall.visible = false



    

    //
    bulletGroup = createGroup();
    trapGroup = createGroup();
    fighterjetsGroup = createGroup();
    tankGroup = createGroup();
    medikitGroup = createGroup();
    revivalGroup = createGroup();
    bullGroup = createGroup();
    bull2Group = createGroup();
    fireBallGroup = createGroup();
    fireBall2Group = createGroup();


    wall1 = createSprite(200,200,20,400);
    wall1.visible = false;
    wall2 = createSprite(100,200,20,400)
    wall2.visible = false;


    fort1 = createSprite(14250,350);
    fort1.addImage(fortImage1);   
    fort1.scale = 3

    fort2 = createSprite(15650,350);
    fort2.addImage(fortImage2);   
    fort2.scale = 3

    //ground 
    ground = createSprite(windowWidth/2,windowHeight/2+360,150000000,30);
    ground.shapeColor = "black" ;
    ground.x = width/2

    ground2 = createSprite(windowWidth/2,windowHeight/2+270,15000000,130)
    ground2.shapeColor = "white"
    ground2.visible = false

    ground3 = createSprite(1740,windowHeight/2+150,620,100);
    ground3.shapeColor = "white"
    ground3.visible = false

    ground4 = createSprite(4520,windowHeight/2+160,100,100);
    ground4.shapeColor = "white"
    ground4.visible = false

    ground5 = createSprite(4700,windowHeight/2+100,300,100);
    ground5.shapeColor = "white"
    ground5.visible = false

    ground6 = createSprite(6120,windowHeight/2+130,100,100);
    ground6.shapeColor = "white"
    ground6.visible = false

    ground7 = createSprite(6320,windowHeight/2+200,500,400);
    ground7.shapeColor = "white"
    ground7.visible = false

    ground8 = createSprite(8680,windowHeight/2+180,80,150);
    ground8.shapeColor = "white"
    ground8.visible = false

    ground9 = createSprite(8800,windowHeight/2+280,200,500);
    ground9.shapeColor = "white"
    ground9.visible = false

    ground10 = createSprite(11700,windowHeight/2+120,3300,500);
    ground10.shapeColor = "white"
    ground10.visible = false

    ground11 = createSprite(1100,650,11000,200)
    ground11.visible = false

    ground12 = createSprite(1200,550,300,200)
    ground12.visible = false

    ground13 = createSprite(3520,550,300,200)
    ground13.visible = false

    ground14 = createSprite(5230,550,400,200)
    ground14.visible = false

    ground15 = createSprite(5240,450,150,150)
    ground15.visible = false

    ground16 = createSprite(6600,620,150,600)
    ground16.visible = false

    ground17 = createSprite(7040,620,110,600)
    ground17.visible = false

    ground18 = createSprite(7470,620,110,600)
    ground18.visible = false

    ground19 = createSprite(7940,620,190,600)
    ground19.visible = false

    ground20 = createSprite(13400,650,11000,200)
    ground20.visible = false

    ground21 = createSprite(9100,550,300,200)
    ground21.visible = false

    ground22 = createSprite(12100,550,300,200)
    ground22.visible = false;
    

    //player
    player = createSprite(windowWidth/2-200,windowHeight/2+280,20,20);
    player.addAnimation("player",playerImage);
    player.addAnimation("playerReverseWalk",playerReverseWalk);
    player.addAnimation("idle",idle)
    player.addAnimation("reIdle",rePlayerImage);

    player.addAnimation("s2",s2Animation)
    player.addAnimation("res2",res2Animation)
    player.addAnimation("s2Idle",s2Image)
    player.addAnimation("resS2Idle",res2Image);

    player.addAnimation("s3",s3Animation)
    player.addAnimation("res3",res3Animation)
    player.addAnimation("s3Idle",s3Image)
    player.addAnimation("resS3Idle",res3Image);
    player.addAnimation("ni",niAnimation);
    player.addAnimation("reni",reniAnimation);
    player.addAnimation("attack",attackAnimation);
    player.addAnimation("reAttack",reAttackAnimation);

    player.addAnimation("s4",s4Animation)
    player.addAnimation("res4",res4Animation)
    player.addAnimation("s4Idle",s4Image)
    player.addAnimation("res4Idle",res4Image)

    player.addAnimation("s5",s5Animation)
    player.addAnimation("res5",res5Animation)
    player.addAnimation("s5Idle",s5Image)
    player.addAnimation("res5Idle",res5Image)
    player.addAnimation("sIdle5image",sIdle5Image)
    player.addAnimation("s5rar",rar5)
    player.addAnimation("res5rar",rerar5)
    player.addAnimation("rar",rar)
    player.addAnimation("rerar",rerar)
    //player.scale = 0.6


    //Costumes

    costume1 = createSprite(250,windowHeight/2,50,50);
    costume1.addAnimation("idle",idle)
    costume1.scale = 1

    costume2 = createSprite(550,windowHeight/2+10,50,50);
    costume2.addAnimation("idle",s2Image);
    costume2.scale = 0.50

    costume3 = createSprite(1150,windowHeight/2,50,50);
    costume3.addAnimation("idle",s3Image);
    costume3.scale = 0.65

    costume4 = createSprite(850,windowHeight/2,50,50)
    costume4.addAnimation("idle",s4Image);
    costume4.scale = 2

    costume5 = createSprite(1450,windowHeight/2,50,50)
    costume5.addAnimation("sIdle5image",sIdle5Image)
    costume5.scale = 1.7


    //finish
    finish = createSprite(15000,590,40,40);
    finish.addImage(finishImage1);
    finish.scale = 0.5

    nuclear = createSprite(15165,570);
    nuclear.addImage(finishImage3)
    nuclear.scale = 1
    nuclear.visible = false

    // LEVEL 1 SPRITES

    //cargo
    cargoBox1 = createSprite(1500,680,20,20);
    cargoBox1.addImage(boxImage1);
    
    cargoBox2 = createSprite(1500,570,20,20);
    cargoBox2.addImage(boxImage1);

    cargoBox3 = createSprite(2000,690,20,20);
    cargoBox3.addImage(boxImage2);
    
    cargoBox4 = createSprite(2000,580,20,20);
    cargoBox4.addImage(boxImage2); 
    //
    cargoBox5 = createSprite(4420,690,20,20);
    cargoBox5.addImage(boxImage3);
    cargoBox5.scale = 0.8

    cargoBox6 = createSprite(4515,690,20,20);
    cargoBox6.addImage(boxImage3);
    cargoBox6.scale = 0.8

    cargoBox7 = createSprite(4515,595,20,20);
    cargoBox7.addImage(boxImage3);
    cargoBox7.scale = 0.8

    cargoBox8 = createSprite(4610,690,20,20);
    cargoBox8.addImage(boxImage3);
    cargoBox8.scale = 0.8
    

    cargoBox9 = createSprite(4610,595,20,20);
    cargoBox9.addImage(boxImage3);
    cargoBox9.scale = 0.8
    

    cargoBox10 = createSprite(4610,500,20,20);
    cargoBox10.addImage(boxImage3);
    cargoBox10.scale = 0.8
    

    cargoBox11 = createSprite(4705,690,20,20);
    cargoBox11.addImage(boxImage3);
    cargoBox11.scale = 0.8;

    cargoBox12 = createSprite(4705,595,20,20);
    cargoBox12.addImage(boxImage3);
    cargoBox12.scale = 0.8
    
    cargoBox13 = createSprite(4705,500,20,20);
    cargoBox13.addImage(boxImage3);
    cargoBox13.scale = 0.8

    cargoBox14 = createSprite(4800,690,20,20);
    cargoBox14.addImage(boxImage3);
    cargoBox14.scale = 0.8

    cargoBox15 = createSprite(4800,595,20,20);
    cargoBox15.addImage(boxImage3);
    cargoBox15.scale = 0.8

    cargoBox16 = createSprite(4800,500,20,20);
    cargoBox16.addImage(boxImage3);
    cargoBox16.scale = 0.8

    cargoBox17 = createSprite(6002,700,20,20);
    cargoBox17.addImage(boxImage4);
    cargoBox17.scale = 0.9;

    cargoBox18 = createSprite(6105,700,20,20);
    cargoBox18.addImage(boxImage4);
    cargoBox18.scale = 0.9;

    cargoBox19 = createSprite(6105,600,20,20);
    cargoBox19.addImage(boxImage4);
    cargoBox19.scale = 0.9;

    cargoBox20 = createSprite(6208,700,20,20);
    cargoBox20.addImage(boxImage4);
    cargoBox20.scale = 0.9;

    cargoBox21 = createSprite(6208,600,20,20);
    cargoBox21.addImage(boxImage4);
    cargoBox21.scale = 0.9;

    cargoBox22 = createSprite(6208,500,20,20);
    cargoBox22.addImage(boxImage4);
    cargoBox22.scale = 0.9;
    
    cargoBox23 = createSprite(6311,700,20,20);
    cargoBox23.addImage(boxImage4);
    cargoBox23.scale = 0.9;

    cargoBox24 = createSprite(6311,600,20,20);
    cargoBox24.addImage(boxImage4);
    cargoBox24.scale = 0.9;

    cargoBox25 = createSprite(6311,500,20,20);
    cargoBox25.addImage(boxImage4);
    cargoBox25.scale = 0.9;

    cargoBox26 = createSprite(6414,700,20,20);
    cargoBox26.addImage(boxImage4);
    cargoBox26.scale = 0.9;

    cargoBox27 = createSprite(6414,600,20,20);
    cargoBox27.addImage(boxImage4);
    cargoBox27.scale = 0.9;

    cargoBox28 = createSprite(6414,500,20,20);
    cargoBox28.addImage(boxImage4);
    cargoBox28.scale = 0.9;

    cargoBox29 = createSprite(6517,700,20,20);
    cargoBox29.addImage(boxImage4);
    cargoBox29.scale = 0.9;

    cargoBox30 = createSprite(6517,600,20,20);
    cargoBox30.addImage(boxImage4);
    cargoBox30.scale = 0.9;

    cargoBox31 = createSprite(6620,700,20,20);
    cargoBox31.addImage(boxImage4);
    cargoBox31.scale = 0.9;

    cargoBox32 = createSprite(8700,680,20,20);
    cargoBox32.addImage(boxImage2);
    cargoBox32.scale = 1.2;

    cargoBox33 = createSprite(8835,680,20,20);
    cargoBox33.addImage(boxImage2);
    cargoBox33.scale = 1.2;

    cargoBox34 = createSprite(8767.5,545,20,20);
    cargoBox34.addImage(boxImage2);
    cargoBox34.scale = 1.2;
//////////////////////////////////////////////////////////////////////////////////
    cargoBox35 = createSprite(10000,678,20,20);
    cargoBox35.addImage(boxImage1);
    cargoBox35.scale = 1;

    cargoBox36 = createSprite(10142,678,20,20);
    cargoBox36.addImage(boxImage1);
    cargoBox36.scale = 1;

    cargoBox37 = createSprite(10142,568,20,20);
    cargoBox37.addImage(boxImage1);
    cargoBox37.scale = 1;

    cargoBox38 = createSprite(10284,678,20,20);
    cargoBox38.addImage(boxImage1);
    cargoBox38.scale = 1;

    cargoBox39 = createSprite(10284,568,20,20);
    cargoBox39.addImage(boxImage1);
    cargoBox39.scale = 1;

    cargoBox40 = createSprite(10284,458,20,20);
    cargoBox40.addImage(boxImage1);
    cargoBox40.scale = 1;

    cargoBox41 = createSprite(10426,678,20,20);
    cargoBox41.addImage(boxImage1);
    cargoBox41.scale = 1;

    cargoBox42 = createSprite(10426,568,20,20);
    cargoBox42.addImage(boxImage1);
    cargoBox42.scale = 1;

    cargoBox43 = createSprite(10426,458,20,20);
    cargoBox43.addImage(boxImage1);
    cargoBox43.scale = 1;

    cargoBox44 = createSprite(10568,458)
    cargoBox44.addImage(boxImage1);
    cargoBox44.scale = 1;

    cargoBox45 = createSprite(10568,568)
    cargoBox45.addImage(boxImage1);
    cargoBox45.scale = 1;

    cargoBox46 = createSprite(10568,678)
    cargoBox46.addImage(boxImage1);
    cargoBox46.scale = 1;
    //////////////////////////////////////////////////////////////////////////

    cargoBox47 = createSprite(11285,458)
    cargoBox47.addImage(boxImage1);
    cargoBox47.scale = 1;

    cargoBox48 = createSprite(11285,568)
    cargoBox48.addImage(boxImage1);
    cargoBox48.scale = 1;

    cargoBox49 = createSprite(11285,678)
    cargoBox49.addImage(boxImage1);
    cargoBox49.scale = 1;

    cargoBox50 = createSprite(11427,458)
    cargoBox50.addImage(boxImage1);
    cargoBox50.scale = 1;

    cargoBox51 = createSprite(11427,568)
    cargoBox51.addImage(boxImage1);
    cargoBox51.scale = 1;

    cargoBox52 = createSprite(11427,678)
    cargoBox52.addImage(boxImage1);
    cargoBox52.scale = 1;

    cargoBox53 = createSprite(11569,458)
    cargoBox53.addImage(boxImage1);
    cargoBox53.scale = 1;

    cargoBox54 = createSprite(11569,568)
    cargoBox54.addImage(boxImage1);
    cargoBox54.scale = 1;

    cargoBox55 = createSprite(11569,678)
    cargoBox55.addImage(boxImage1);
    cargoBox55.scale = 1;
    
    cargoBox56 = createSprite(11711,458)
    cargoBox56.addImage(boxImage1);
    cargoBox56.scale = 1;

    cargoBox57 = createSprite(11711,568)
    cargoBox57.addImage(boxImage1);
    cargoBox57.scale = 1;

    cargoBox58 = createSprite(11711,678)
    cargoBox58.addImage(boxImage1);
    cargoBox58.scale = 1;

    cargoBox59 = createSprite(11853,458)
    cargoBox59.addImage(boxImage1);
    cargoBox59.scale = 1;

    cargoBox60 = createSprite(11853,568)
    cargoBox60.addImage(boxImage1);
    cargoBox60.scale = 1;

    cargoBox61 = createSprite(11853,678)
    cargoBox61.addImage(boxImage1);
    cargoBox61.scale = 1;
/////////////////////////////////////
    cargoBox62 = createSprite(12565,458)
    cargoBox62.addImage(boxImage1);
    cargoBox62.scale = 1;

    cargoBox63 = createSprite(12565,568)
    cargoBox63.addImage(boxImage1);
    cargoBox63.scale = 1;

    cargoBox64 = createSprite(12565,678)
    cargoBox64.addImage(boxImage1);
    cargoBox64.scale = 1;

    cargoBox65 = createSprite(12707,458)
    cargoBox65.addImage(boxImage1);
    cargoBox65.scale = 1;

    cargoBox66 = createSprite(12707,568)
    cargoBox66.addImage(boxImage1);
    cargoBox66.scale = 1;
    
    cargoBox67 = createSprite(12707,678)
    cargoBox67.addImage(boxImage1);
    cargoBox67.scale = 1;

    cargoBox68 = createSprite(12849,458)
    cargoBox68.addImage(boxImage1);
    cargoBox68.scale = 1;
    
    cargoBox69 = createSprite(12849,568)
    cargoBox69.addImage(boxImage1);
    cargoBox69.scale = 1;

    cargoBox70 = createSprite(12849,678)
    cargoBox70.addImage(boxImage1);
    cargoBox70.scale = 1;

    cargoBox71 = createSprite(12991,458)
    cargoBox71.addImage(boxImage1);
    cargoBox71.scale = 1;

    cargoBox72 = createSprite(12991,568)
    cargoBox72.addImage(boxImage1);
    cargoBox72.scale = 1;

    cargoBox73 = createSprite(12991,678)
    cargoBox73.addImage(boxImage1);
    cargoBox73.scale = 1;

    cargoBox74 = createSprite(13133,568)
    cargoBox74.addImage(boxImage1);
    cargoBox74.scale = 1;

    cargoBox75 = createSprite(13133,678)
    cargoBox75.addImage(boxImage1);
    cargoBox75.scale = 1;

    cargoBox76 = createSprite(13275,678)
    cargoBox76.addImage(boxImage1);
    cargoBox76.scale = 1;

    //cyborg
    cyborg1 = createSprite(1800,665,30,30);
    if(costume===3){
      cyborg1.velocityX = -5
    } else{
      cyborg1.velocityX = 5
    }
    cyborg1.addAnimation("cyborgWalk",cyborgAnimation);
    cyborg1.addAnimation("reWalk",cyborgReAnimation)
    cyborg1.scale = 0.8

    cyborg1.addAnimation("ninW",ninWarriorAnimation);
    cyborg1.addAnimation("reninW",reNinWarriorAnimation)
    cyborg1.scale = 1.2
      

    cyborg2 = createSprite(5500,665,30,30);
    if(costume===3){
      cyborg2.velocityX = -5
    } else{
      cyborg2.velocityX = 5
    }
    cyborg2.addAnimation("cyborgWalk",cyborgAnimation);
    cyborg2.addAnimation("reWalk",cyborgReAnimation)
    cyborg2.scale = 0.8

    cyborg2.addAnimation("ninW",ninWarriorAnimation);
    cyborg2.addAnimation("reninW",reNinWarriorAnimation)
    cyborg2.scale = 1.2
    
  
    cyborg3 = createSprite(11000,310,30,30);
    if(costume===3){
      cyborg3.velocityX = -5
    } else{
      cyborg3.velocityX = 5
    }
    cyborg3.addAnimation("cyborgWalk",cyborgAnimation);
    cyborg3.addAnimation("reWalk",cyborgReAnimation)
    cyborg3.scale = 0.8

    cyborg3.addAnimation("ninW",ninWarriorAnimation);
    cyborg3.addAnimation("reninW",reNinWarriorAnimation)
    cyborg3.scale = 1.2
   

    cyborg4 = createSprite(12080,310,30,30);
    if(costume===3){
      cyborg4.velocityX = -5
    } else{
      cyborg4.velocityX = 5
    }
    cyborg4.addAnimation("cyborgWalk",cyborgAnimation);
    cyborg4.addAnimation("reWalk",cyborgReAnimation)
    cyborg4.scale = 0.8

    cyborg4.addAnimation("ninW",ninWarriorAnimation);
    cyborg4.addAnimation("reninW",reNinWarriorAnimation)
    cyborg4.scale = 1.2

    
    cyborg5 = createSprite(2500,665,30,30);
    if(costume===3){
      cyborg5.velocityX = -5
    } else{
      cyborg5.velocityX = 5
    }
    cyborg5.addAnimation("cyborgWalk",cyborgAnimation);
    cyborg5.addAnimation("reWalk",cyborgReAnimation)
    cyborg5.scale = 0.8

    cyborg5.addAnimation("ninW",ninWarriorAnimation);
    cyborg5.addAnimation("reninW",reNinWarriorAnimation)
    cyborg5.scale = 1.2

    cyborg6 = createSprite(4000,665,30,30);
    if(costume===3){
      cyborg6.velocityX = -5
    } else{
      cyborg6.velocityX = 5
    }
    cyborg6.addAnimation("cyborgWalk",cyborgAnimation);
    cyborg6.addAnimation("reWalk",cyborgReAnimation)
    cyborg6.scale = 0.8

    cyborg6.addAnimation("ninW",ninWarriorAnimation);
    cyborg6.addAnimation("reninW",reNinWarriorAnimation)
    cyborg6.scale = 1.2

    cyborg7 = createSprite(6900,665,30,30)
    if(costume===3){
      cyborg7.velocityX = -5
    } else{
      cyborg7.velocityX = 5
    }
    cyborg7.addAnimation("cyborgWalk",cyborgAnimation)
    cyborg7.addAnimation("reWalk",cyborgReAnimation)
    cyborg7.scale = 0.8

    cyborg7.addAnimation("ninW",ninWarriorAnimation);
    cyborg7.addAnimation("reninW",reNinWarriorAnimation)
    cyborg7.scale = 1.2

    cyborg8 = createSprite(8200,665,30,30)
    if(costume===3){
      cyborg8.velocityX = -5
    } else{
      cyborg8.velocityX = 5
    }
    cyborg8.addAnimation("cyborgWalk",cyborgAnimation)
    cyborg8.addAnimation("reWalk",cyborgReAnimation)
    cyborg8.scale = 0.8

    cyborg8.addAnimation("ninW",ninWarriorAnimation);
    cyborg8.addAnimation("reninW",reNinWarriorAnimation)
    cyborg8.scale = 1.2

    cyborg9 = createSprite(9350,665,30,30)
    if(costume===3){
      cyborg9.velocityX = -5
    } else{
      cyborg9.velocityX = 5
    }
    cyborg9.addAnimation("cyborgWalk",cyborgAnimation)
    cyborg9.addAnimation("reWalk",cyborgReAnimation)
    cyborg9.scale = 0.8

    cyborg9.addAnimation("ninW",ninWarriorAnimation);
    cyborg9.addAnimation("reninW",reNinWarriorAnimation)
    cyborg9.scale = 1.2

    cyborg10 = createSprite(1800,665,30,30)
    cyborg10.addAnimation("cyborgWalk",cyborgAnimation)
    cyborg10.addAnimation("reWalk",cyborgReAnimation)
    cyborg10.scale = 0.8
    if(costume===3){
      cyborg10.velocityX = -15
    } else{
      cyborg10.velocityX = 15
    }

    cyborg10.addAnimation("ninW",ninWarriorAnimation);
    cyborg10.addAnimation("reninW",reNinWarriorAnimation)
    cyborg10.scale = 1.2

    cyborg11 = createSprite(2800,665,30,30)
    cyborg11.addAnimation("cyborgWalk",cyborgAnimation)
    cyborg11.addAnimation("reWalk",cyborgReAnimation)
    cyborg11.scale = 0.8
    if(costume===3){
      cyborg11.velocityX = -15
    } else{
      cyborg11.velocityX = 15
    }

    cyborg11.addAnimation("ninW",ninWarriorAnimation);
    cyborg11.addAnimation("reninW",reNinWarriorAnimation)
    cyborg11.scale = 1.2

    cyborg12 = createSprite(4000,665,30,30)
    cyborg12.addAnimation("cyborgWalk",cyborgAnimation)
    cyborg12.addAnimation("reWalk",cyborgReAnimation)
    cyborg12.scale = 0.8
    if(costume===3){
      cyborg12.velocityX = -15
    } else{
      cyborg12.velocityX = 15
    }

    cyborg12.addAnimation("ninW",ninWarriorAnimation);
    cyborg12.addAnimation("reninW",reNinWarriorAnimation)
    cyborg12.scale = 1.2

    cyborg13 = createSprite(5800,665,30,30)
    cyborg13.addAnimation("cyborgWalk",cyborgAnimation)
    cyborg13.addAnimation("reWalk",cyborgReAnimation)
    cyborg13.scale = 0.8
    if(costume===3){
      cyborg13.velocityX = -15
    } else{
      cyborg13.velocityX = 15
    }

    cyborg13.addAnimation("ninW",ninWarriorAnimation);
    cyborg13.addAnimation("reninW",reNinWarriorAnimation)
    cyborg13.scale = 1.2

    cyborg14 = createSprite(8600,665,30,30)
    cyborg14.addAnimation("cyborgWalk",cyborgAnimation)
    cyborg14.addAnimation("reWalk",cyborgReAnimation)
    cyborg14.scale = 0.8
    if(costume===3){
      cyborg14.velocityX = -15
    } else{
      cyborg14.velocityX = 15
    }

    cyborg14.addAnimation("ninW",ninWarriorAnimation);
    cyborg14.addAnimation("reninW",reNinWarriorAnimation)
    cyborg14.scale = 1.2

    cyborg15 = createSprite(9800,665,30,30)
    cyborg15.addAnimation("cyborgWalk",cyborgAnimation)
    cyborg15.addAnimation("reWalk",cyborgReAnimation)
    cyborg15.scale = 0.8
    if(costume===3){
      cyborg15.velocityX = -15
    } else{
      cyborg15.velocityX = 15
    }

    cyborg15.addAnimation("ninW",ninWarriorAnimation);
    cyborg15.addAnimation("reninW",reNinWarriorAnimation)
    cyborg15.scale = 1.2

    cyborg16 = createSprite(11200,665,30,30)
    cyborg16.addAnimation("cyborgWalk",cyborgAnimation)
    cyborg16.addAnimation("reWalk",cyborgReAnimation)
    cyborg16.scale = 0.8
    if(costume===3){
      cyborg16.velocityX = -15
    } else{
      cyborg16.velocityX = 15
    }

    cyborg16.addAnimation("ninW",ninWarriorAnimation);
    cyborg16.addAnimation("reninW",reNinWarriorAnimation)
    cyborg16.scale = 1.2
    



    //wall 
    tile1 = createSprite(2050,600,10,1000)
    tile1.visible = false;

    tile2 = createSprite(3300,600,10,1000)
    tile2.visible = false;

    tile3 = createSprite(4380,600,10,1000)
    tile3.visible = false;

    tile4 = createSprite(6700,600,10,1000)
    tile4.visible = false;

    tile5 = createSprite(7700,600,10,1000)
    tile5.visible = false;

    tile6 = createSprite(8650,600,10,1000)
    tile6.visible = false;

    tile7 = createSprite(8900,600,10,1000)
    tile7.visible = false;

    tile8 = createSprite(9930,600,10,1000)
    tile8.visible = false;

    // level 2 tile 
    tile9 = createSprite(1360,600,10,1000)
    tile9.visible = false;

    tile10 = createSprite(2400,600,10,1000)
    tile10.visible = false;

    tile11 = createSprite(3370,600,10,1000)
    tile11.visible = false;

    tile12 = createSprite(3800,600,10,1000)
    tile12.visible = false;

    tile13 = createSprite(4950,600,10,1000)
    tile13.visible = false;

    tile14 = createSprite(5530,600,10,1000)
    tile14.visible = false;

    tile15 = createSprite(6550,600,10,1000)
    tile15.visible = false;

    tile16 = createSprite(7960,600,10,1000)
    tile16.visible = false;

    tile17 = createSprite(8950,600,10,1000)
    tile17.visible = false;

    tile18 = createSprite(9300,600,10,1000)
    tile18.visible = false;

    tile19 = createSprite(10600,600,10,1000)
    tile19.visible = false;

    tile20 = createSprite(11950,600,10,1000)
    tile20.visible = false;

    //spike
    spike1 = createSprite(6750,680);
    spike1.addImage(spikeImage)
    spike1.scale = 0.2

    spike2 = createSprite(6900,680);
    spike2.addImage(spikeImage)
    spike2.scale = 0.2

    spike3 = createSprite(7180,680);
    spike3.addImage(spikeImage)
    spike3.scale = 0.2

    spike4 = createSprite(7330,680);
    spike4.addImage(spikeImage)
    spike4.scale = 0.2 

    spike5 = createSprite(7610,680);
    spike5.addImage(spikeImage)
    spike5.scale = 0.2

    spike6 = createSprite(7760,680);
    spike6.addImage(spikeImage)
    spike6.scale = 0.2 

    //bridge
    bridge1 = createSprite(10930,315,20,20);
    bridge1.addImage(bridgeImage);
    bridge1.scale = 2;

    bridge2 = createSprite(12210,315,20,20);
    bridge2.addImage(bridgeImage);
    bridge2.scale = 2;

    //ground
    b1 = createSprite(10920,395,600,10)
    b1.shapeColor = "black";
    b1.visible = false;

    b2 = createSprite(12200,395,600,10)
    b2.shapeColor = "black";
    b2.visible = false;

     //walls
     w1 = createSprite(10660,350,10,80);
     w1.shapeColor = "black"
     w1.visible = false;

     w2 = createSprite(11200,350,10,80);
     w2.shapeColor = "black"
     w2.visible = false;

     w3 = createSprite(11940,350,10,80);
     w3.shapeColor = "black"
     w3.visible = false;

     w4 = createSprite(12480,350,10,80);
     w4.shapeColor = "black"
     w4.visible = false;

     w5 = createSprite(17600,windowHeight/2,200,windowHeight);
     w5.shapeColor = "black"
     w5.visible = false;

     w6 = createSprite(-100,windowHeight/2,200,windowHeight);
     w6.shapeColor = "black"
     w6.visible = false;

    health = createSprite(0,60,20,20);
    health.addImage(healthImage1);

    




    //Level 2 setup
    box1 = createSprite(1000,680,100,100)
    box1.addImage(boxImage1)

    box2 = createSprite(1140,680,100,100)
    box2.addImage(boxImage1)

    box3 = createSprite(1140,570,100,100)
    box3.addImage(boxImage1)

    box4 = createSprite(1280,680,100,100)
    box4.addImage(boxImage1)

    box5 = createSprite(1280,570,100,100)
    box5.addImage(boxImage1)

    box6 = createSprite(3440,680,100,100)
    box6.addImage(boxImage1)

    box7 = createSprite(3440,570,100,100)
    box7.addImage(boxImage1)

    box8 = createSprite(3580,680,100,100)
    box8.addImage(boxImage1)

    box9 = createSprite(3580,570,100,100)
    box9.addImage(boxImage1)

    box10 = createSprite(3720,680,100,100)
    box10.addImage(boxImage1)

    box11 = createSprite(5000,680,100,100);
    box11.addImage(boxImage2);

    box12 = createSprite(5115,680,100,100);
    box12.addImage(boxImage2);

    box13 = createSprite(5230,680,100,100);
    box13.addImage(boxImage2);

    box14 = createSprite(5345,680,100,100);
    box14.addImage(boxImage2);

    box15 = createSprite(5460,680,100,100);
    box15.addImage(boxImage2);

    box16 = createSprite(5115,570,100,100);
    box16.addImage(boxImage2);

    box17 = createSprite(5230,570,100,100);
    box17.addImage(boxImage2);

    box18 = createSprite(5345,570,100,100);
    box18.addImage(boxImage2);

    box19 = createSprite(5230,460,100,100);
    box19.addImage(boxImage2);

    box20 = createSprite(6600,700,100,100);
    box20.addImage(boxImage4);
  
    box21 = createSprite(6600,590,100,100);
    box21.addImage(boxImage4);

    box22 = createSprite(6600,480,100,100);
    box22.addImage(boxImage4);

    box23 = createSprite(7030,700,100,100);
    box23.addImage(boxImage4);

    box24 = createSprite(7030,590,100,100);
    box24.addImage(boxImage4);

    box25 = createSprite(7030,480,100,100);
    box25.addImage(boxImage4);

    box26 = createSprite(7460,700,100,100);
    box26.addImage(boxImage4);

    box27 = createSprite(7460,590,100,100);
    box27.addImage(boxImage4);

    box28 = createSprite(7460,480,100,100);
    box28.addImage(boxImage4);

    box29 = createSprite(7890,700,100,100);
    box29.addImage(boxImage4);

    box30 = createSprite(7890,590,100,100);
    box30.addImage(boxImage4);

    box31 = createSprite(7890,480,100,100);
    box31.addImage(boxImage4);

    box32= createSprite(9000,680,100,100);
    box32.addImage(boxImage3)

    box33= createSprite(9115,680,100,100);
    box33.addImage(boxImage3)

    box34 = createSprite(9230,680,100,100);
    box34.addImage(boxImage3);

    box35 = createSprite(9115,570,100,100);
    box35.addImage(boxImage3);

    box36 = createSprite(12000,680,100,100);
    box36.addImage(boxImage3)

    box37 = createSprite(12115,680,100,100);
    box37.addImage(boxImage3)

    box38 = createSprite(12230,680,100,100);
    box38.addImage(boxImage3);

    box39 = createSprite(12115,570,100,100);
    box39.addImage(boxImage3);
    
    //tank
    tank1 = createSprite(3000,645);
    tank1.addImage(tankImage1);
    tank1.scale = 0.5;
    tank1.depth = player.depth;
    player.depth +=1;

    tank2 = createSprite(5500,622);
    tank2.addImage(tankImage3);
    tank2.scale = 1.5;
    tank2.depth = player.depth;
    player.depth +=1;

    tank3 = createSprite(8000,622);
    tank3.addImage(tankImage4);
    tank3.scale = 1;
    tank3.depth = player.depth;
    player.depth +=1;


    //reload option 
    reloadOption = createSprite(600,720,200,200);
    reloadOption.addImage(reloadImage);
    reloadOption.scale = 0.25

    reload2 = createSprite(615,750,200,200);
    reload2.addImage(reloadBulletImage);
    reload2.scale = 0.3
    reload2.visble = false;

    reload3 = createSprite(630,750,200,200);
    reload3.addImage(reloadBulletImage);
    reload3.scale = 0.3
    reload3.visble = false;

    reload4 = createSprite(645,750,200,200);
    reload4.addImage(reloadBulletImage);
    reload4.scale = 0.3
    reload4.visble = false;

    reload5 = createSprite(660,750,200,200);
    reload5.addImage(reloadBulletImage);
    reload5.scale = 0.3
    reload5.visble = false;

    



    //c1 
    c1 = createButton("Select");
    c1.position(camera.position.x+windowWidth/2-690, windowHeight/2+150);
    c1.style('background-color', color(17, 255, 0));
    c1.style('font-size', '40px');
    c1.style('font-family', 'Architects Daughter');
    c1.style('border-radius','5px');
    c1.style('border-width','10px');
    c1.style('border-color','white');
    c1.style('border-style','outset double outset double');

    c2 = createButton("Select");
    c2.position(camera.position.x+windowWidth/2-390, windowHeight/2+150);
    c2.style('background-color', color(17, 255, 0));
    c2.style('font-size', '40px');
    c2.style('font-family', 'Architects Daughter');
    c2.style('border-radius','5px');
    c2.style('border-width','10px');
    c2.style('border-color','white');
    c2.style('border-style','outset double outset double');

    c3 = createButton("Select");
    c3.position(camera.position.x+windowWidth/2-80, windowHeight/2+150);
    c3.style('background-color', color(17, 255, 0));
    c3.style('font-size', '40px');
    c3.style('font-family', 'Architects Daughter');
    c3.style('border-radius','5px');                           
    c3.style('border-width','10px');
    c3.style('border-color','white');
    c3.style('border-style','outset double outset double');

    c4 = createButton("Select");
    c4.position(camera.position.x+windowWidth/2+225, windowHeight/2+150);
    c4.style('background-color', color(17, 255, 0));
    c4.style('font-size', '40px');
    c4.style('font-family', 'Architects Daughter');
    c4.style('border-radius','5px');
    c4.style('border-width','10px');
    c4.style('border-color','white');
    c4.style('border-style','outset double outset double');

    c5 = createButton("Select");
    c5.position(camera.position.x+windowWidth/2+540, windowHeight/2+150);
    c5.style('background-color', color(17, 255, 0));
    c5.style('font-size', '40px');
    c5.style('font-family', 'Architects Daughter');
    c5.style('border-radius','5px');
    c5.style('border-width','10px');
    c5.style('border-color','white');
    c5.style('border-style','outset double outset double');

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

    //level 2 start button
    start2 = createButton("Let's Start");
    start2.position(camera.position.x+windowWidth/2-90, windowHeight/2+200);
    start2.style('background-color', color(17, 255, 0));
    start2.style('font-size', '40px');
    start2.style('font-family', 'Architects Daughter');
    start2.style('border-radius','40px');
    start2.style('border-width','10px');
    start2.style('border-color','white');
    start2.style('border-style','outset double outset double');

    //restart button
    reStart = createButton("Press to Play Again");
    reStart.position(camera.position.x+windowWidth/2-180, windowHeight/2+200);
    reStart.style('background-color', color(17, 255, 0));
    reStart.style('font-size', '40px');
    reStart.style('font-family', 'Architects Daughter');
    reStart.style('border-radius','40px');
    reStart.style('border-width','10px');
    reStart.style('border-color','white');
    reStart.style('border-style','outset double outset double');

}

function draw() {
    
    if(gameState===0){

      background("black")

      fort1.visible = false
      fort2.visible = false

      nuclear.visible = false;

      tank1.visible = false
      tank2.visible = false
      tank3.visible = false

      player.visible = false

      reload2.visible = false;
      reload3.visible = false;
      reload4.visible = false;
      reload5.visible = false;

      costume1.visible = true
      costume2.visible = true
      costume3.visible = true
      costume4.visible = true
      costume5.visible = true

      health.visible = false

      ground.visible = false

      cargoBox1.visible = false
      cargoBox2.visible = false
      cargoBox3.visible = false
      cargoBox4.visible = false
      cargoBox5.visible = false
      cargoBox6.visible = false
      cargoBox7.visible = false
      cargoBox8.visible = false
      cargoBox9.visible = false
      cargoBox10.visible = false
      cargoBox11.visible = false
      cargoBox12.visible = false
      cargoBox13.visible = false
      cargoBox14.visible = false
      cargoBox15.visible = false
      cargoBox16.visible = false
      cargoBox17.visible = false
      cargoBox18.visible = false
      cargoBox19.visible = false
      cargoBox20.visible = false
      cargoBox21.visible = false
      cargoBox22.visible = false
      cargoBox23.visible = false
      cargoBox24.visible = false
      cargoBox25.visible = false
      cargoBox26.visible = false
      cargoBox27.visible = false
      cargoBox28.visible = false
      cargoBox29.visible = false
      cargoBox30.visible = false
      cargoBox31.visible = false
      cargoBox32.visible = false
      cargoBox33.visible = false
      cargoBox34.visible = false
      cargoBox35.visible = false
      cargoBox36.visible = false
      cargoBox37.visible = false
      cargoBox38.visible = false
      cargoBox39.visible = false
      cargoBox40.visible = false
      cargoBox41.visible = false
      cargoBox42.visible = false
      cargoBox43.visible = false
      cargoBox44.visible = false
      cargoBox45.visible = false
      cargoBox46.visible = false
      cargoBox47.visible = false
      cargoBox48.visible = false
      cargoBox49.visible = false
      cargoBox50.visible = false
      cargoBox51.visible = false
      cargoBox52.visible = false
      cargoBox53.visible = false
      cargoBox54.visible = false
      cargoBox55.visible = false
      cargoBox56.visible = false
      cargoBox57.visible = false
      cargoBox58.visible = false
      cargoBox59.visible = false
      cargoBox60.visible = false
      cargoBox60.visible = false
      cargoBox61.visible = false
      cargoBox62.visible = false
      cargoBox63.visible = false
      cargoBox64.visible = false
      cargoBox65.visible = false
      cargoBox66.visible = false
      cargoBox67.visible = false
      cargoBox68.visible = false
      cargoBox69.visible = false
      cargoBox70.visible = false
      cargoBox71.visible = false
      cargoBox72.visible = false
      cargoBox73.visible = false
      cargoBox74.visible = false
      cargoBox75.visible = false
      cargoBox76.visible = false

      box1.visible = false
      box2.visible = false
      box3.visible = false
      box4.visible = false
      box5.visible = false
      box6.visible = false
      box7.visible = false
      box8.visible = false
      box9.visible = false
      box10.visible = false
      box11.visible = false
      box12.visible = false
      box13.visible = false
      box14.visible = false
      box15.visible = false
      box16.visible = false
      box17.visible = false
      box18.visible = false
      box19.visible = false
      box20.visible = false
      box21.visible = false
      box22.visible = false
      box23.visible = false
      box24.visible = false
      box25.visible = false
      box26.visible = false
      box27.visible = false
      box28.visible = false
      box29.visible = false
      box30.visible = false
      box31.visible = false
      box32.visible = false
      box33.visible = false
      box34.visible = false
      box35.visible = false
      box36.visible = false
      box37.visible = false
      box38.visible = false
      box39.visible = false

      cyborg1.visible = false
      cyborg2.visible = false
      cyborg3.visible = false
      cyborg4.visible = false
      cyborg5.visible = false
      cyborg6.visible = false
      cyborg7.visible = false
      cyborg8.visible = false
      cyborg9.visible = false

      finish.visible = false

      bridge1.visible = false
      bridge2.visible = false

      start.hide()
      reStart.hide()
      start2.hide();
      c1.show();
      c2.show();
      c3.show();
      c4.show();
      c5.show();


    c1.mousePressed(()=>{
        gameState = 1;
        costume = 1
        cyborg1.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg1.changeAnimation("reWalk",cyborgReAnimation);
        cyborg1.scale = 0.8

        cyborg2.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg2.changeAnimation("reWalk",cyborgReAnimation)
        cyborg2.scale = 0.8

        cyborg3.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg3.changeAnimation("reWalk",cyborgReAnimation)
        cyborg3.scale = 0.8

        cyborg4.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg4.changeAnimation("reWalk",cyborgReAnimation)
        cyborg4.scale = 0.8

        cyborg5.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg5.changeAnimation("reWalk",cyborgReAnimation)
        cyborg5.scale = 0.8

        cyborg6.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg6.changeAnimation("reWalk",cyborgReAnimation)
        cyborg6.scale = 0.8

        cyborg7.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg7.changeAnimation("reWalk",cyborgReAnimation)
        cyborg7.scale = 0.8

        cyborg8.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg8.changeAnimation("reWalk",cyborgReAnimation)
        cyborg8.scale = 0.8

        cyborg9.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg9.changeAnimation("reWalk",cyborgReAnimation)
        cyborg9.scale = 0.8

        cyborg10.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg10.changeAnimation("reWalk",cyborgReAnimation);
        cyborg10.scale = 0.8

        cyborg11.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg11.changeAnimation("reWalk",cyborgReAnimation)
        cyborg11.scale = 0.8

        cyborg12.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg12.changeAnimation("reWalk",cyborgReAnimation)
        cyborg12.scale = 0.8

        cyborg13.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg13.changeAnimation("reWalk",cyborgReAnimation)
        cyborg13.scale = 0.8

        cyborg14.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg14.changeAnimation("reWalk",cyborgReAnimation)
        cyborg14.scale = 0.8

        cyborg15.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg15.changeAnimation("reWalk",cyborgReAnimation)
        cyborg15.scale = 0.8

        cyborg16.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg16.changeAnimation("reWalk",cyborgReAnimation)
        cyborg16.scale = 0.8
    })

    c2.mousePressed(()=>{
      gameState = 1;
      costume = 2
      cyborg1.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg1.changeAnimation("reWalk",cyborgReAnimation);
      cyborg1.scale = 0.8

      cyborg2.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg2.changeAnimation("reWalk",cyborgReAnimation)
      cyborg2.scale = 0.8

      cyborg3.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg3.changeAnimation("reWalk",cyborgReAnimation)
      cyborg3.scale = 0.8

      cyborg4.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg4.changeAnimation("reWalk",cyborgReAnimation)
      cyborg4.scale = 0.8

      cyborg5.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg5.changeAnimation("reWalk",cyborgReAnimation)
      cyborg5.scale = 0.8

      cyborg6.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg6.changeAnimation("reWalk",cyborgReAnimation)
      cyborg6.scale = 0.8

      cyborg7.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg7.changeAnimation("reWalk",cyborgReAnimation)
      cyborg7.scale = 0.8

      cyborg8.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg8.changeAnimation("reWalk",cyborgReAnimation)
      cyborg8.scale = 0.8

      cyborg9.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg9.changeAnimation("reWalk",cyborgReAnimation)
      cyborg9.scale = 0.8

      cyborg10.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg10.changeAnimation("reWalk",cyborgReAnimation);
      cyborg10.scale = 0.8

      cyborg11.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg11.changeAnimation("reWalk",cyborgReAnimation)
      cyborg11.scale = 0.8

      cyborg12.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg12.changeAnimation("reWalk",cyborgReAnimation)
      cyborg12.scale = 0.8

      cyborg13.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg13.changeAnimation("reWalk",cyborgReAnimation)
      cyborg13.scale = 0.8

      cyborg14.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg14.changeAnimation("reWalk",cyborgReAnimation)
      cyborg14.scale = 0.8

      cyborg15.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg15.changeAnimation("reWalk",cyborgReAnimation)
      cyborg15.scale = 0.8

      cyborg16.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg16.changeAnimation("reWalk",cyborgReAnimation)
      cyborg16.scale = 0.8
    })

    c3.mousePressed(()=>{
      gameState = 1;
      costume = 3
      cyborg1.changeAnimation("ninW",ninWarriorAnimation);
      cyborg1.changeAnimation("reninW",reNinWarriorAnimation);
      cyborg1.scale = 1.2

      cyborg2.changeAnimation("ninW",ninWarriorAnimation);
      cyborg2.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg2.scale = 1.2

      cyborg3.changeAnimation("ninW",ninWarriorAnimation);
      cyborg3.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg3.scale = 1.2

      cyborg4.changeAnimation("ninW",ninWarriorAnimation);
      cyborg4.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg4.scale = 1.2

      cyborg5.changeAnimation("ninW",ninWarriorAnimation);
      cyborg5.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg5.scale = 1.2

      cyborg6.changeAnimation("ninW",ninWarriorAnimation);
      cyborg6.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg6.scale = 1.2

      cyborg7.changeAnimation("ninW",ninWarriorAnimation);
      cyborg7.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg7.scale = 1.2

      cyborg8.changeAnimation("ninW",ninWarriorAnimation);
      cyborg8.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg8.scale = 1.2
      
      cyborg9.changeAnimation("ninW",ninWarriorAnimation);
      cyborg9.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg9.scale = 1.2

      cyborg10.changeAnimation("ninW",ninWarriorAnimation);
      cyborg10.changeAnimation("reninW",reNinWarriorAnimation);
      cyborg10.scale = 1.2

      cyborg11.changeAnimation("ninW",ninWarriorAnimation);
      cyborg11.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg11.scale = 1.2

      cyborg12.changeAnimation("ninW",ninWarriorAnimation);
      cyborg12.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg12.scale = 1.2

      cyborg13.changeAnimation("ninW",ninWarriorAnimation);
      cyborg13.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg13.scale = 1.2

      cyborg14.changeAnimation("ninW",ninWarriorAnimation);
      cyborg14.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg14.scale = 1.2

      cyborg15.changeAnimation("ninW",ninWarriorAnimation);
      cyborg15.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg15.scale = 1.2

      cyborg16.changeAnimation("ninW",ninWarriorAnimation);
      cyborg16.changeAnimation("reninW",reNinWarriorAnimation)
      cyborg16.scale = 1.2

    })

    c4.mousePressed(()=>{
      gameState = 1;
      costume = 4
      cyborg1.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg1.changeAnimation("reWalk",cyborgReAnimation);
      cyborg1.scale = 0.8

      cyborg2.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg2.changeAnimation("reWalk",cyborgReAnimation)
      cyborg2.scale = 0.8

      cyborg3.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg3.changeAnimation("reWalk",cyborgReAnimation)
      cyborg3.scale = 0.8

      cyborg4.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg4.changeAnimation("reWalk",cyborgReAnimation)
      cyborg4.scale = 0.8

      cyborg5.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg5.changeAnimation("reWalk",cyborgReAnimation)
      cyborg5.scale = 0.8

      cyborg6.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg6.changeAnimation("reWalk",cyborgReAnimation)
      cyborg6.scale = 0.8

      cyborg7.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg7.changeAnimation("reWalk",cyborgReAnimation)
      cyborg7.scale = 0.8

      cyborg8.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg8.changeAnimation("reWalk",cyborgReAnimation)
      cyborg8.scale = 0.8

      cyborg9.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg9.changeAnimation("reWalk",cyborgReAnimation)
      cyborg9.scale = 0.8

      cyborg10.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg10.changeAnimation("reWalk",cyborgReAnimation);
      cyborg10.scale = 0.8

      cyborg11.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg11.changeAnimation("reWalk",cyborgReAnimation)
      cyborg11.scale = 0.8

      cyborg12.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg12.changeAnimation("reWalk",cyborgReAnimation)
      cyborg12.scale = 0.8

      cyborg13.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg13.changeAnimation("reWalk",cyborgReAnimation)
      cyborg13.scale = 0.8

      cyborg14.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg14.changeAnimation("reWalk",cyborgReAnimation)
      cyborg14.scale = 0.8

      cyborg15.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg15.changeAnimation("reWalk",cyborgReAnimation)
      cyborg15.scale = 0.8

      cyborg16.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg16.changeAnimation("reWalk",cyborgReAnimation)
      cyborg16.scale = 0.8
    })

    c5.mousePressed(()=>{
      gameState = 1;
      costume = 5
      cyborg1.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg1.changeAnimation("reWalk",cyborgReAnimation);
      cyborg1.scale = 0.8

      cyborg2.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg2.changeAnimation("reWalk",cyborgReAnimation)
      cyborg2.scale = 0.8

      cyborg3.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg3.changeAnimation("reWalk",cyborgReAnimation)
      cyborg3.scale = 0.8

      cyborg4.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg4.changeAnimation("reWalk",cyborgReAnimation)
      cyborg4.scale = 0.8

      cyborg5.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg5.changeAnimation("reWalk",cyborgReAnimation)
      cyborg5.scale = 0.8

      cyborg6.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg6.changeAnimation("reWalk",cyborgReAnimation)
      cyborg6.scale = 0.8

      cyborg7.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg7.changeAnimation("reWalk",cyborgReAnimation)
      cyborg7.scale = 0.8

      cyborg8.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg8.changeAnimation("reWalk",cyborgReAnimation)
      cyborg8.scale = 0.8

      cyborg9.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg9.changeAnimation("reWalk",cyborgReAnimation)
      cyborg9.scale = 0.8

      cyborg10.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg10.changeAnimation("reWalk",cyborgReAnimation);
      cyborg10.scale = 0.8

      cyborg11.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg11.changeAnimation("reWalk",cyborgReAnimation)
      cyborg11.scale = 0.8

      cyborg12.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg12.changeAnimation("reWalk",cyborgReAnimation)
      cyborg12.scale = 0.8

      cyborg13.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg13.changeAnimation("reWalk",cyborgReAnimation)
      cyborg13.scale = 0.8

      cyborg14.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg14.changeAnimation("reWalk",cyborgReAnimation)
      cyborg14.scale = 0.8

      cyborg15.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg15.changeAnimation("reWalk",cyborgReAnimation)
      cyborg15.scale = 0.8

      cyborg16.changeAnimation("cyborgWalk",cyborgAnimation);
      cyborg16.changeAnimation("reWalk",cyborgReAnimation)
      cyborg16.scale = 0.8
    })


      drawSprites();
      strokeWeight(2);
      stroke("blue");
      fill('#39ff14');
      textSize(70);
      textFont('Rockwell');
      text('WW3', camera.position.x+windowWidth/2-940, windowHeight/2-300);

      strokeWeight(2);
      stroke("blue");
      //fill('#0000FF');
      fill('#57FEFF')
      textSize(70);
      textFont('Rockwell');
      text('Select your player', camera.position.x+windowWidth/2-1150, windowHeight/2-200);

    }

    else if(gameState === 1){
        background(0);

        start.show();
        reStart.hide();
        start2.hide();
        c1.hide();
        c2.hide();
        c3.hide();
        c4.hide();
        c5.hide();
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
        text("3. Dodge the bullets and traps",camera.position.x+windowWidth/2-1200,windowHeight/2+60);
        text("4. Collect medikits and cammo boxes to increase your score",camera.position.x+windowWidth/2-1200,windowHeight/2+100);
        text("5. You have 3 lifes",camera.position.x+windowWidth/2-1200,windowHeight/2+140);

        if(costume===2||costume===4||costume===5){
          text("6. Use keys a and s to fire ",camera.position.x+windowWidth/2-1200,windowHeight/2+180);
        }
        if(costume===3){
          text("6. Use keys a and s to use sword",camera.position.x+windowWidth/2-1200,windowHeight/2+180);
        }

        //hiding the sprites
        //player.visible = false;
        //ground.visible = false;

        //go to play state
        start.mousePressed(()=>{
            gameState = 2;
            //costume = 1
            player.x = windowWidth/2-600;
            //player.x = 2600;
            player.y = windowHeight/2+280
            ground.x = windowWidth/2-1000;
            cyborg1.x = 1800;
            cyborg2.x = 5500;
            cyborg3.x = 11000;
            cyborg4.x = 12080;
            cyborg5.x = 2500;
            cyborg6.x = 4000;
            cyborg7.x = 6900;
            cyborg8.x = 8200;
            cyborg9.x = 9350;
            bulletCount =4;
            fireCount =4;
            reloadCount = 0;
            score = 0;
        })

    }
    else if(gameState === 2){

      if(costume===1||costume===2||costume===4){
        background(bg2);
      }

      if(costume===3){
        background(ninBg1)
      }

      if(costume===5){
        background(space1Image)
      }

      fireWall.x = camera.position.x+windowWidth/2-775
      fireWall.y = player.y
      fireWall.visible = false;


      wall1.x = camera.position.x+windowWidth/2-790
      wall1.y = player.y
      wall1.visible = false;

      wall2.x = camera.position.x+windowWidth/2-930
      wall2.y = player.y
      wall2.visible = false;

      finish.addImage(finishImage1);
      finish.scale = 0.5

      fort1.visible = false
      fort2.visible = false

      player.visible = true;

      nuclear.visible = false;

      health.visible = true;

      tank1.visible = true
      tank2.visible = true
      tank3.visible = true

      box1.visible = false
      box2.visible = false
      box3.visible = false
      box4.visible = false
      box5.visible = false
      box6.visible = false
      box7.visible = false
      box8.visible = false
      box9.visible = false
      box10.visible = false
      box11.visible = false
      box12.visible = false
      box13.visible = false
      box14.visible = false
      box15.visible = false
      box16.visible = false
      box17.visible = false
      box18.visible = false
      box19.visible = false
      box20.visible = false
      box21.visible = false
      box22.visible = false
      box23.visible = false
      box24.visible = false
      box25.visible = false
      box26.visible = false
      box27.visible = false
      box28.visible = false
      box29.visible = false
      box30.visible = false
      box31.visible = false
      box32.visible = false
      box33.visible = false
      box34.visible = false
      box35.visible = false
      box36.visible = false
      box37.visible = false
      box38.visible = false
      box39.visible = false

      costume1.visible = false
      costume2.visible = false
      costume3.visible = false
      costume4.visible = false
      costume5.visible = false

      spike1.visible = false
      spike2.visible = false
      spike3.visible = false
      spike4.visible = false
      spike5.visible = false
      spike6.visible = false

      cargoBox1.visible = true
      cargoBox2.visible = true
      cargoBox3.visible = true
      cargoBox4.visible = true
      cargoBox5.visible = true
      cargoBox6.visible = true
      cargoBox7.visible = true
      cargoBox8.visible = true
      cargoBox9.visible = true
      cargoBox10.visible = true
      cargoBox11.visible = true
      cargoBox12.visible = true
      cargoBox13.visible = true
      cargoBox14.visible = true
      cargoBox15.visible = true
      cargoBox16.visible = true
      cargoBox17.visible = true
      cargoBox18.visible = true
      cargoBox19.visible = true
      cargoBox20.visible = true
      cargoBox21.visible = true
      cargoBox22.visible = true
      cargoBox23.visible = true
      cargoBox24.visible = true
      cargoBox25.visible = true
      cargoBox26.visible = true
      cargoBox27.visible = true
      cargoBox28.visible = true
      cargoBox29.visible = true
      cargoBox30.visible = true
      cargoBox31.visible = true
      cargoBox32.visible = true
      cargoBox33.visible = true
      cargoBox34.visible = true
      cargoBox35.visible = true
      cargoBox36.visible = true
      cargoBox37.visible = true
      cargoBox38.visible = true
      cargoBox39.visible = true
      cargoBox40.visible = true
      cargoBox41.visible = true
      cargoBox42.visible = true
      cargoBox43.visible = true
      cargoBox44.visible = true
      cargoBox45.visible = true
      cargoBox46.visible = true
      cargoBox47.visible = true
      cargoBox48.visible = true
      cargoBox49.visible = true
      cargoBox50.visible = true
      cargoBox51.visible = true
      cargoBox52.visible = true
      cargoBox53.visible = true
      cargoBox54.visible = true
      cargoBox55.visible = true
      cargoBox56.visible = true
      cargoBox57.visible = true
      cargoBox58.visible = true
      cargoBox59.visible = true
      cargoBox60.visible = true
      cargoBox60.visible = true
      cargoBox61.visible = true
      cargoBox62.visible = true
      cargoBox63.visible = true
      cargoBox64.visible = true
      cargoBox65.visible = true
      cargoBox66.visible = true
      cargoBox67.visible = true
      cargoBox68.visible = true
      cargoBox69.visible = true
      cargoBox70.visible = true
      cargoBox71.visible = true
      cargoBox72.visible = true
      cargoBox73.visible = true
      cargoBox74.visible = true
      cargoBox75.visible = true
      cargoBox76.visible = true

      cyborg1.visible = true
      cyborg2.visible = true
      cyborg3.visible = true
      cyborg4.visible = true
      cyborg5.visible = true
      cyborg6.visible = true
      cyborg7.visible = true
      cyborg8.visible = true
      cyborg9.visible = true

      cyborg10.visible = false
      cyborg11.visible = false
      cyborg12.visible = false
      cyborg13.visible = false
      cyborg14.visible = false
      cyborg15.visible = false
      cyborg16.visible = false 


      finish.visible = true

      bridge1.visible = true
      bridge2.visible = true

      health.x = windowWidth/2+camera.position.x-1520;

      reloadOption.x = windowWidth/2+camera.position.x-1620;
      reload2.x = windowWidth/2+camera.position.x-1545;
      reload3.x = windowWidth/2+camera.position.x-1530;
      reload4.x = windowWidth/2+camera.position.x-1515;
      reload5.x = windowWidth/2+camera.position.x-1500;
    

      if(costume===2||costume===4){

        reload2.visible = true;
        reload3.visible = true;
        reload4.visible = true;
        reload5.visible = true;

      if(costume===2&&bulletCount===4||costume===2&&bullet2Count===4){
        reload2.visible = true;
        reload3.visible = true;
        reload4.visible = true;
        reload5.visible = true;
      }

      if(costume===2&&bulletCount===3||costume===4&&bulletCount===3){
        reload2.visible = true;
        reload3.visible = true;
        reload4.visible = true;
        reload5.visible = false;
      }
      if(costume===2&&bulletCount===2||costume===4&&bulletCount===2){
        reload2.visible = true;
        reload3.visible = true;
        reload4.visible = false;
        reload5.visible = false;
      }
      if(costume===2&&bulletCount===1||costume===4&&bulletCount===1){
        reload2.visible = true;
        reload3.visible = false;
        reload4.visible = false;
        reload5.visible = false;
      }
      if(costume===2&&bulletCount===0||costume===4&&bulletCount===0){
        reload2.visible = false;
        reload3.visible = false;
        reload4.visible = false;
        reload5.visible = false;
        textSize(100)
      }
      if(reloadCount<8&&bulletCount===0&&mousePressedOver(reloadOption)){
        bulletCount = 4
      }
      if(reloadCount<8&&bulletCount===1&&mousePressedOver(reloadOption)){
        bulletCount = 4
      }
      if(reloadCount<8&&bulletCount===2&&mousePressedOver(reloadOption)){
        bulletCount = 4
      }
      if(reloadCount<8&&bulletCount===3&&mousePressedOver(reloadOption)){
        bulletCount = 4
      }
      
      if(reloadCount>7&&mousePressedOver(reloadOption)){
        textSize(120)
        textFont('Rockwell');
        fill("orange")
        text("BULLETS OVER",camera.position.x+windowWidth/2-1200,300)
      }


      }

      if(costume===3||costume===1){
        reloadOption.addImage(reload2Image)
      }

      if(costume===5){

        if(costume===5&&fireCount===4){
          reload2.visible = true;
          reload2.x = windowWidth/2+camera.position.x-1545;
          reload2.addImage(fireBallImage)
          reload3.visible = true;
          reload3.x = windowWidth/2+camera.position.x-1500;
          reload3.addImage(fireBallImage)
          reload4.visible = true;
          reload4.x = windowWidth/2+camera.position.x-1455;
          reload4.addImage(fireBallImage)
          reload5.visible = true;
          reload5.x = windowWidth/2+camera.position.x-1410;
          reload5.addImage(fireBallImage)
        }
  
        if(costume===5&&fireCount===3){
          reload2.visible = true;
          reload2.x = windowWidth/2+camera.position.x-1545;
          reload2.addImage(fireBallImage)
          reload3.visible = true;
          reload3.x = windowWidth/2+camera.position.x-1500;
          reload3.addImage(fireBallImage)
          reload4.visible = true;
          reload4.x = windowWidth/2+camera.position.x-1455;
          reload4.addImage(fireBallImage)
          reload5.visible = false;
        }
        if(costume===5&&fireCount===2){
          reload2.visible = true;
          reload2.x = windowWidth/2+camera.position.x-1545;
          reload2.addImage(fireBallImage)
          reload3.x = windowWidth/2+camera.position.x-1500;
          reload3.visible = true;
          reload3.addImage(fireBallImage)
          reload4.visible = false;
          reload5.visible = false;
        }
        if(costume===5&&fireCount===1){
          reload2.visible = true;
          reload2.x = windowWidth/2+camera.position.x-1545;
          reload2.addImage(fireBallImage)
          reload3.visible = false;
          reload4.visible = false;
          reload5.visible = false;
        }
        if(costume===5&&fireCount===0){
          reload2.visible = false;
          reload3.visible = false;
          reload4.visible = false;
          reload5.visible = false;
        }
  
        if(reloadCount<8&&fireCount===0&&mousePressedOver(reloadOption)){
          fireCount = 4
        }
        if(reloadCount<8&&fireCount===1&&mousePressedOver(reloadOption)){
          fireCount = 4
        }
        if(reloadCount<8&&fireCount===2&&mousePressedOver(reloadOption)){
          fireCount = 4
        }
        if(reloadCount<8&&fireCount===3&&mousePressedOver(reloadOption)){
          fireCount = 4
        }
        
        if(reloadCount>7&&mousePressedOver(reloadOption)){
          textSize(120)
          textFont('Rockwell');
          fill("orange")
          text("BULLETS OVER",camera.position.x+windowWidth/2-1200,300)
        }

      }


      if(costume===1||costume===2||costume===4){

        if(cyborg1.isTouching(cargoBox1)){
            cyborg1.changeAnimation("reWalk",cyborgReAnimation)
            cyborg1.velocityX = 5
            cyborg1.scale = 0.8
        }

        if(cyborg1.isTouching(cargoBox3)){
            cyborg1.changeAnimation("cyborgWalk",cyborgAnimation);
            cyborg1.velocityX = -5
            cyborg1.scale = 0.8
        }

        if(cyborg2.isTouching(cargoBox14)||cyborg2.isTouching(cargoBox15)||cyborg2.isTouching(cargoBox16)){
          cyborg2.changeAnimation("reWalk",cyborgAnimation);
          cyborg2.velocityX = 5
          cyborg2.scale = 0.8
        }
        
        if(cyborg2.isTouching(cargoBox17)){
          cyborg2.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg2.velocityX = -5
          cyborg2.scale = 0.8
        }
        if(cyborg3.isTouching(w1)){
          cyborg3.changeAnimation("reWalk",cyborgReAnimation)
          cyborg3.velocityX = 5
          cyborg3.scale = 0.8
        }

        if(cyborg3.isTouching(w2)){
          cyborg3.changeAnimation("cyborgWalk",cyborgAnimation);
          cyborg3.velocityX = -5
          cyborg3.scale = 0.8
        }

        if(cyborg4.isTouching(w3)){
          cyborg4.changeAnimation("reWalk",cyborgAnimation);
          cyborg4.velocityX = 5
          cyborg4.scale = 0.8
        }
      
        if(cyborg4.isTouching(w4)){
          cyborg4.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg4.velocityX = -5
          cyborg4.scale = 0.8
        }

        if(cyborg5.isTouching(tile1)){
          cyborg5.changeAnimation("reWalk",cyborgAnimation);
          cyborg5.velocityX = 5
          cyborg5.scale = 0.8
        }
      
        if(cyborg5.isTouching(tile2)){
          cyborg5.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg5.velocityX = -5
          cyborg5.scale = 0.8
        }

        if(cyborg6.isTouching(tile2)){
          cyborg6.changeAnimation("reWalk",cyborgAnimation);
          cyborg6.velocityX = 5
          cyborg6.scale = 0.8
        }
      
        if(cyborg6.isTouching(tile3)){
          cyborg6.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg6.velocityX = -5
          cyborg6.scale = 0.8
        }

        if(cyborg7.isTouching(tile4)){
          cyborg7.changeAnimation("reWalk",cyborgAnimation);
          cyborg7.velocityX = 5
          cyborg7.scale = 0.8
        }
      
        if(cyborg7.isTouching(tile5)){
          cyborg7.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg7.velocityX = -5
          cyborg7.scale = 0.8
        }

        if(cyborg8.isTouching(tile5)){
          cyborg8.changeAnimation("reWalk",cyborgAnimation);
          cyborg8.velocityX = 5
          cyborg8.scale = 0.8
        }
      
        if(cyborg8.isTouching(tile6)){
          cyborg8.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg8.velocityX = -5
          cyborg8.scale = 0.8
        }

        if(cyborg9.isTouching(tile7)){
          cyborg9.changeAnimation("reWalk",cyborgAnimation);
          cyborg9.velocityX = 5
          cyborg9.scale = 0.8
        }
      
        if(cyborg9.isTouching(tile8)){
          cyborg9.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg9.velocityX = -5
          cyborg9.scale = 0.8
        }



      } else if(costume===3){

      tank1.addImage(stallImage);
      tank1.scale = 1.5
      tank1.y= 550
      tank2.addImage(animalImage);
      tank2.scale = 0.5
      tank3.addImage(stallImage);
      tank3.scale = 1.5
      tank3.y= 550

      if(cyborg1.isTouching(cargoBox1)){
        cyborg1.changeAnimation("ninW",ninWarriorAnimation);
        cyborg1.velocityX = 5
        cyborg1.scale = 1.2
      }

      if(cyborg1.isTouching(cargoBox3)){
        cyborg1.changeAnimation("reninW",reNinWarriorAnimation)
        cyborg1.velocityX = -5
        cyborg1.scale = 1.2
      }

      if(cyborg2.isTouching(cargoBox14)||cyborg2.isTouching(cargoBox15)||cyborg2.isTouching(cargoBox16)){
        cyborg2.changeAnimation("ninW",ninWarriorAnimation);
        cyborg2.velocityX = 5
        cyborg2.scale = 1.2
      }
      
      if(cyborg2.isTouching(cargoBox17)){
        cyborg2.changeAnimation("reninW",reNinWarriorAnimation)
        cyborg2.velocityX = -5
        cyborg2.scale = 1.2
      }
      if(cyborg3.isTouching(w1)){
        cyborg3.changeAnimation("ninW",ninWarriorAnimation);
        cyborg3.velocityX = 5
        cyborg3.scale = 1.2
      }

      if(cyborg3.isTouching(w2)){
        cyborg3.changeAnimation("reninW",reNinWarriorAnimation)
        cyborg3.velocityX = -5
        cyborg3.scale = 1.2
      }

      if(cyborg4.isTouching(w3)){
        cyborg4.changeAnimation("ninW",ninWarriorAnimation);
        cyborg4.velocityX = 5
        cyborg4.scale = 1.2
      }
    
      if(cyborg4.isTouching(w4)){
        cyborg4.changeAnimation("reninW",reNinWarriorAnimation)
        cyborg4.velocityX = -5
        cyborg4.scale = 1.2
      }

      if(cyborg5.isTouching(tile1)){
        cyborg5.changeAnimation("ninW",ninWarriorAnimation);
        cyborg5.velocityX = 5
        cyborg5.scale = 1.2
      }

      if(cyborg5.isTouching(tile2)){
        cyborg5.changeAnimation("reninW",reNinWarriorAnimation)
        cyborg5.velocityX = -5
        cyborg5.scale = 1.2
      }

      if(cyborg6.isTouching(tile2)){
        cyborg6.changeAnimation("ninW",ninWarriorAnimation);
        cyborg6.velocityX = 5
        cyborg6.scale = 1.2
      }
      
      if(cyborg6.isTouching(tile3)){
        cyborg6.changeAnimation("reninW",reNinWarriorAnimation)
        cyborg6.velocityX = -5
        cyborg6.scale = 1.2
      }
      if(cyborg7.isTouching(tile4)){
        cyborg7.changeAnimation("ninW",ninWarriorAnimation);
        cyborg7.velocityX = 5
        cyborg7.scale = 1.2
      }

      if(cyborg7.isTouching(tile5)){
        cyborg7.changeAnimation("reninW",reNinWarriorAnimation)
        cyborg7.velocityX = -5
        cyborg7.scale = 1.2
      }

      if(cyborg8.isTouching(tile5)){
        cyborg8.changeAnimation("ninW",ninWarriorAnimation);
        cyborg8.velocityX = 5
        cyborg8.scale = 1.2
      }
    
      if(cyborg8.isTouching(tile6)){
        cyborg8.changeAnimation("reninW",reNinWarriorAnimation)
        cyborg8.velocityX = -5
        cyborg8.scale = 1.2
      }

      if(cyborg9.isTouching(tile7)){
        cyborg9.changeAnimation("ninW",ninWarriorAnimation);
        cyborg9.velocityX = 5
        cyborg9.scale = 1.2
      }
    
      if(cyborg9.isTouching(tile8)){
        cyborg9.changeAnimation("reninW",reNinWarriorAnimation)
        cyborg9.velocityX = -5
        cyborg9.scale = 1.2
      }

      } else if(costume===5){

        tank1.addImage(rover1Image);
        tank1.scale = 0.8

        tank2.addImage(rover2Image);
        tank2.scale = 0.8

        tank3.addImage(spaceShipImage);
        tank3.y = 500
        tank3.scale = 2

        if(cyborg1.isTouching(cargoBox1)){
          cyborg1.changeAnimation("reWalk",cyborgReAnimation)
          cyborg1.velocityX = 5
          cyborg1.scale = 0.8
      }

      if(cyborg1.isTouching(cargoBox3)){
          cyborg1.changeAnimation("cyborgWalk",cyborgAnimation);
          cyborg1.velocityX = -5
          cyborg1.scale = 0.8
      }

      if(cyborg2.isTouching(cargoBox14)||cyborg2.isTouching(cargoBox15)||cyborg2.isTouching(cargoBox16)){
        cyborg2.changeAnimation("reWalk",cyborgAnimation);
        cyborg2.velocityX = 5
        cyborg2.scale = 0.8
      }
      
      if(cyborg2.isTouching(cargoBox17)){
        cyborg2.changeAnimation("cyborgWalk",cyborgReAnimation)
        cyborg2.velocityX = -5
        cyborg2.scale = 0.8
      }
      if(cyborg3.isTouching(w1)){
        cyborg3.changeAnimation("reWalk",cyborgReAnimation)
        cyborg3.velocityX = 5
        cyborg3.scale = 0.8
      }

      if(cyborg3.isTouching(w2)){
        cyborg3.changeAnimation("cyborgWalk",cyborgAnimation);
        cyborg3.velocityX = -5
        cyborg3.scale = 0.8
      }

      if(cyborg4.isTouching(w3)){
        cyborg4.changeAnimation("reWalk",cyborgAnimation);
        cyborg4.velocityX = 5
        cyborg4.scale = 0.8
      }
    
      if(cyborg4.isTouching(w4)){
        cyborg4.changeAnimation("cyborgWalk",cyborgReAnimation)
        cyborg4.velocityX = -5
        cyborg4.scale = 0.8
      }
      if(cyborg5.isTouching(tile1)){
        cyborg5.changeAnimation("reWalk",cyborgAnimation);
        cyborg5.velocityX = 5
        cyborg5.scale = 0.8
      }
    
      if(cyborg5.isTouching(tile2)){
        cyborg5.changeAnimation("cyborgWalk",cyborgReAnimation)
        cyborg5.velocityX = -5
        cyborg5.scale = 0.8
      }

      if(cyborg6.isTouching(tile2)){
        cyborg6.changeAnimation("reWalk",cyborgAnimation);
        cyborg6.velocityX = 5
        cyborg6.scale = 0.8
      }
    
      if(cyborg6.isTouching(tile3)){
        cyborg6.changeAnimation("cyborgWalk",cyborgReAnimation)
        cyborg6.velocityX = -5
        cyborg6.scale = 0.8
      }

      if(cyborg7.isTouching(tile4)){
        cyborg7.changeAnimation("reWalk",cyborgAnimation);
        cyborg7.velocityX = 5
        cyborg7.scale = 0.8
      }
    
      if(cyborg7.isTouching(tile5)){
        cyborg7.changeAnimation("cyborgWalk",cyborgReAnimation)
        cyborg7.velocityX = -5
        cyborg7.scale = 0.8
      }

      if(cyborg8.isTouching(tile5)){
        cyborg8.changeAnimation("reWalk",cyborgAnimation);
        cyborg8.velocityX = 5
        cyborg8.scale = 0.8
      }
    
      if(cyborg8.isTouching(tile6)){
        cyborg8.changeAnimation("cyborgWalk",cyborgReAnimation)
        cyborg8.velocityX = -5
        cyborg8.scale = 0.8
      }

      if(cyborg9.isTouching(tile7)){
        cyborg9.changeAnimation("reWalk",cyborgAnimation);
        cyborg9.velocityX = 5
        cyborg9.scale = 0.8
      }
    
      if(cyborg9.isTouching(tile8)){
        cyborg9.changeAnimation("cyborgWalk",cyborgReAnimation)
        cyborg9.velocityX = -5
        cyborg9.scale = 0.8
      }
      }
        // camera position 
        camera.position.x = player.x;
        
        cargoBox1.setCollider("rectangle",0,0,150,100)
        cargoBox2.setCollider("rectangle",0,0,150,100)
        cargoBox3.setCollider("rectangle",0,0,110,100)
        cargoBox4.setCollider("rectangle",0,0,110,130)
        cargoBox5.setCollider("rectangle",0,0,110,110)
        cargoBox6.setCollider("rectangle",0,0,110,110)
        cargoBox7.setCollider("rectangle",0,0,110,110)
        cargoBox8.setCollider("rectangle",0,0,110,110)
        cargoBox9.setCollider("rectangle",0,0,110,110)
        cargoBox10.setCollider("rectangle",0,0,110,110)
        cargoBox11.setCollider("rectangle",0,0,110,110)
        cargoBox12.setCollider("rectangle",0,0,110,110)
        cargoBox13.setCollider("rectangle",0,0,110,110)
        cargoBox14.setCollider("rectangle",0,0,110,110)
        cargoBox15.setCollider("rectangle",0,0,110,110)
        cargoBox16.setCollider("rectangle",0,0,110,110)
        cargoBox17.setCollider("rectangle",0,0,95,160)
        cargoBox18.setCollider("rectangle",0,0,95,160)
        cargoBox19.setCollider("rectangle",0,0,95,160)
        cargoBox20.setCollider("rectangle",0,0,95,160)
        cargoBox21.setCollider("rectangle",0,0,95,160)
        cargoBox22.setCollider("rectangle",0,0,95,160)
        cargoBox23.setCollider("rectangle",0,0,95,160)
        cargoBox24.setCollider("rectangle",0,0,135,160)
        cargoBox25.setCollider("rectangle",0,0,135,160)
        cargoBox26.setCollider("rectangle",0,0,135,160)
        cargoBox27.setCollider("rectangle",0,0,135,160)
        cargoBox28.setCollider("rectangle",0,0,135,160)
        cargoBox29.setCollider("rectangle",0,0,95,160)
        cargoBox30.setCollider("rectangle",0,0,135,160)
        cargoBox31.setCollider("rectangle",0,0,135,160)
        cargoBox32.setCollider("rectangle",5,0,115,130)
        cargoBox33.setCollider("rectangle",5,0,115,130)
        cargoBox34.setCollider("rectangle",5,0,115,130)
        ///////////////////////////////////////////////
        cargoBox35.setCollider("rectangle",2,3,145,110);

        cargoBox36.setCollider("rectangle",2,3,145,110)
        cargoBox37.setCollider("rectangle",2,3,145,110)
        cargoBox38.setCollider("rectangle",2,3,145,110)
        cargoBox39.setCollider("rectangle",2,3,145,110)
        cargoBox40.setCollider("rectangle",2,3,145,110);
        cargoBox41.setCollider("rectangle",2,3,145,110)
        cargoBox42.setCollider("rectangle",2,3,145,110)
        cargoBox43.setCollider("rectangle",2,3,145,110)
        cargoBox44.setCollider("rectangle",2,3,145,110)
        cargoBox45.setCollider("rectangle",2,3,145,110);
        cargoBox46.setCollider("rectangle",2,3,145,110)
        cargoBox47.setCollider("rectangle",2,3,145,110)
        cargoBox48.setCollider("rectangle",2,3,145,110)
        cargoBox49.setCollider("rectangle",2,3,145,110)
        cargoBox50.setCollider("rectangle",2,3,145,110);
        cargoBox51.setCollider("rectangle",2,3,145,110)
        cargoBox52.setCollider("rectangle",2,3,145,110)
        cargoBox53.setCollider("rectangle",2,3,145,110)
        cargoBox54.setCollider("rectangle",2,3,145,110)
        cargoBox55.setCollider("rectangle",2,3,145,110)
        cargoBox56.setCollider("rectangle",2,3,145,110);
        cargoBox57.setCollider("rectangle",2,3,145,110)
        cargoBox58.setCollider("rectangle",2,3,145,110)
        cargoBox59.setCollider("rectangle",2,3,145,110)
        cargoBox60.setCollider("rectangle",2,3,145,110)
        cargoBox61.setCollider("rectangle",2,3,145,110)
        cargoBox62.setCollider("rectangle",2,3,145,110)
        cargoBox63.setCollider("rectangle",2,3,145,110)
        cargoBox64.setCollider("rectangle",2,3,145,110)
        cargoBox65.setCollider("rectangle",2,3,145,110)
        cargoBox66.setCollider("rectangle",2,3,145,110)
        cargoBox67.setCollider("rectangle",2,3,145,110)
        cargoBox68.setCollider("rectangle",2,3,145,110)
        cargoBox69.setCollider("rectangle",2,3,145,110)
        cargoBox70.setCollider("rectangle",2,3,145,110)
        cargoBox71.setCollider("rectangle",2,3,145,110)
        cargoBox72.setCollider("rectangle",2,3,145,110)
        cargoBox73.setCollider("rectangle",2,3,145,110)
        cargoBox74.setCollider("rectangle",2,3,145,110)
        cargoBox75.setCollider("rectangle",2,3,145,110)
        cargoBox76.setCollider("rectangle",2,3,145,110)



        //show the buttons
        start.hide();
        reStart.hide();
        start2.hide();
        c1.hide();
        c2.hide();
        c3.hide();
        c4.hide();
        c5.hide();

        //ground.visible = false;

       
        
        if(keyDown("space")&&player.isTouching(ground2)||keyDown("space")&&player.isTouching(ground3)||keyDown("space")&&player.isTouching(ground4)||keyDown("space")&&player.isTouching(ground5)||keyDown("space")&&player.isTouching(ground6)||keyDown("space")&&player.isTouching(ground7)||keyDown("space")&&player.isTouching(ground8)||keyDown("space")&&player.isTouching(ground9)||keyDown("space")&&player.isTouching(ground10)){
          player.velocityY = -12;
        }



        if(costume===1&&keyDown(RIGHT_ARROW)){
          player.x += 20
          player.changeAnimation("player",playerImage);
          player.scale = 0.65
        } else if(costume===1&&keyDown(LEFT_ARROW)){
          player.x -= 20
          player.changeAnimation("playerReverseWalk",playerReverseWalk);
          player.scale = 0.65
        } else if(costume===1&&keyCode===39){
          player.changeAnimation("idle",idle)
          player.scale = 0.65
        } else if(costume===1&&keyCode===37){
          player.changeAnimation("reIdle",rePlayerImage)
          player.scale = 0.65
        } else if(costume===1){
          player.changeAnimation("idle",playerReverseWalk);
          player.scale = 0.65
        }

        if(costume===2&&keyDown(RIGHT_ARROW)){
          player.x += 20
          player.changeAnimation("s2",s2Animation);
          player.scale = 0.4
        } else if(costume===2&&keyDown(LEFT_ARROW)){
          player.x -= 20
          player.changeAnimation("res2",res2Animation);
          player.scale = 0.4
        } else if(costume===2&&keyCode===39){
          player.changeAnimation("s2Idle",s2Image)
          player.scale = 0.33
        } else if(costume===2&&keyCode===37){
          player.changeAnimation("resS2Idle",res2Image);
          player.scale = 0.33;
        } else if(costume===2){
          player.changeAnimation("s2Idle",s2Image)
          player.scale = 0.33;
        }

        if(costume===3&&keyDown(RIGHT_ARROW)){
          player.x += 20
          player.changeAnimation("s4",s4Animation);
          player.scale = 1.3
        } else if(costume===3&&keyDown(LEFT_ARROW)){
          player.x -= 20
          player.changeAnimation("res4",res4Animation);
          player.scale = 1.3
        } else if(costume===3&&keyCode===39){
          //player.changeAnimation("s4Idle",s4Image)
          //player.scale = 1.3
          player.changeAnimation("ni",niAnimation);
          player.scale = 0.7;
        } else if(costume===3&&keyCode===37){
          //player.changeAnimation("res4Idle",res4Image)
          //player.scale = 1.3;
          player.changeAnimation("reni",reniAnimation);
          player.scale = 0.7;
        } else if(costume===3){
          player.changeAnimation("ni",niAnimation);
          player.scale = 0.7
        }
        if(costume===3&&keyDown("a")){
          player.changeAnimation("attack",attackAnimation)
          player.scale = 0.8
        } else if(costume===3&&keyDown("s")){
          player.changeAnimation("reAttack",reAttackAnimation)
          player.scale = 0.8
        } 
        if(costume===3&&keyCode===65){
          player.changeAnimation("ni",niAnimation)
          player.scale =0.7
        } else if(costume===3&&keyCode===83){
          player.changeAnimation("reni",niAnimation)
          player.scale =0.7
        }

        if(costume===4&&keyDown(RIGHT_ARROW)){
          player.x += 20
          player.changeAnimation("s3",s3Animation);
          player.scale = 0.5
        } else if(costume===4&&keyDown(LEFT_ARROW)){
          player.x -= 20
          player.changeAnimation("res3",res3Animation);
          player.scale = 0.5
        } else if(costume===4&&keyCode===39){
          player.changeAnimation("s3Idle",s3Image)
          player.scale = 0.5
        } else if(costume===4&&keyCode===37){
          player.changeAnimation("resS3Idle",res3Image);
          player.scale = 0.5
        } else if(costume===4){
          player.changeAnimation("s3Idle",s3Image);
          player.scale = 0.5

        }

        if(costume===5&&keyDown(RIGHT_ARROW)){
          player.x += 10
          player.changeAnimation("s5",s5Animation);
          player.scale = 1.3
        } else if(costume===5&&keyDown(LEFT_ARROW)){
          player.x -= 10
          player.changeAnimation("res5",res5Animation);
          player.scale = 1.3
        } else if(costume===5&&keyCode===39){
          player.changeAnimation("s5Idle",s5Image);
          player.scale = 1.3
        } else if(costume===5&&keyCode===37){
          player.changeAnimation("res5Idle",res5Image);
          player.scale = 1.3
        } else if(costume===5){
          player.changeAnimation("s5Idle",s5Image);
          player.scale = 1.3
        }
        if(costume===5&&keyCode===38||costume===5&&keyDown("a")){
          player.changeAnimation("rar",rar)
          player.scale = 1.8
        } else if(costume===5&&keyCode===40||costume===5&&keyDown("s")){
          player.changeAnimation("rerar",rerar)
          player.scale = 1.8
        }

      

        if(costume===5&&keyDown(RIGHT_ARROW)&&keyDown("s")){
          player.collide(wall1);
        } else if(costume===5&&keyDown(LEFT_ARROW)&&keyDown("a")){
          player.collide(wall2);
        } else if(costume===5&&keyDown(RIGHT_ARROW)&&keyDown("a")){
          player.collide(wall2);
        } else if(costume===5&&keyDown(LEFT_ARROW)&&keyDown("s")){
          player.collide(wall1);
        } 



        if(costume===5&&keyDown(UP_ARROW)){
          player.changeAnimation("s5rar",rar5)
          player.scale =1.8
          player.x +=10
        } else if(costume===5&&keyDown(DOWN_ARROW)){
          player.changeAnimation("res5rar",rerar5)
          player.scale= 1.8
          player.x -= 10;
        }
    
        player.velocityY = player.velocityY + 1;

        
        if(bullGroup.isTouching(cyborg1)){
          cyborg1.x = -100000
          score+=100
          bullGroup.destroyEach()
        }
        if(bullGroup.isTouching(cyborg2)){
          cyborg2.x = -100000
          score+=100
          bullGroup.destroyEach()
        }
        if(bullGroup.isTouching(cyborg3)){
          cyborg3.x = -100000
          score+=100
          bullGroup.destroyEach()
        }
        if(bullGroup.isTouching(cyborg4)){
          cyborg4.x = -100000
          score+=100
          bullGroup.destroyEach();
        } 
        if(bullGroup.isTouching(cyborg5)){
          cyborg5.x = -100000
          score+=100
          bullGroup.destroyEach()
        }
        if(bullGroup.isTouching(cyborg6)){
          cyborg6.x = -100000
          score+=100
          bullGroup.destroyEach()
        }
        if(bullGroup.isTouching(cyborg7)){
          cyborg7.x = -100000
          score+=100
          bullGroup.destroyEach()
        }
        if(bullGroup.isTouching(cyborg8)){
          cyborg8.x = -100000
          score+=100
          bullGroup.destroyEach();
        }
        if(bullGroup.isTouching(cyborg9)){
          cyborg9.x = -100000
          score+=100
          bullGroup.destroyEach();
        }


        if(bull2Group.isTouching(cyborg1)){
          cyborg1.x = -100000
          score+=100
          bull2Group.destroyEach()
        }
        if(bull2Group.isTouching(cyborg2)){
          cyborg2.x = -100000
          score+=100
          bull2Group.destroyEach()
        }
        if(bull2Group.isTouching(cyborg3)){
          cyborg3.x = -100000
          score+=100
          bull2Group.destroyEach()
        }
        if(bull2Group.isTouching(cyborg4)){
          cyborg4.x = -100000
          score+=100
          bull2Group.destroyEach();
        }
        if(bull2Group.isTouching(cyborg5)){
          cyborg5.x = -100000
          score+=100
          bull2Group.destroyEach()
        }
        if(bull2Group.isTouching(cyborg6)){
          cyborg6.x = -100000
          score+=100
          bull2Group.destroyEach()
        }
        if(bull2Group.isTouching(cyborg7)){
          cyborg7.x = -100000
          score+=100
          bull2Group.destroyEach()
        }
        if(bull2Group.isTouching(cyborg8)){
          cyborg8.x = -100000
          score+=100
          bull2Group.destroyEach();
        }
        if(bull2Group.isTouching(cyborg9)){
          cyborg9.x = -100000
          score+=100
          bull2Group.destroyEach();
        }


        if(player.isTouching(cyborg1)&&keyDown("a")&&costume===3||player.isTouching(cyborg1)&&keyDown("s")&&costume===3){
          cyborg1.x = -100000
          score+=100
        }
        if(player.isTouching(cyborg2)&&keyDown("a")&&costume===3||player.isTouching(cyborg2)&&keyDown("s")&&costume===3){
          cyborg2.x = -100000
          score+=100
        }
        if(player.isTouching(cyborg3)&&keyDown("a")&&costume===3||player.isTouching(cyborg3)&&keyDown("s")&&costume===3){
          cyborg3.x = -100000
          score+=100
        }
        if(player.isTouching(cyborg4)&&keyDown("a")&&costume===3||player.isTouching(cyborg4)&&keyDown("s")&&costume===3){
          cyborg4.x = -100000
          score+=100
        } 
        if(player.isTouching(cyborg5)&&keyDown("a")&&costume===3||player.isTouching(cyborg5)&&keyDown("s")&&costume===3){
          cyborg5.x = -100000
          score+=100
        }
        if(player.isTouching(cyborg6)&&keyDown("a")&&costume===3||player.isTouching(cyborg6)&&keyDown("s")&&costume===3){
          cyborg6.x = -100000
          score+=100
        }
        if(player.isTouching(cyborg7)&&keyDown("a")&&costume===3||player.isTouching(cyborg7)&&keyDown("s")&&costume===3){
          cyborg7.x = -100000
          score+=100
        }
        if(player.isTouching(cyborg8)&&keyDown("a")&&costume===3||player.isTouching(cyborg8)&&keyDown("s")&&costume===3){
          cyborg8.x = -100000
          score+=100
        }
        if(player.isTouching(cyborg9)&&keyDown("a")&&costume===3||player.isTouching(cyborg9)&&keyDown("s")&&costume===3){
          cyborg9.x = -100000
          score+=100
        }



        if(fireBallGroup.isTouching(cyborg1)){
          cyborg1.x = -100000
          score+=100
          fireBallGroup.destroyEach()
        }
        if(fireBallGroup.isTouching(cyborg2)){
          cyborg2.x = -100000
          score+=100
          fireBallGroup.destroyEach()
        }
        if(fireBallGroup.isTouching(cyborg3)){
          cyborg3.x = -100000
          score+=100
          fireBallGroup.destroyEach()
        }
        if(fireBallGroup.isTouching(cyborg4)){
          cyborg4.x = -100000
          score+=100
          fireBallGroup.destroyEach();
        }
        if(fireBallGroup.isTouching(cyborg5)){
          cyborg5.x = -100000
          score+=100
          fireBallGroup.destroyEach()
        }
        if(fireBallGroup.isTouching(cyborg6)){
          cyborg6.x = -100000
          score+=100
          fireBallGroup.destroyEach()
        }
        if(fireBallGroup.isTouching(cyborg7)){
          cyborg7.x = -100000
          score+=100
          fireBallGroup.destroyEach()
        }
        if(fireBallGroup.isTouching(cyborg8)){
          cyborg8.x = -100000
          score+=100
          fireBallGroup.destroyEach();
        }
        if(fireBallGroup.isTouching(cyborg9)){
          cyborg9.x = -100000
          score+=100
          fireBallGroup.destroyEach();
        }

        if(fireBall2Group.isTouching(cyborg1)){
          cyborg1.x = -100000
          score+=100
          fireBall2Group.destroyEach()
        }
        if(fireBall2Group.isTouching(cyborg2)){
          cyborg2.x = -100000
          score+=100
          fireBall2Group.destroyEach()
        }
        if(fireBall2Group.isTouching(cyborg3)){
          cyborg3.x = -100000
          score+=100
          fireBall2Group.destroyEach()
        }
        if(fireBall2Group.isTouching(cyborg4)){
          cyborg4.x = -100000
          score+=100
          fireBall2Group.destroyEach();
        }
        if(fireBall2Group.isTouching(cyborg5)){
          cyborg5.x = -100000
          score+=100
          fireBall2Group.destroyEach()
        }
        if(fireBall2Group.isTouching(cyborg6)){
          cyborg6.x = -100000
          score+=100
          fireBall2Group.destroyEach()
        }
        if(fireBall2Group.isTouching(cyborg7)){
          cyborg7.x = -100000
          score+=100
          fireBall2Group.destroyEach()
        }
        if(fireBall2Group.isTouching(cyborg8)){
          cyborg8.x = -100000
          score+=100
          fireBall2Group.destroyEach();
        }
        if(fireBall2Group.isTouching(cyborg9)){
          cyborg9.x = -100000
          score+=100
          fireBall2Group.destroyEach();
        }
        

        if(bulletGroup.isTouching(player)||trapGroup.isTouching(player)||player.isTouching(cyborg1)||player.isTouching(cyborg2)||player.isTouching(cyborg3)||player.isTouching(cyborg4)||player.isTouching(cyborg5)||player.isTouching(cyborg6)||player.isTouching(cyborg7)||player.isTouching(cyborg8)||player.isTouching(cyborg9)){
          playerLifeLine = playerLifeLine-1
          player.x = 400
          player.y = windowHeight/2+280

          bulletGroup.setVelocityXEach(0);
          trapGroup.setVelocityXEach(0); 
          fighterjetsGroup.setVelocityXEach(0) 
          medikitGroup.setVelocityEach(0)

          bulletGroup.setLifetimeEach(-1); 
          trapGroup.setLifetimeEach(-1);
          fighterjetsGroup.setLifetimeEach(-1);
          medikitGroup.setLifetimeEach(-1)

          bulletGroup.destroyEach();
          trapGroup.destroyEach();
          fighterjetsGroup.destroyEach()
          medikitGroup.destroyEach();
        }

        
        if(bullGroup.isTouching(fireWall)&&keyDown(LEFT_ARROW)){
          bullGroup.setVelocityXEach(0)
          bullGroup.setLifetimeEach(-1)
          bullGroup.destroyEach();
  
        }

        if(fireBallGroup.isTouching(fireWall)&&keyDown(DOWN_ARROW)){
          fireBallGroup.setVelocityXEach(0)
          fireBallGroup.setLifetimeEach(-1)
          fireBallGroup.destroyEach();
        }
        
        if(fireBall2Group.isTouching(fireWall)&&keyDown(UP_ARROW)){
          fireBall2Group.setVelocityXEach(0)
          fireBall2Group.setLifetimeEach(-1)
          fireBall2Group.destroyEach();
  
        }
        

        if(bullGroup.isTouching(cargoBox1)||bullGroup.isTouching(cargoBox2)||bullGroup.isTouching(cargoBox3)||bullGroup.isTouching(cargoBox4)||bullGroup.isTouching(cargoBox5)||bullGroup.isTouching(cargoBox6)||bullGroup.isTouching(cargoBox7)||bullGroup.isTouching(cargoBox8)||bullGroup.isTouching(cargoBox9)||bullGroup.isTouching(cargoBox10)||bullGroup.isTouching(cargoBox11)||bullGroup.isTouching(cargoBox12)||bullGroup.isTouching(cargoBox13)||bullGroup.isTouching(cargoBox14)||bullGroup.isTouching(cargoBox15)||bullGroup.isTouching(cargoBox16)||bullGroup.isTouching(cargoBox17)||bullGroup.isTouching(cargoBox18)||bullGroup.isTouching(cargoBox19)||bullGroup.isTouching(cargoBox20)||bullGroup.isTouching(cargoBox21)||bullGroup.isTouching(cargoBox22)||bullGroup.isTouching(cargoBox23)||bullGroup.isTouching(cargoBox24)||bullGroup.isTouching(cargoBox25)||bullGroup.isTouching(cargoBox26)||bullGroup.isTouching(cargoBox27)||bullGroup.isTouching(cargoBox28)||bullGroup.isTouching(cargoBox29)||bullGroup.isTouching(cargoBox30)||bullGroup.isTouching(cargoBox31)||bullGroup.isTouching(cargoBox32)||bullGroup.isTouching(cargoBox33)||bullGroup.isTouching(cargoBox34)||bullGroup.isTouching(cargoBox35)||bullGroup.isTouching(cargoBox36)||bullGroup.isTouching(cargoBox37)||bullGroup.isTouching(cargoBox38)||bullGroup.isTouching(cargoBox39)||bullGroup.isTouching(cargoBox40)||bullGroup.isTouching(cargoBox41)||bullGroup.isTouching(cargoBox42)||bullGroup.isTouching(cargoBox43)||bullGroup.isTouching(cargoBox44)||bullGroup.isTouching(cargoBox45)||bullGroup.isTouching(cargoBox46)||bullGroup.isTouching(cargoBox47)||bullGroup.isTouching(cargoBox48)||bullGroup.isTouching(cargoBox49)||bullGroup.isTouching(cargoBox50)||bullGroup.isTouching(cargoBox51)||bullGroup.isTouching(cargoBox52)||bullGroup.isTouching(cargoBox53)||bullGroup.isTouching(cargoBox54)||bullGroup.isTouching(cargoBox55)||bullGroup.isTouching(cargoBox56)||bullGroup.isTouching(cargoBox57)||bullGroup.isTouching(cargoBox58)||bullGroup.isTouching(cargoBox59)||bullGroup.isTouching(cargoBox60)||bullGroup.isTouching(cargoBox61)||bullGroup.isTouching(cargoBox62)||bullGroup.isTouching(cargoBox63)||bullGroup.isTouching(cargoBox64)||bullGroup.isTouching(cargoBox65)||bullGroup.isTouching(cargoBox66)||bullGroup.isTouching(cargoBox67)||bullGroup.isTouching(cargoBox68)||bullGroup.isTouching(cargoBox69)||bullGroup.isTouching(cargoBox70)||bullGroup.isTouching(cargoBox71)||bullGroup.isTouching(cargoBox72)||bullGroup.isTouching(cargoBox73)||bullGroup.isTouching(cargoBox74)||bullGroup.isTouching(cargoBox75)||bullGroup.isTouching(cargoBox76)){
          bullGroup.destroyEach();

        }

        if(bull2Group.isTouching(cargoBox1)||bull2Group.isTouching(cargoBox2)||bull2Group.isTouching(cargoBox3)||bull2Group.isTouching(cargoBox4)||bull2Group.isTouching(cargoBox5)||bull2Group.isTouching(cargoBox6)||bull2Group.isTouching(cargoBox7)||bull2Group.isTouching(cargoBox8)||bull2Group.isTouching(cargoBox9)||bull2Group.isTouching(cargoBox10)||bull2Group.isTouching(cargoBox11)||bull2Group.isTouching(cargoBox12)||bull2Group.isTouching(cargoBox13)||bull2Group.isTouching(cargoBox14)||bull2Group.isTouching(cargoBox15)||bull2Group.isTouching(cargoBox16)||bull2Group.isTouching(cargoBox17)||bull2Group.isTouching(cargoBox18)||bull2Group.isTouching(cargoBox19)||bull2Group.isTouching(cargoBox20)||bull2Group.isTouching(cargoBox21)||bull2Group.isTouching(cargoBox22)||bull2Group.isTouching(cargoBox23)||bull2Group.isTouching(cargoBox24)||bull2Group.isTouching(cargoBox25)||bull2Group.isTouching(cargoBox26)||bull2Group.isTouching(cargoBox27)||bull2Group.isTouching(cargoBox28)||bull2Group.isTouching(cargoBox29)||bull2Group.isTouching(cargoBox30)||bull2Group.isTouching(cargoBox31)||bull2Group.isTouching(cargoBox32)||bull2Group.isTouching(cargoBox33)||bull2Group.isTouching(cargoBox34)||bull2Group.isTouching(cargoBox35)||bull2Group.isTouching(cargoBox36)||bull2Group.isTouching(cargoBox37)||bull2Group.isTouching(cargoBox38)||bull2Group.isTouching(cargoBox39)||bull2Group.isTouching(cargoBox40)||bull2Group.isTouching(cargoBox41)||bull2Group.isTouching(cargoBox42)||bull2Group.isTouching(cargoBox43)||bull2Group.isTouching(cargoBox44)||bull2Group.isTouching(cargoBox45)||bull2Group.isTouching(cargoBox46)||bull2Group.isTouching(cargoBox47)||bull2Group.isTouching(cargoBox48)||bull2Group.isTouching(cargoBox49)||bull2Group.isTouching(cargoBox50)||bull2Group.isTouching(cargoBox51)||bull2Group.isTouching(cargoBox52)||bull2Group.isTouching(cargoBox53)||bull2Group.isTouching(cargoBox54)||bull2Group.isTouching(cargoBox55)||bull2Group.isTouching(cargoBox56)||bull2Group.isTouching(cargoBox57)||bull2Group.isTouching(cargoBox58)||bull2Group.isTouching(cargoBox59)||bull2Group.isTouching(cargoBox60)||bull2Group.isTouching(cargoBox61)||bull2Group.isTouching(cargoBox62)||bull2Group.isTouching(cargoBox63)||bull2Group.isTouching(cargoBox64)||bull2Group.isTouching(cargoBox65)||bull2Group.isTouching(cargoBox66)||bull2Group.isTouching(cargoBox67)||bull2Group.isTouching(cargoBox68)||bull2Group.isTouching(cargoBox69)||bull2Group.isTouching(cargoBox70)||bull2Group.isTouching(cargoBox71)||bull2Group.isTouching(cargoBox72)||bull2Group.isTouching(cargoBox73)||bull2Group.isTouching(cargoBox74)||bull2Group.isTouching(cargoBox75)||bull2Group.isTouching(cargoBox76)){
          bull2Group.destroyEach();

        }

        if(fireBallGroup.isTouching(cargoBox1)||fireBallGroup.isTouching(cargoBox2)||fireBallGroup.isTouching(cargoBox3)||fireBallGroup.isTouching(cargoBox4)||fireBallGroup.isTouching(cargoBox5)||fireBallGroup.isTouching(cargoBox6)||fireBallGroup.isTouching(cargoBox7)||fireBallGroup.isTouching(cargoBox8)||fireBallGroup.isTouching(cargoBox9)||fireBallGroup.isTouching(cargoBox10)||fireBallGroup.isTouching(cargoBox11)||fireBallGroup.isTouching(cargoBox12)||fireBallGroup.isTouching(cargoBox13)||fireBallGroup.isTouching(cargoBox14)||fireBallGroup.isTouching(cargoBox15)||fireBallGroup.isTouching(cargoBox16)||fireBallGroup.isTouching(cargoBox17)||fireBallGroup.isTouching(cargoBox18)||fireBallGroup.isTouching(cargoBox19)||fireBallGroup.isTouching(cargoBox20)||fireBallGroup.isTouching(cargoBox21)||fireBallGroup.isTouching(cargoBox22)||fireBallGroup.isTouching(cargoBox23)||fireBallGroup.isTouching(cargoBox24)||fireBallGroup.isTouching(cargoBox25)||fireBallGroup.isTouching(cargoBox26)||fireBallGroup.isTouching(cargoBox27)||fireBallGroup.isTouching(cargoBox28)||fireBallGroup.isTouching(cargoBox29)||fireBallGroup.isTouching(cargoBox30)||fireBallGroup.isTouching(cargoBox31)||fireBallGroup.isTouching(cargoBox32)||fireBallGroup.isTouching(cargoBox33)||fireBallGroup.isTouching(cargoBox34)||fireBallGroup.isTouching(cargoBox35)||fireBallGroup.isTouching(cargoBox36)||fireBallGroup.isTouching(cargoBox37)||fireBallGroup.isTouching(cargoBox38)||fireBallGroup.isTouching(cargoBox39)||fireBallGroup.isTouching(cargoBox40)||fireBallGroup.isTouching(cargoBox41)||fireBallGroup.isTouching(cargoBox42)||fireBallGroup.isTouching(cargoBox43)||fireBallGroup.isTouching(cargoBox44)||fireBallGroup.isTouching(cargoBox45)||fireBallGroup.isTouching(cargoBox46)||fireBallGroup.isTouching(cargoBox47)||fireBallGroup.isTouching(cargoBox48)||fireBallGroup.isTouching(cargoBox49)||fireBallGroup.isTouching(cargoBox50)||fireBallGroup.isTouching(cargoBox51)||fireBallGroup.isTouching(cargoBox52)||fireBallGroup.isTouching(cargoBox53)||fireBallGroup.isTouching(cargoBox54)||fireBallGroup.isTouching(cargoBox55)||fireBallGroup.isTouching(cargoBox56)||fireBallGroup.isTouching(cargoBox57)||fireBallGroup.isTouching(cargoBox58)||fireBallGroup.isTouching(cargoBox59)||fireBallGroup.isTouching(cargoBox60)||fireBallGroup.isTouching(cargoBox61)||fireBallGroup.isTouching(cargoBox62)||fireBallGroup.isTouching(cargoBox63)||fireBallGroup.isTouching(cargoBox64)||fireBallGroup.isTouching(cargoBox65)||fireBallGroup.isTouching(cargoBox66)||fireBallGroup.isTouching(cargoBox67)||fireBallGroup.isTouching(cargoBox68)||fireBallGroup.isTouching(cargoBox69)||fireBallGroup.isTouching(cargoBox70)||fireBallGroup.isTouching(cargoBox71)||fireBallGroup.isTouching(cargoBox72)||fireBallGroup.isTouching(cargoBox73)||fireBallGroup.isTouching(cargoBox74)||fireBallGroup.isTouching(cargoBox75)||fireBallGroup.isTouching(cargoBox76)){
          fireBallGroup.destroyEach();
        }

         if(fireBall2Group.isTouching(cargoBox1)||fireBall2Group.isTouching(cargoBox2)||fireBall2Group.isTouching(cargoBox3)||fireBall2Group.isTouching(cargoBox4)||fireBall2Group.isTouching(cargoBox5)||fireBall2Group.isTouching(cargoBox6)||fireBall2Group.isTouching(cargoBox7)||fireBall2Group.isTouching(cargoBox8)||fireBall2Group.isTouching(cargoBox9)||fireBall2Group.isTouching(cargoBox10)||fireBall2Group.isTouching(cargoBox11)||fireBall2Group.isTouching(cargoBox12)||fireBall2Group.isTouching(cargoBox13)||fireBall2Group.isTouching(cargoBox14)||fireBall2Group.isTouching(cargoBox15)||fireBall2Group.isTouching(cargoBox16)||fireBall2Group.isTouching(cargoBox17)||fireBall2Group.isTouching(cargoBox18)||fireBall2Group.isTouching(cargoBox19)||fireBall2Group.isTouching(cargoBox20)||fireBall2Group.isTouching(cargoBox21)||fireBall2Group.isTouching(cargoBox22)||fireBall2Group.isTouching(cargoBox23)||fireBall2Group.isTouching(cargoBox24)||fireBall2Group.isTouching(cargoBox25)||fireBall2Group.isTouching(cargoBox26)||fireBall2Group.isTouching(cargoBox27)||fireBall2Group.isTouching(cargoBox28)||fireBall2Group.isTouching(cargoBox29)||fireBall2Group.isTouching(cargoBox30)||fireBall2Group.isTouching(cargoBox31)||fireBall2Group.isTouching(cargoBox32)||fireBall2Group.isTouching(cargoBox33)||fireBall2Group.isTouching(cargoBox34)||fireBall2Group.isTouching(cargoBox35)||fireBall2Group.isTouching(cargoBox36)||fireBall2Group.isTouching(cargoBox37)||fireBall2Group.isTouching(cargoBox38)||fireBall2Group.isTouching(cargoBox39)||fireBall2Group.isTouching(cargoBox40)||fireBall2Group.isTouching(cargoBox41)||fireBall2Group.isTouching(cargoBox42)||fireBall2Group.isTouching(cargoBox43)||fireBall2Group.isTouching(cargoBox44)||fireBall2Group.isTouching(cargoBox45)||fireBall2Group.isTouching(cargoBox46)||fireBall2Group.isTouching(cargoBox47)||fireBall2Group.isTouching(cargoBox48)||fireBall2Group.isTouching(cargoBox49)||fireBall2Group.isTouching(cargoBox50)||fireBall2Group.isTouching(cargoBox51)||fireBall2Group.isTouching(cargoBox52)||fireBall2Group.isTouching(cargoBox53)||fireBall2Group.isTouching(cargoBox54)||fireBall2Group.isTouching(cargoBox55)||fireBall2Group.isTouching(cargoBox56)||fireBall2Group.isTouching(cargoBox57)||fireBall2Group.isTouching(cargoBox58)||fireBall2Group.isTouching(cargoBox59)||fireBall2Group.isTouching(cargoBox60)||fireBall2Group.isTouching(cargoBox61)||fireBall2Group.isTouching(cargoBox62)||fireBall2Group.isTouching(cargoBox63)||fireBall2Group.isTouching(cargoBox64)||fireBall2Group.isTouching(cargoBox65)||fireBall2Group.isTouching(cargoBox66)||fireBall2Group.isTouching(cargoBox67)||fireBall2Group.isTouching(cargoBox68)||fireBall2Group.isTouching(cargoBox69)||fireBall2Group.isTouching(cargoBox70)||fireBall2Group.isTouching(cargoBox71)||fireBall2Group.isTouching(cargoBox72)||fireBall2Group.isTouching(cargoBox73)||fireBall2Group.isTouching(cargoBox74)||fireBall2Group.isTouching(cargoBox75)||fireBall2Group.isTouching(cargoBox76)){
          fireBall2Group.destroyEach();
        }


  
        if(medikitGroup.isTouching(player)){
          score +=10
          medikitGroup.destroyEach();

        }
        if(playerLifeLine===3){
          health.addImage(healthImage1)
        }
        if(playerLifeLine===2){
          health.addImage(healthImage2)
          
        }
        if(playerLifeLine===1){
          health.addImage(healthImage3)
          
        }

        if(playerLifeLine === 0){
          health.addImage(healthImage4)
          gameState=5

          bulletGroup.setVelocityXEach(0);
          trapGroup.setVelocityXEach(0); 
          fighterjetsGroup.setVelocityXEach(0) 
          medikitGroup.setVelocityXEach(0)
          revivalGroup.setVelocityXEach(0)

          bulletGroup.setLifetimeEach(-1); 
          trapGroup.setLifetimeEach(-1);
          fighterjetsGroup.setLifetimeEach(-1);
          medikitGroup.setLifetimeEach(-1)
          revivalGroup.setLifetimeEach(-1)


          bulletGroup.destroyEach();
          trapGroup.destroyEach();
          fighterjetsGroup.destroyEach();
          medikitGroup.destroyEach();
          revivalGroup.destroyEach();
        }

  
        if(player.isTouching(finish)){
            gameState = 3
            bulletGroup.setVelocityXEach(0);
            trapGroup.setVelocityXEach(0); 
            fighterjetsGroup.setVelocityXEach(0)
            medikitGroup.setVelocityXEach(0);
            revivalGroup.setVelocityXEach(0)

            bulletGroup.setLifetimeEach(-1); 
            trapGroup.setLifetimeEach(-1);
            fighterjetsGroup.setLifetimeEach(-1);
            medikitGroup.setLifetimeEach(-1);
            revivalGroup.setLifetimeEach(-1);

            bulletGroup.destroyEach();
            trapGroup.destroyEach();
            fighterjetsGroup.destroyEach();
            medikitGroup.destroyEach();
            revivalGroup.destroyEach();

        }

        player.collide(ground);
        player.collide(cargoBox1);
        player.collide(cargoBox2);
        player.collide(cargoBox3);
        player.collide(cargoBox4);
        player.collide(cargoBox5);
        player.collide(cargoBox6);
        player.collide(cargoBox7);
        player.collide(cargoBox8);
        player.collide(cargoBox9);
        player.collide(cargoBox10);
        player.collide(cargoBox11);
        player.collide(cargoBox12);
        player.collide(cargoBox13);
        player.collide(cargoBox14);
        player.collide(cargoBox15);
        player.collide(cargoBox16);
        player.collide(cargoBox17);
        player.collide(cargoBox18);
        player.collide(cargoBox19);
        player.collide(cargoBox20);
        player.collide(cargoBox21);
        player.collide(cargoBox22);
        player.collide(cargoBox23);
        player.collide(cargoBox24);
        player.collide(cargoBox25);
        player.collide(cargoBox26);
        player.collide(cargoBox27);
        player.collide(cargoBox28);
        player.collide(cargoBox29);
        player.collide(cargoBox30);
        player.collide(cargoBox31);
        player.collide(cargoBox32);
        player.collide(cargoBox33);
        player.collide(cargoBox34);
        player.collide(cargoBox35);
        player.collide(cargoBox36);
        player.collide(cargoBox37);
        player.collide(cargoBox38);
        player.collide(cargoBox39);
        player.collide(cargoBox40);
        player.collide(cargoBox41);
        player.collide(cargoBox42);
        player.collide(cargoBox43);
        player.collide(cargoBox44);
        player.collide(cargoBox45);
        player.collide(cargoBox46);
        player.collide(cargoBox47);
        player.collide(cargoBox48);
        player.collide(cargoBox49);
        player.collide(cargoBox50);
        player.collide(cargoBox51);
        player.collide(cargoBox52);
        player.collide(cargoBox53);
        player.collide(cargoBox54);
        player.collide(cargoBox55);
        player.collide(cargoBox56);
        player.collide(cargoBox57);
        player.collide(cargoBox58);
        player.collide(cargoBox59);
        player.collide(cargoBox60);
        player.collide(cargoBox61);
        player.collide(cargoBox62);
        player.collide(cargoBox63);
        player.collide(cargoBox64);
        player.collide(cargoBox65);
        player.collide(cargoBox66);
        player.collide(cargoBox67);
        player.collide(cargoBox68);
        player.collide(cargoBox69);
        player.collide(cargoBox70);
        player.collide(cargoBox71);
        player.collide(cargoBox72);
        player.collide(cargoBox73);
        player.collide(cargoBox74);
        player.collide(cargoBox75);
        player.collide(cargoBox76);
        player.collide(b1);
        player.collide(b2);
        player.collide(w5);
        player.collide(w6);
        
        Traps();
        Bullet();
        Medikits();
        Revival();
        Fighterjet();
        Bull();
        Bull2();
        FireBall();
        FireBall2();

        drawSprites();

        textSize(40)
        fill("black")
        text(num+"'s Score:"+score,windowWidth/2+camera.position.x-280,120);
    }
    else if(gameState === 3){
        background("black");
        
        //hide the buttons
        start.hide();
        reStart.hide();
        start2.show();
        c1.hide();
        c2.hide();
        c3.hide();
        c4.hide();
        c5.hide();
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
        text('WW3',camera.position.x+windowWidth/2-940, windowHeight/2-300);
        
        textSize(40)
        fill("red");
        text("CONGRATULATIONS ON COMPLETING LEVEL 1",camera.position.x+windowWidth/2-1250,windowHeight/2-200)
        text("READ THE POINTERS GIVEN BELOW AND PROCEED TO LEVEL 2",camera.position.x+windowWidth/2-1400,windowHeight/2-100)

        fill(147, 58,22)
        text("1. Be ready as the obstacles will come with more speed",camera.position.x+windowWidth/2-1370,windowHeight/2-20);
        text("2. Press space to jump",camera.position.x+windowWidth/2-1370,windowHeight/2+20);
        text("3. Press left and right arrow to move",camera.position.x+windowWidth/2-1370,windowHeight/2+60);
        text("4. Collect medikits and cammo boxes to increase your score",camera.position.x+windowWidth/2-1370,windowHeight/2+100);

      start2.mousePressed(()=>{
          gameState = 4;
          player.x = windowWidth/2-600;
          player.x = 200;
          player.y = windowHeight/2+280
          ground.x = windowWidth/2-1000;
          cyborg10.x = 1800;
          cyborg11.x = 2800;
          cyborg12.x = 4000;
          cyborg13.x = 5800;
          cyborg14.x = 8600
          cyborg15.x = 9800
          cyborg16.x = 11200
          bulletCount =4;
          fireCount =4;
          reloadCount = 0;
      })


    } else if(gameState===4){

      


      if(costume===1||costume===2||costume===4){
        background(bg);
      }

      if(costume===3){
        background(ninBg2);
      }

      if(costume===5){
        background(space2Image)
      }

      if(costume===1||costume===3){
        reload2.visible = false
        reload3.visible = false
        reload4.visible = false
        reload5.visible = false
      }

      fireWall.x = camera.position.x+windowWidth/2-775
      fireWall.y = player.y
      fireWall.visible = false;


      wall1.x = camera.position.x+windowWidth/2-790
      wall1.y = player.y
      wall1.visible = false;

      wall2.x = camera.position.x+windowWidth/2-930
      wall2.y = player.y
      wall2.visible = false;

      finish.addImage(finishImage2);
      finish.scale = 1.2

      spike1.visible = true
      spike2.visible = true
      spike3.visible = true
      spike4.visible = true
      spike5.visible = true
      spike6.visible = true

      costume1.visible = false
      costume2.visible = false
      costume3.visible = false
      costume4.visible = false
      costume5.visible = false

      fort1.visible = true
      fort2.visible = true

      player.visible = true;

      nuclear.visible = true;

      fort1.visible = true
      fort2.visible = true
      
      tank1.visible = false
      tank2.visible = false
      tank3.visible = false

      player.visible = true;

      health.visible = true;

      costume1.visible = false;
      costume2.visible = false;
      costume3.visible = false;
      costume4.visible = false;
      costume5.visible = false;

      cargoBox1.visible = false
      cargoBox2.visible = false
      cargoBox3.visible = false
      cargoBox4.visible = false
      cargoBox5.visible = false
      cargoBox6.visible = false
      cargoBox7.visible = false
      cargoBox8.visible = false
      cargoBox9.visible = false
      cargoBox10.visible = false
      cargoBox11.visible = false
      cargoBox12.visible = false
      cargoBox13.visible = false
      cargoBox14.visible = false
      cargoBox15.visible = false
      cargoBox16.visible = false
      cargoBox17.visible = false
      cargoBox18.visible = false
      cargoBox19.visible = false
      cargoBox20.visible = false
      cargoBox21.visible = false
      cargoBox22.visible = false
      cargoBox23.visible = false
      cargoBox24.visible = false
      cargoBox25.visible = false
      cargoBox26.visible = false
      cargoBox27.visible = false
      cargoBox28.visible = false
      cargoBox29.visible = false
      cargoBox30.visible = false
      cargoBox31.visible = false
      cargoBox32.visible = false
      cargoBox33.visible = false
      cargoBox34.visible = false
      cargoBox35.visible = false
      cargoBox36.visible = false
      cargoBox37.visible = false
      cargoBox38.visible = false
      cargoBox39.visible = false
      cargoBox40.visible = false
      cargoBox41.visible = false
      cargoBox42.visible = false
      cargoBox43.visible = false
      cargoBox44.visible = false
      cargoBox45.visible = false
      cargoBox46.visible = false
      cargoBox47.visible = false
      cargoBox48.visible = false
      cargoBox49.visible = false
      cargoBox50.visible = false
      cargoBox51.visible = false
      cargoBox52.visible = false
      cargoBox53.visible = false
      cargoBox54.visible = false
      cargoBox55.visible = false
      cargoBox56.visible = false
      cargoBox57.visible = false
      cargoBox58.visible = false
      cargoBox59.visible = false
      cargoBox60.visible = false
      cargoBox61.visible = false
      cargoBox62.visible = false
      cargoBox63.visible = false
      cargoBox64.visible = false
      cargoBox65.visible = false
      cargoBox66.visible = false
      cargoBox67.visible = false
      cargoBox68.visible = false
      cargoBox69.visible = false
      cargoBox70.visible = false
      cargoBox71.visible = false
      cargoBox72.visible = false
      cargoBox73.visible = false
      cargoBox74.visible = false
      cargoBox75.visible = false
      cargoBox76.visible = false

      box1.visible = true;
      box2.visible = true;
      box3.visible = true;
      box4.visible = true;
      box5.visible = true;
      box6.visible = true;
      box7.visible = true;
      box8.visible = true;
      box9.visible = true;
      box10.visible = true;
      box11.visible = true;
      box12.visible = true;
      box13.visible = true;
      box14.visible = true;
      box15.visible = true;
      box16.visible = true;
      box17.visible = true;
      box18.visible = true;
      box19.visible = true;
      box20.visible = true;
      box21.visible = true;
      box22.visible = true;
      box23.visible = true;
      box24.visible = true;
      box25.visible = true;
      box26.visible = true;
      box27.visible = true;
      box28.visible = true;
      box29.visible = true;
      box30.visible = true;
      box31.visible = true;
      box32.visible = true;
      box33.visible = true;
      box34.visible = true;
      box35.visible = true;
      box36.visible = true;
      box37.visible = true;
      box38.visible = true;
      box39.visible = true;

      cyborg1.visible = false
      cyborg2.visible = false
      cyborg3.visible = false
      cyborg4.visible = false
      cyborg5.visible = false
      cyborg6.visible = false
      cyborg7.visible = false
      cyborg8.visible = false
      cyborg9.visible = false

      cyborg10.visible = true
      cyborg11.visible = true
      cyborg12.visible = true
      cyborg13.visible = true
      cyborg14.visible = true
      cyborg15.visible = true
      cyborg16.visible = true

      finish.visible = true

      bridge1.visible = false
      bridge2.visible = false

      health.x = windowWidth/2+camera.position.x-1520;

      reloadOption.x = windowWidth/2+camera.position.x-1620;
      reload2.x = windowWidth/2+camera.position.x-1545;
      reload3.x = windowWidth/2+camera.position.x-1530;
      reload4.x = windowWidth/2+camera.position.x-1515;
      reload5.x = windowWidth/2+camera.position.x-1500;

    

      if(costume===2||costume===4){

        reload2.visible = true;
        reload3.visible = true;
        reload4.visible = true;
        reload5.visible = true;

      if(costume===2&&bulletCount===4||costume===2&&bulletCount===4){
        reload2.visible = true;
        reload3.visible = true;
        reload4.visible = true;
        reload5.visible = true;
      }

      if(costume===2&&bulletCount===3||costume===4&&bulletCount===3){
        reload2.visible = true;
        reload3.visible = true;
        reload4.visible = true;
        reload5.visible = false;
      }
      if(costume===2&&bulletCount===2||costume===4&&bulletCount===2){
        reload2.visible = true;
        reload3.visible = true;
        reload4.visible = false;
        reload5.visible = false;
      }
      if(costume===2&&bulletCount===1||costume===4&&bulletCount===1){
        reload2.visible = true;
        reload3.visible = false;
        reload4.visible = false;
        reload5.visible = false;
      }
      if(costume===2&&bulletCount===0||costume===4&&bulletCount===0){
        reload2.visible = false;
        reload3.visible = false;
        reload4.visible = false;
        reload5.visible = false;
        textSize(100)
      }
      if(reloadCount<8&&bulletCount===0&&mousePressedOver(reloadOption)){
        bulletCount = 4
      }
      if(reloadCount<8&&bulletCount===1&&mousePressedOver(reloadOption)){
        bulletCount = 4
      }
      if(reloadCount<8&&bulletCount===2&&mousePressedOver(reloadOption)){
        bulletCount = 4
      }
      if(reloadCount<8&&bulletCount===3&&mousePressedOver(reloadOption)){
        bulletCount = 4
      }
      
      if(reloadCount>7&&mousePressedOver(reloadOption)){
        textSize(120)
        textFont('Rockwell');
        fill("orange")
        text("BULETS OVER",camera.position.x+windowWidth/2-1200,300)
      }


      }

      if(costume===3||costume===1){
        reloadOption.addImage(reload2Image)
      }

      if(costume===5){

        if(costume===5&&fireCount===4){
          reload2.visible = true;
          reload2.x = windowWidth/2+camera.position.x-1545;
          reload2.addImage(fireBallImage)
          reload3.visible = true;
          reload3.x = windowWidth/2+camera.position.x-1500;
          reload3.addImage(fireBallImage)
          reload4.visible = true;
          reload4.x = windowWidth/2+camera.position.x-1455;
          reload4.addImage(fireBallImage)
          reload5.visible = true;
          reload5.x = windowWidth/2+camera.position.x-1410;
          reload5.addImage(fireBallImage)
        }
  
        if(costume===5&&fireCount===3){
          reload2.visible = true;
          reload2.x = windowWidth/2+camera.position.x-1545;
          reload2.addImage(fireBallImage)
          reload3.visible = true;
          reload3.x = windowWidth/2+camera.position.x-1500;
          reload3.addImage(fireBallImage)
          reload4.visible = true;
          reload4.x = windowWidth/2+camera.position.x-1455;
          reload4.addImage(fireBallImage)
          reload5.visible = false;
        }
        if(costume===5&&fireCount===2){
          reload2.visible = true;
          reload2.x = windowWidth/2+camera.position.x-1545;
          reload2.addImage(fireBallImage)
          reload3.x = windowWidth/2+camera.position.x-1500;
          reload3.visible = true;
          reload3.addImage(fireBallImage)
          reload4.visible = false;
          reload5.visible = false;
        }
        if(costume===5&&fireCount===1){
          reload2.visible = true;
          reload2.x = windowWidth/2+camera.position.x-1545;
          reload2.addImage(fireBallImage)
          reload3.visible = false;
          reload4.visible = false;
          reload5.visible = false;
        }
        if(costume===5&&fireCount===0){
          reload2.visible = false;
          reload3.visible = false;
          reload4.visible = false;
          reload5.visible = false;
        }
  
        if(reloadCount<8&&fireCount===0&&mousePressedOver(reloadOption)){
          fireCount = 4
        }
        if(reloadCount<8&&fireCount===1&&mousePressedOver(reloadOption)){
          fireCount = 4
        }
        if(reloadCount<8&&fireCount===2&&mousePressedOver(reloadOption)){
          fireCount = 4
        }
        if(reloadCount<8&&fireCount===3&&mousePressedOver(reloadOption)){
          fireCount = 4
        }
        
        if(reloadCount>7&&mousePressedOver(reloadOption)){
          textSize(120)
          textFont('Rockwell');
          fill("orange")
          text("BULETS OVER",camera.position.x+windowWidth/2-1200,300)
        }

      }

      if(costume===1||costume===2||costume===4){
        if(cyborg10.isTouching(tile9)){
          cyborg10.changeAnimation("reWalk",cyborgReAnimation)
          cyborg10.velocityX = 5
          cyborg10.scale = 0.8
      }
      
      if(cyborg10.isTouching(tile10)){
          cyborg10.changeAnimation("cyborgWalk",cyborgAnimation);
          cyborg10.velocityX = -5
          cyborg10.scale = 0.8
      }
      
      if(cyborg11.isTouching(tile10)){
          cyborg11.changeAnimation("reWalk",cyborgAnimation);
          cyborg11.velocityX = 5
          cyborg11.scale = 0.8
      }
      
      if(cyborg11.isTouching(tile11)){
          cyborg11.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg11.velocityX = -5
          cyborg11.scale = 0.8
      }
      if(cyborg12.isTouching(tile12)){
          cyborg12.changeAnimation("reWalk",cyborgReAnimation)
          cyborg12.velocityX = 5
          cyborg12.scale = 0.8
      }
      
      if(cyborg12.isTouching(tile13)){
          cyborg12.changeAnimation("cyborgWalk",cyborgAnimation);
          cyborg12.velocityX = -5
          cyborg12.scale = 0.8
      }
      
      if(cyborg13.isTouching(tile14)){
          cyborg13.changeAnimation("reWalk",cyborgAnimation);
          cyborg13.velocityX = 5
          cyborg13.scale = 0.8
      }
      
      if(cyborg13.isTouching(tile15)){
          cyborg13.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg13.velocityX = -5
          cyborg13.scale = 0.8
      }
      
      if(cyborg14.isTouching(tile16)){
          cyborg14.changeAnimation("reWalk",cyborgAnimation);
          cyborg14.velocityX = 5
          cyborg14.scale = 0.8
      }
      
      if(cyborg14.isTouching(tile17)){
          cyborg14.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg14.velocityX = -5
          cyborg14.scale = 0.8
      }
      
      if(cyborg15.isTouching(tile18)){
          cyborg15.changeAnimation("reWalk",cyborgAnimation);
          cyborg15.velocityX = 5
          cyborg15.scale = 0.8
      }
      
      if(cyborg15.isTouching(tile19)){
          cyborg15.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg15.velocityX = -5
          cyborg15.scale = 0.8
      }
      
      if(cyborg16.isTouching(tile19)){
          cyborg16.changeAnimation("reWalk",cyborgAnimation);
          cyborg16.velocityX = 5
          cyborg16.scale = 0.8
      }
      
      if(cyborg16.isTouching(tile20)){
        cyborg16.changeAnimation("cyborgWalk",cyborgReAnimation)
        cyborg16.velocityX = -5
        cyborg16.scale = 0.8
      }
      } else if(costume===5){
    
      if(cyborg10.isTouching(tile9)){
          cyborg10.changeAnimation("reWalk",cyborgReAnimation)
          cyborg10.velocityX = 5
          cyborg10.scale = 0.8
      }
      
      if(cyborg10.isTouching(tile10)){
          cyborg10.changeAnimation("cyborgWalk",cyborgAnimation);
          cyborg10.velocityX = -5
          cyborg10.scale = 0.8
      }
      
      if(cyborg11.isTouching(tile10)){
          cyborg11.changeAnimation("reWalk",cyborgAnimation);
          cyborg11.velocityX = 5
          cyborg11.scale = 0.8
      }
      
      if(cyborg11.isTouching(tile11)){
          cyborg11.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg11.velocityX = -5
          cyborg11.scale = 0.8
      }
      if(cyborg12.isTouching(tile12)){
          cyborg12.changeAnimation("reWalk",cyborgReAnimation)
          cyborg12.velocityX = 5
          cyborg12.scale = 0.8
      }
      
      if(cyborg12.isTouching(tile13)){
          cyborg12.changeAnimation("cyborgWalk",cyborgAnimation);
          cyborg12.velocityX = -5
          cyborg12.scale = 0.8
      }
      
      if(cyborg13.isTouching(tile14)){
          cyborg13.changeAnimation("reWalk",cyborgAnimation);
          cyborg13.velocityX = 5
          cyborg13.scale = 0.8
      }
      
      if(cyborg13.isTouching(tile15)){
          cyborg13.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg13.velocityX = -5
          cyborg13.scale = 0.8
      }
      
      if(cyborg14.isTouching(tile16)){
          cyborg14.changeAnimation("reWalk",cyborgAnimation);
          cyborg14.velocityX = 5
          cyborg14.scale = 0.8
      }
      
      if(cyborg14.isTouching(tile17)){
          cyborg14.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg14.velocityX = -5
          cyborg14.scale = 0.8
      }
      
      if(cyborg15.isTouching(tile18)){
          cyborg15.changeAnimation("reWalk",cyborgAnimation);
          cyborg15.velocityX = 5
          cyborg15.scale = 0.8
      }
      
      if(cyborg15.isTouching(tile19)){
          cyborg15.changeAnimation("cyborgWalk",cyborgReAnimation)
          cyborg15.velocityX = -5
          cyborg15.scale = 0.8
      }
      
      if(cyborg16.isTouching(tile19)){
          cyborg16.changeAnimation("reWalk",cyborgAnimation);
          cyborg16.velocityX = 5
          cyborg16.scale = 0.8
      }
      
      if(cyborg16.isTouching(tile20)){
        cyborg16.changeAnimation("cyborgWalk",cyborgReAnimation)
        cyborg16.velocityX = -5
        cyborg16.scale = 0.8
      }
      } else if(costume===3){
        if(cyborg10.isTouching(tile9)){
          cyborg10.changeAnimation("ninW",ninWarriorAnimation);
          cyborg10.velocityX = 5
          cyborg10.scale = 1.2
      }
      
      if(cyborg10.isTouching(tile10)){
          cyborg10.changeAnimation("reninW",reNinWarriorAnimation)
          cyborg10.velocityX = -5
          cyborg10.scale = 1.2
      }
      
      if(cyborg11.isTouching(tile10)){
          cyborg11.changeAnimation("ninW",ninWarriorAnimation);
          cyborg11.velocityX = 5
          cyborg11.scale = 1.2
      }
      
      if(cyborg11.isTouching(tile11)){
          cyborg11.changeAnimation("reninW",reNinWarriorAnimation)
          cyborg11.velocityX = -5
          cyborg11.scale = 1.2
      }
      if(cyborg12.isTouching(tile12)){
          cyborg12.changeAnimation("ninW",ninWarriorAnimation);
          cyborg12.velocityX = 5
          cyborg12.scale = 1.2
      }
      
      if(cyborg12.isTouching(tile13)){
          cyborg12.changeAnimation("reninW",reNinWarriorAnimation)
          cyborg12.velocityX = -5
          cyborg12.scale = 1.2
      }
      
      if(cyborg13.isTouching(tile14)){
          cyborg13.changeAnimation("ninW",ninWarriorAnimation);
          cyborg13.velocityX = 5
          cyborg13.scale = 1.2
      }
      
      if(cyborg13.isTouching(tile15)){
          cyborg13.changeAnimation("reninW",reNinWarriorAnimation)
          cyborg13.velocityX = -5
          cyborg13.scale = 1.2
      }
      
      if(cyborg14.isTouching(tile16)){
          cyborg14.changeAnimation("ninW",ninWarriorAnimation);
          cyborg14.velocityX = 5
          cyborg14.scale = 1.2
      }
      
      if(cyborg14.isTouching(tile17)){
          cyborg14.changeAnimation("reninW",reNinWarriorAnimation)
          cyborg14.velocityX = -5
          cyborg14.scale = 1.2
      }
      
      if(cyborg15.isTouching(tile18)){
          cyborg15.changeAnimation("ninW",ninWarriorAnimation);
          cyborg15.velocityX = 5
          cyborg15.scale = 1.2
      }
      
      if(cyborg15.isTouching(tile19)){
          cyborg15.changeAnimation("reninW",reNinWarriorAnimation)
          cyborg15.velocityX = -5
          cyborg15.scale = 1.2
      }
      
      if(cyborg16.isTouching(tile19)){
          cyborg16.changeAnimation("ninW",ninWarriorAnimation);
          cyborg16.velocityX = 5
          cyborg16.scale = 1.2
      }
      
      if(cyborg16.isTouching(tile20)){
          cyborg16.changeAnimation("reninW",reNinWarriorAnimation)
          cyborg16.velocityX = -5
          cyborg16.scale = 1.2
      }
      }

      if(keyDown("space")&&player.isTouching(ground11)||keyDown("space")&&player.isTouching(ground12)||keyDown("space")&&player.isTouching(ground13)||keyDown("space")&&player.isTouching(ground14)||keyDown("space")&&player.isTouching(ground15)||keyDown("space")&&player.isTouching(ground16)||keyDown("space")&&player.isTouching(ground17)||keyDown("space")&&player.isTouching(ground18)||keyDown("space")&&player.isTouching(ground19)||keyDown("space")&&player.isTouching(ground20)||keyDown("space")&&player.isTouching(ground21)||keyDown("space")&&player.isTouching(ground22)){
        player.velocityY = -12;
      }

      ///////////////////////////
      if(fireBallGroup.isTouching(cyborg10)){
        cyborg10.x = -100000
        score+=100
        fireBallGroup.destroyEach()
      }
      if(fireBallGroup.isTouching(cyborg11)){
        cyborg11.x = -100000
        score+=100
        fireBallGroup.destroyEach()
      }
      if(fireBallGroup.isTouching(cyborg12)){
        cyborg12.x = -100000
        score+=100
        fireBallGroup.destroyEach()
      }
      if(fireBallGroup.isTouching(cyborg13)){
        cyborg13.x = -100000
        score+=100
        fireBallGroup.destroyEach();
      }
      if(fireBallGroup.isTouching(cyborg14)){
        cyborg14.x = -100000
        score+=100
        fireBallGroup.destroyEach()
      }
      if(fireBallGroup.isTouching(cyborg15)){
        cyborg15.x = -100000
        score+=100
        fireBallGroup.destroyEach()
      }
      if(fireBallGroup.isTouching(cyborg16)){
        cyborg16.x = -100000
        score+=100
        fireBallGroup.destroyEach()
      }
    
      if(fireBall2Group.isTouching(cyborg10)){
        cyborg10.x = -100000
        score+=100
        fireBall2Group.destroyEach()
      }
      if(fireBall2Group.isTouching(cyborg11)){
        cyborg11.x = -100000
        score+=100
        fireBall2Group.destroyEach()
      }
      if(fireBall2Group.isTouching(cyborg12)){
        cyborg12.x = -100000
        score+=100
        fireBall2Group.destroyEach()
      }
      if(fireBall2Group.isTouching(cyborg13)){
        cyborg13.x = -100000
        score+=100
        fireBall2Group.destroyEach();
      }
      if(fireBall2Group.isTouching(cyborg14)){
        cyborg14.x = -100000
        score+=100
        fireBall2Group.destroyEach()
      }
      if(fireBall2Group.isTouching(cyborg15)){
        cyborg15.x = -100000
        score+=100
        fireBall2Group.destroyEach()
      }
      if(fireBall2Group.isTouching(cyborg16)){
        cyborg16.x = -100000
        score+=100
        fireBall2Group.destroyEach()
      }



      if(bullGroup.isTouching(cyborg10)){
        cyborg10.x = -100000
        score+=100
        bullGroup.destroyEach()
      }
      if(bullGroup.isTouching(cyborg11)){
        cyborg11.x = -100000
        score+=100
        bullGroup.destroyEach()
      }
      if(bullGroup.isTouching(cyborg12)){
        cyborg12.x = -100000
        score+=100
        bullGroup.destroyEach()
      }
      if(bullGroup.isTouching(cyborg13)){
        cyborg13.x = -100000
        score+=100
        bullGroup.destroyEach();
      } 
      if(bullGroup.isTouching(cyborg14)){
        cyborg14.x = -100000
        score+=100
        bullGroup.destroyEach()
      }
      if(bullGroup.isTouching(cyborg15)){
        cyborg15.x = -100000
        score+=100
        bullGroup.destroyEach()
      }
      if(bullGroup.isTouching(cyborg16)){
        cyborg16.x = -100000
        score+=100
        bullGroup.destroyEach()
      }
    
      
      if(bull2Group.isTouching(cyborg10)){
        cyborg10.x = -100000
        score+=100
        bull2Group.destroyEach()
      }
      if(bull2Group.isTouching(cyborg11)){
        cyborg11.x = -100000
        score+=100
        bull2Group.destroyEach()
      }
      if(bull2Group.isTouching(cyborg12)){
        cyborg12.x = -100000
        score+=100
        bull2Group.destroyEach()
      }
      if(bull2Group.isTouching(cyborg13)){
        cyborg13.x = -100000
        score+=100
        bull2Group.destroyEach()
      }
      if(bull2Group.isTouching(cyborg14)){
        cyborg14.x = -100000
        score+=100
        bull2Group.destroyEach();
      }
      if(bull2Group.isTouching(cyborg15)){
        cyborg15.x = -100000
        score+=100
        bull2Group.destroyEach()
      }
      if(bull2Group.isTouching(cyborg16)){
        cyborg16.x = -100000
        score+=100
        bull2Group.destroyEach()
      }





      if(player.isTouching(cyborg10)&&keyDown("a")&&costume===3||player.isTouching(cyborg10)&&keyDown("s")&&costume===3){
        cyborg10.x = -100000
        score+=100
      }
      if(player.isTouching(cyborg11)&&keyDown("a")&&costume===3||player.isTouching(cyborg11)&&keyDown("s")&&costume===3){
        cyborg11.x = -1000001
        score+=100
      }
      if(player.isTouching(cyborg12)&&keyDown("a")&&costume===3||player.isTouching(cyborg12)&&keyDown("s")&&costume===3){
        cyborg12.x = -100000
        score+=100
      }
      if(player.isTouching(cyborg13)&&keyDown("a")&&costume===3||player.isTouching(cyborg13)&&keyDown("s")&&costume===3){
        cyborg13.x = -100000
        score+=100
      } 
      if(player.isTouching(cyborg14)&&keyDown("a")&&costume===3||player.isTouching(cyborg14)&&keyDown("s")&&costume===3){
        cyborg14.x = -100000
        score+=100
      }
      if(player.isTouching(cyborg15)&&keyDown("a")&&costume===3||player.isTouching(cyborg15)&&keyDown("s")&&costume===3){
        cyborg15.x = -100000
        score+=100
      }
      if(player.isTouching(cyborg16)&&keyDown("a")&&costume===3||player.isTouching(cyborg16)&&keyDown("s")&&costume===3){
        cyborg16.x = -100000
        score+=100
      }

        // camera position 
        camera.position.x = player.x;


        if(bulletGroup.isTouching(player)||trapGroup.isTouching(player)||player.isTouching(cyborg10)||player.isTouching(cyborg11)||player.isTouching(cyborg12)||player.isTouching(cyborg13)||player.isTouching(cyborg14)||player.isTouching(cyborg15)||player.isTouching(cyborg16)||player.isTouching(spike1)||player.isTouching(spike2)||player.isTouching(spike3)||player.isTouching(spike4)||player.isTouching(spike5)||player.isTouching(spike6)){
          playerLifeLine = playerLifeLine-1
          player.x = 400
          player.y = windowHeight/2+280
      
          bulletGroup.setVelocityXEach(0);
          trapGroup.setVelocityXEach(0); 
          fighterjetsGroup.setVelocityXEach(0) 
          medikitGroup.setVelocityEach(0)
      
          bulletGroup.setLifetimeEach(-1); 
          trapGroup.setLifetimeEach(-1);
          fighterjetsGroup.setLifetimeEach(-1);
          medikitGroup.setLifetimeEach(-1)
      
          bulletGroup.destroyEach();
          trapGroup.destroyEach();
          fighterjetsGroup.destroyEach()
          medikitGroup.destroyEach();
      }
        
       



        //show the buttons
        start.hide();
        reStart.hide();
        start2.hide();
        c1.hide();
        c2.hide();
        c3.hide();
        c4.hide();
        c5.hide();

        //ground.visible = false



        if(costume===1&&keyDown(RIGHT_ARROW)){
          player.x += 20
          player.changeAnimation("player",playerImage);
          player.scale = 0.65
        } else if(costume===1&&keyDown(LEFT_ARROW)){
          player.x -= 20
          player.changeAnimation("playerReverseWalk",playerReverseWalk);
          player.scale = 0.65
        } else if(costume===1&&keyCode===39){
          player.changeAnimation("idle",idle)
          player.scale = 0.65
        } else if(costume===1&&keyCode===37){
          player.changeAnimation("reIdle",rePlayerImage)
          player.scale = 0.65
        } else if(costume===1){
          player.changeAnimation("idle",playerReverseWalk);
          player.scale = 0.65
        }

        if(costume===2&&keyDown(RIGHT_ARROW)){
          player.x += 20
          player.changeAnimation("s2",s2Animation);
          player.scale = 0.4
        } else if(costume===2&&keyDown(LEFT_ARROW)){
          player.x -= 20
          player.changeAnimation("res2",res2Animation);
          player.scale = 0.4
        } else if(costume===2&&keyCode===39){
          player.changeAnimation("s2Idle",s2Image)
          player.scale = 0.33
        } else if(costume===2&&keyCode===37){
          player.changeAnimation("resS2Idle",res2Image);
          player.scale = 0.33;
        } else if(costume===2){
          player.changeAnimation("s2Idle",s2Image)
          player.scale = 0.33;
        }

        if(costume===3&&keyDown(RIGHT_ARROW)){
          player.x += 20
          player.changeAnimation("s4",s4Animation);
          player.scale = 1.3
        } else if(costume===3&&keyDown(LEFT_ARROW)){
          player.x -= 20
          player.changeAnimation("res4",res4Animation);
          player.scale = 1.3
        } else if(costume===3&&keyCode===39){
          //player.changeAnimation("s4Idle",s4Image)
          //player.scale = 1.3
          player.changeAnimation("ni",niAnimation);
          player.scale = 0.7;
        } else if(costume===3&&keyCode===37){
          //player.changeAnimation("res4Idle",res4Image)
          //player.scale = 1.3;
          player.changeAnimation("reni",reniAnimation);
          player.scale = 0.7;
        } else if(costume===3){
          player.changeAnimation("ni",niAnimation);
          player.scale = 0.7
        }
        if(costume===3&&keyDown("a")){
          player.changeAnimation("attack",attackAnimation)
          player.scale = 0.8
        } else if(costume===3&&keyDown("s")){
          player.changeAnimation("reAttack",reAttackAnimation)
          player.scale = 0.8
        } 
        if(costume===3&&keyCode===65){
          player.changeAnimation("ni",niAnimation)
          player.scale =0.7
        } else if(costume===3&&keyCode===83){
          player.changeAnimation("reni",niAnimation)
          player.scale =0.7
        }

        if(costume===4&&keyDown(RIGHT_ARROW)){
          player.x += 20
          player.changeAnimation("s3",s3Animation);
          player.scale = 0.5
        } else if(costume===4&&keyDown(LEFT_ARROW)){
          player.x -= 20
          player.changeAnimation("res3",res3Animation);
          player.scale = 0.5
        } else if(costume===4&&keyCode===39){
          player.changeAnimation("s3Idle",s3Image)
          player.scale = 0.5
        } else if(costume===4&&keyCode===37){
          player.changeAnimation("resS3Idle",res3Image);
          player.scale = 0.5
        } else if(costume===4){
          player.changeAnimation("s3Idle",s3Image);
          player.scale = 0.5

        }

        if(costume===5&&keyDown(RIGHT_ARROW)){
          player.x += 10
          player.changeAnimation("s5",s5Animation);
          player.scale = 1.3
        } else if(costume===5&&keyDown(LEFT_ARROW)){
          player.x -= 10
          player.changeAnimation("res5",res5Animation);
          player.scale = 1.3
        } else if(costume===5&&keyCode===39){
          player.changeAnimation("s5Idle",s5Image);
          player.scale = 1.3
        } else if(costume===5&&keyCode===37){
          player.changeAnimation("res5Idle",res5Image);
          player.scale = 1.3
        } else if(costume===5){
          player.changeAnimation("s5Idle",s5Image);
          player.scale = 1.3
        }
        if(costume===5&&keyCode===38||costume===5&&keyDown("a")){
          player.changeAnimation("rar",rar)
          player.scale = 1.8
        } else if(costume===5&&keyCode===40||costume===5&&keyDown("s")){
          player.changeAnimation("rerar",rerar)
          player.scale = 1.8
        }

      

        if(costume===5&&keyDown(RIGHT_ARROW)&&keyDown("s")){
          player.collide(wall1);
        } else if(costume===5&&keyDown(LEFT_ARROW)&&keyDown("a")){
          player.collide(wall2);
        } else if(costume===5&&keyDown(RIGHT_ARROW)&&keyDown("a")){
          player.collide(wall2);
        } else if(costume===5&&keyDown(LEFT_ARROW)&&keyDown("s")){
          player.collide(wall1);
        } 



        if(costume===5&&keyDown(UP_ARROW)){
          player.changeAnimation("s5rar",rar5)
          player.scale =1.8
          player.x +=10
        } else if(costume===5&&keyDown(DOWN_ARROW)){
          player.changeAnimation("res5rar",rerar5)
          player.scale= 1.8
          player.x -= 10;
        }
    
        player.velocityY = player.velocityY + 1;

       



       
       
        

        if(bulletGroup.isTouching(player)||trapGroup.isTouching(player)){
          playerLifeLine = playerLifeLine-1
          player.x = 400
          player.y = windowHeight/2+280

          bulletGroup.setVelocityXEach(0);
          trapGroup.setVelocityXEach(0); 
          fighterjetsGroup.setVelocityXEach(0) 
          medikitGroup.setVelocityEach(0)

          bulletGroup.setLifetimeEach(-1); 
          trapGroup.setLifetimeEach(-1);
          fighterjetsGroup.setLifetimeEach(-1);
          medikitGroup.setLifetimeEach(-1)

          bulletGroup.destroyEach();
          trapGroup.destroyEach();
          fighterjetsGroup.destroyEach()
          medikitGroup.destroyEach();
        }

        
        if(bullGroup.isTouching(fireWall)&&keyDown(LEFT_ARROW)){
          bullGroup.setVelocityXEach(0)
          bullGroup.setLifetimeEach(-1)
          bullGroup.destroyEach();
  
        }

        if(fireBallGroup.isTouching(fireWall)&&keyDown(DOWN_ARROW)){
          fireBallGroup.setVelocityXEach(0)
          fireBallGroup.setLifetimeEach(-1)
          fireBallGroup.destroyEach();
        }
        
        if(fireBall2Group.isTouching(fireWall)&&keyDown(UP_ARROW)){
          fireBall2Group.setVelocityXEach(0)
          fireBall2Group.setLifetimeEach(-1)
          fireBall2Group.destroyEach();
  
        }
        

        


  
        if(medikitGroup.isTouching(player)){
          score +=10
          medikitGroup.destroyEach();

        }
        if(playerLifeLine===3){
          health.addImage(healthImage1)
        }
        if(playerLifeLine===2){
          health.addImage(healthImage2)
          
        }
        if(playerLifeLine===1){
          health.addImage(healthImage3)
          
        }

        if(playerLifeLine === 0){
          health.addImage(healthImage4)
          gameState=5

          bulletGroup.setVelocityXEach(0);
          trapGroup.setVelocityXEach(0); 
          fighterjetsGroup.setVelocityXEach(0) 
          medikitGroup.setVelocityXEach(0)
          revivalGroup.setVelocityXEach(0)

          bulletGroup.setLifetimeEach(-1); 
          trapGroup.setLifetimeEach(-1);
          fighterjetsGroup.setLifetimeEach(-1);
          medikitGroup.setLifetimeEach(-1)
          revivalGroup.setLifetimeEach(-1)


          bulletGroup.destroyEach();
          trapGroup.destroyEach();
          fighterjetsGroup.destroyEach();
          medikitGroup.destroyEach();
          revivalGroup.destroyEach();
        }

  
        if(player.isTouching(finish)){
            gameState = 6
            bulletGroup.setVelocityXEach(0);
            trapGroup.setVelocityXEach(0); 
            fighterjetsGroup.setVelocityXEach(0)
            medikitGroup.setVelocityXEach(0);
            revivalGroup.setVelocityXEach(0)

            bulletGroup.setLifetimeEach(-1); 
            trapGroup.setLifetimeEach(-1);
            fighterjetsGroup.setLifetimeEach(-1);
            medikitGroup.setLifetimeEach(-1);
            revivalGroup.setLifetimeEach(-1);

            bulletGroup.destroyEach();
            trapGroup.destroyEach();
            fighterjetsGroup.destroyEach();
            medikitGroup.destroyEach();
            revivalGroup.destroyEach();

        }

////////////////////////////////////////////////////////////////////////////////////


        box1.setCollider("rectangle",2,3,145,110)
        box2.setCollider("rectangle",2,3,145,110)
        box3.setCollider("rectangle",2,3,145,110)
        box4.setCollider("rectangle",2,3,145,110)
        box5.setCollider("rectangle",2,3,145,110)
        box6.setCollider("rectangle",2,3,145,110)
        box7.setCollider("rectangle",2,3,145,110)
        box8.setCollider("rectangle",2,3,145,110)
        box9.setCollider("rectangle",2,3,145,110)
        box10.setCollider("rectangle",2,3,145,110)

        box11.setCollider("rectangle",5,0,120,130)
        box12.setCollider("rectangle",5,0,120,130)
        box13.setCollider("rectangle",5,0,120,130)
        box14.setCollider("rectangle",5,0,120,130)
        box15.setCollider("rectangle",5,0,120,130)
        box16.setCollider("rectangle",5,0,120,130)
        box17.setCollider("rectangle",5,0,120,130)
        box18.setCollider("rectangle",5,0,120,130)
        box19.setCollider("rectangle",5,0,120,130)

        box20.setCollider("rectangle",10,-10,120,130)
        box21.setCollider("rectangle",10,-10,120,130)
        box22.setCollider("rectangle",10,-10,120,130)
        box23.setCollider("rectangle",10,-10,120,130)
        box24.setCollider("rectangle",10,-10,120,130)
        box25.setCollider("rectangle",10,-10,120,130)
        box26.setCollider("rectangle",10,-10,120,130)
        box27.setCollider("rectangle",10,-10,120,130)
        box28.setCollider("rectangle",10,-10,120,130)
        box29.setCollider("rectangle",10,-10,120,130)
        box30.setCollider("rectangle",10,-10,120,130)
        box31.setCollider("rectangle",10,-10,120,130)

        box32.setCollider("rectangle",2,3,120,110)
        box33.setCollider("rectangle",2,3,120,110)
        box34.setCollider("rectangle",2,3,120,110)
        box35.setCollider("rectangle",2,3,120,110)
        box36.setCollider("rectangle",2,3,120,110)
        box37.setCollider("rectangle",2,3,120,110)
        box38.setCollider("rectangle",2,3,120,110)
        box39.setCollider("rectangle",2,3,120,110)

        // collide
        
        player.collide(box1)
        player.collide(box2)
        player.collide(box3)
        player.collide(box4)
        player.collide(box5)
        player.collide(box6)
        player.collide(box7)
        player.collide(box8)
        player.collide(box9)
        player.collide(box10)
        player.collide(box11)
        player.collide(box12)
        player.collide(box13)
        player.collide(box14)
        player.collide(box15)
        player.collide(box16)
        player.collide(box17)
        player.collide(box18)
        player.collide(box19)
        player.collide(box20)
        player.collide(box21)
        player.collide(box22)
        player.collide(box23)
        player.collide(box24)
        player.collide(box25)
        player.collide(box26)
        player.collide(box27)
        player.collide(box28)
        player.collide(box29)
        player.collide(box30)
        player.collide(box31)
        player.collide(box32)
        player.collide(box33)
        player.collide(box34)
        player.collide(box35)
        player.collide(box36)
        player.collide(box37)
        player.collide(box38)
        player.collide(box39)



        player.collide(ground);
        player.collide(w5);
        player.collide(w6);

        Traps();
        Bullet();
        Medikits();
        Revival();
        Fighterjet();
        Bull();
        Bull2();
        FireBall();
        FireBall2();
        drawSprites();
        textSize(40)
        fill("black")
        text(num+"'s Score:"+score,windowWidth/2+camera.position.x-280,120);
  
      
  } else if(gameState===5){
      background("black");
        //hide the buttons
        start.hide();
        reStart.show();
        start2.hide();
        c1.hide();
        c2.hide();
        c3.hide();
        c4.hide();
        c5.hide();

        health.x = windowWidth/2+camera.position.x-1520;
        //go to start state
        reStart.mousePressed(()=>{
          playerLifeLine=3
          gameState = 1; 
          reStart.hide();
          score = 0;
          bulletGroup.destroyEach();
          fighterjetsGroup.destroyEach();
          trapGroup.destroyEach();
        })
        //text
        strokeWeight(2);
        stroke("blue");
        fill('#39ff14');
        textSize(70);
        textFont('Rockwell');
        text('WW3',camera.position.x+windowWidth/2-940, windowHeight/2-300);
        
        textSize(100)
        fill("red");
        text("GAME OVER",camera.position.x+windowWidth/2-1150,windowHeight/2);

      fort1.visible = false
      fort2.visible = false

      nuclear.visible = false;

      tank1.visible = false
      tank2.visible = false
      tank3.visible = false

      player.visible = false

      costume1.visible = false;
      costume2.visible = false;
      costume3.visible = false;
      costume4.visible = false;
      costume5.visible = false;

      reload2.visible = false;
      reload3.visible = false;
      reload4.visible = false;
      reload5.visible = false;

      health.visible = true

      ground.visible = false

      cargoBox1.visible = false
      cargoBox2.visible = false
      cargoBox3.visible = false
      cargoBox4.visible = false
      cargoBox5.visible = false
      cargoBox6.visible = false
      cargoBox7.visible = false
      cargoBox8.visible = false
      cargoBox9.visible = false
      cargoBox10.visible = false
      cargoBox11.visible = false
      cargoBox12.visible = false
      cargoBox13.visible = false
      cargoBox14.visible = false
      cargoBox15.visible = false
      cargoBox16.visible = false
      cargoBox17.visible = false
      cargoBox18.visible = false
      cargoBox19.visible = false
      cargoBox20.visible = false
      cargoBox21.visible = false
      cargoBox22.visible = false
      cargoBox23.visible = false
      cargoBox24.visible = false
      cargoBox25.visible = false
      cargoBox26.visible = false
      cargoBox27.visible = false
      cargoBox28.visible = false
      cargoBox29.visible = false
      cargoBox30.visible = false
      cargoBox31.visible = false
      cargoBox32.visible = false
      cargoBox33.visible = false
      cargoBox34.visible = false
      cargoBox35.visible = false
      cargoBox36.visible = false
      cargoBox37.visible = false
      cargoBox38.visible = false
      cargoBox39.visible = false
      cargoBox40.visible = false
      cargoBox41.visible = false
      cargoBox42.visible = false
      cargoBox43.visible = false
      cargoBox44.visible = false
      cargoBox45.visible = false
      cargoBox46.visible = false
      cargoBox47.visible = false
      cargoBox48.visible = false
      cargoBox49.visible = false
      cargoBox50.visible = false
      cargoBox51.visible = false
      cargoBox52.visible = false
      cargoBox53.visible = false
      cargoBox54.visible = false
      cargoBox55.visible = false
      cargoBox56.visible = false
      cargoBox57.visible = false
      cargoBox58.visible = false
      cargoBox59.visible = false
      cargoBox60.visible = false
      cargoBox60.visible = false
      cargoBox61.visible = false
      cargoBox62.visible = false
      cargoBox63.visible = false
      cargoBox64.visible = false
      cargoBox65.visible = false
      cargoBox66.visible = false
      cargoBox67.visible = false
      cargoBox68.visible = false
      cargoBox69.visible = false
      cargoBox70.visible = false
      cargoBox71.visible = false
      cargoBox72.visible = false
      cargoBox73.visible = false
      cargoBox74.visible = false
      cargoBox75.visible = false
      cargoBox76.visible = false

      /////////
      box1.visible = false
      box2.visible = false
      box3.visible = false
      box4.visible = false
      box5.visible = false
      box6.visible = false
      box7.visible = false
      box8.visible = false
      box9.visible = false
      box10.visible = false
      box11.visible = false
      box12.visible = false
      box13.visible = false
      box14.visible = false
      box15.visible = false
      box16.visible = false
      box17.visible = false
      box18.visible = false
      box19.visible = false
      box20.visible = false
      box21.visible = false
      box22.visible = false
      box23.visible = false
      box24.visible = false
      box25.visible = false
      box26.visible = false
      box27.visible = false
      box28.visible = false
      box29.visible = false
      box30.visible = false
      box31.visible = false
      box32.visible = false
      box33.visible = false
      box34.visible = false
      box35.visible = false
      box36.visible = false
      box37.visible = false
      box38.visible = false
      box39.visible = false


      cyborg1.visible = false
      cyborg2.visible = false
      cyborg3.visible = false
      cyborg4.visible = false
      cyborg5.visible = false
      cyborg6.visible = false
      cyborg7.visible = false
      cyborg8.visible = false
      cyborg9.visible = false
      cyborg10.visible = false
      cyborg11.visible = false
      cyborg12.visible = false
      cyborg13.visible = false
      cyborg14.visible = false
      cyborg15.visible = false
      cyborg16.visible = false

      finish.visible = false

      bridge1.visible = false
      bridge2.visible = false

        drawSprites();



  } 
  else if(gameState===6){
    background("black");
      //hide the buttons
      start.hide();
      reStart.show();
      start2.hide();
      c1.hide();
      c2.hide();
      c3.hide();
      c4.hide();
      c5.hide();
      //go to start state
      reStart.mousePressed(()=>{
          gameState = 1;
      })
      //text
      strokeWeight(2);
      stroke("blue");
      fill('#39ff14');
      textSize(70);
      textFont('Rockwell');
      text('WW3',camera.position.x+windowWidth/2-940, windowHeight/2-300);
      
      textSize(70)
      fill("red");
      text("CONGRATULATIONS",camera.position.x+windowWidth/2-1220,windowHeight/2-100);
      text("ON COMPLETING THE GAME",camera.position.x+windowWidth/2-1350,windowHeight/2);



  }

    
   
  
}

function Bullet(){
    if(frameCount%200===0){
      bullet = createSprite(camera.position.x+windowWidth/2,680,30,30);
      bullet.y = Math.round(random(280,500));
      bullet.velocityX = -10
      bullet.addAnimation("bullet",bulletImage);
      bullet.addAnimation("lasser",lasserImage);
      bullet.addAnimation("knife",knifeImage);
      if(costume===5){
        bullet.changeAnimation("lasser",lasserImage)
        bullet.scale = 2
      }
      if(costume===3){
        bullet.changeAnimation("knife",knifeImage)
      }
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
      fighterjet = createSprite(camera.position.x+windowWidth/2,100,1,1);
      fighterjet.y = Math.round(random(100,150));
      fighterjet.velocityX = -30;
      fighterjet.scale = 1;

      var select_fighterjet= Math.round(random(1,4))
      if (costume===1&&select_fighterjet===1||costume===2&&select_fighterjet===1||costume===4&&select_fighterjet===1){
        fighterjet.addImage(fighterjetImage1);
        fighterjet.scale = 0.4
      } else if(costume===1&&select_fighterjet===2||costume===2&&select_fighterjet===1||costume===4&&select_fighterjet===2){
        fighterjet.addImage(fighterjetImage2);
        fighterjet.scale = 2
      } else if(costume===1&&select_fighterjet===3||costume===2&&select_fighterjet===1||costume===4&&select_fighterjet===3){
        fighterjet.addImage(fighterjetImage3)
        fighterjet.scale = 2
      } else if(costume===1&&select_fighterjet===4||costume===2&&select_fighterjet===4||costume===4&&select_fighterjet===4){
        fighterjet.addImage(fighterjetImage4)
        fighterjet.scale = 1.2
      }

      if(costume===5&&select_fighterjet===1){
        fighterjet.addImage(spaceShip5Image);
        fighterjet.scale = 0.4
      } else if(costume===5&&select_fighterjet==2){
        fighterjet.addImage(spaceShip3Image);
        fighterjet.scale = 0.4
      } else if(costume===5&&select_fighterjet==3){
        fighterjet.addImage(spaceShip4Image)
        fighterjet.scale = 0.4
      } else if(costume===5&&select_fighterjet==4){
        fighterjet.addImage(spaceShip5Image)
        fighterjet.scale = 0.4
      }
      
      fighterjet.lifetime = windowWidth-1000;

      fighterjet.depth = player.depth;
      player.depth = player.depth + 1;
      
      //adding cloud to the group
      fighterjetsGroup.add(fighterjet);
    }
}

function Medikits(){
  if(frameCount%350===0){
    medikit = createSprite(camera.position.x+windowWidth/2,705,30,30);
    medikit.velocityX = -5
    medikit.lifetime = windowWidth-1000; 
    medikit.addImage(medikitImage)
    medikit.scale = 0.15; 
    medikit.setCollider("circle",0,0,200)  
    medikitGroup.add(medikit);
  }

}

function Bull(){

  if(keyDown("a")){
    fire = 1;
  } else if(keyWentUp("a")){
    fire = 0;
  }
  if(bulletCount>0&&fire===1&&frameCount%8===0&&costume===4||bulletCount>0&&fire===1&&frameCount%8===0&&costume===2/*&&keyDown(RIGHT_ARROW)||fire===1&&frameCount%2===0&&keyDown("space")*/){
    bulletCount = bulletCount - 1; 
    reloadCount +=1
    bull = createSprite(730,625,10,10);
    bull.x = windowWidth/2+camera.position.x-780;
    bull.y = player.y-25
    bull.addImage(bullet2Image)
    bull.velocityX = 35
    bull.scale= 0.04
    bull.lifetime = 50;
    if(keyDown(LEFT_ARROW)){
      bull.addImage(bullet3Image)
    }
    player.depth= bull.depth;
    bull.depth +=1;
    bullGroup.add(bull);
  }
  if(fire===0){
  }
}

function Bull2(){
  if(keyDown("s")){
    fire2 = 1
  } else if(keyWentUp("s")){
    fire2 = 0
  }
  if(bulletCount>0&&fire2===1&&keyDown(LEFT_ARROW)&&frameCount%8===0&&keyDown("s")&&costume===4||bulletCount>0&&fire2===1&&keyDown(LEFT_ARROW)&&frameCount%8===0&&keyDown("s")&&costume===2){
    bulletCount = bulletCount - 1;
    reloadCount +=1
    bull2 = createSprite(730,625,10,10);
    bull2.x = windowWidth/2+camera.position.x-940;
    bull2.y = player.y-25
    bull2.addImage(bullet3Image)
    bull2.velocityX = -35
    bull2.scale= 0.04
    bull2.lifetime = -100;
    player.depth= bull2.depth;
    bull2.depth +=1;
    bull2Group.add(bull2);
  }
  if(fire2===0){  
  }
}

function FireBall(){
  if(keyDown("a")){
    fire3 = 1;
  } else if(keyWentUp("a")){
    fire3 = 0;
  }
  if(fireCount>0&&fire3===1&&frameCount%8===0&&costume===5/*&&keyDown(UP_ARROW)||fire===1&&frameCount%8===0&&costume===5&&keyDown("a")/*&&keyDown(RIGHT_ARROW)||fire===1&&frameCount%2===0&&keyDown("space")*/){
    fireCount = fireCount - 1;
    reloadCount +=1
    fireBall = createSprite(730,625,10,10);
    fireBall.addImage(fireBallImage)
    fireBall.scale= 0.1
    fireBall.x = player.x+60
    fireBall.y = player.y+10
    fireBall.velocityX = 40
    fireBall.lifetime = 50;
    if(keyDown(DOWN_ARROW)){
      fireBall.addImage(fireBall2Image)
    }
    if(fire3===1&&fire4===1){
      fireBall.addImage(fireBall2Image);
      fireBallGroup.destroyEach();
    }
    fireBall.depth= player.depth;
    fireBall.depth +=1;
    fireBallGroup.add(fireBall);
  }
  if(fire3===0){
  }
}

function FireBall2(){
  if(keyDown("s")){
    fire4 = 1;
  } else if(keyWentUp("s")){
    fire4 = 0;
  }
  if(fireCount>0&&fire4===1&&frameCount%8===0&&costume===5&&keyDown(DOWN_ARROW)||fireCount>0&&fire4===1&&frameCount%8===0&&costume===5&&keyDown("s")/*&&keyDown(RIGHT_ARROW)||fire===1&&frameCount%2===0&&keyDown("space")*/){
    fireCount = fireCount - 1;
    reloadCount +=1
    fireBall = createSprite(730,625,10,10);
    fireBall.addImage(fireBallImage)
    fireBall.scale= 0.1
    fireBall.x = player.x-60
    fireBall.y = player.y+10
    fireBall.velocityX = -40
    fireBall.lifetime = 50;
    if(keyDown(UP_ARROW)){
      fireBall.addImage(fireBall2Image)
    }
    if(fire3===1&&fire4===1){
      fireBall2Group.destroyEach();
      fireBallGroup.destroyEach();
    }
    fireBall.depth= player.depth;
    fireBall.depth +=1;
    fireBall2Group.add(fireBall);
  }
  if(fire4===0){
  }
}

function Revival(){
    /*if(playerLifeLine===3){
      trial.visible = false
    }*/
    if(playerLifeLine<3&&frameCount%440===0){
      trial = createSprite(camera.position.x+windowWidth/2,700,10,40);
      trial.velocityX = -2 
      trial.addImage(healthUpgradeImage);
      trial.scale = 0.2
      revivalGroup.add(trial);
    }
    if(revivalGroup.isTouching(player)&&playerLifeLine<3){
      revivalGroup.destroyEach();
      playerLifeLine +=1
    }
} 

/*function reset(){
  gameState = 0;
  reStart.hide();
  score = 0;
  bulletGroup.destroyEach();
  fighterjetsGroup.destroyEach();
  trapGroup.destroyEach();

}*/