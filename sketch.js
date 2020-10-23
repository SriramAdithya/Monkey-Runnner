  var monkey, monkey_running
  var banana, bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var score = 0;
  var ground;

  function preload() {


    monkey_running = loadAnimation("sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstaceImage = loadImage("obstacle.png");

  }



  function setup() {

    createCanvas(650, 220)


    monkey = createSprite(80, 171, 20, 20)
    monkey.addAnimation('moving', monkey_running)
    monkey.scale = 0.1;

    ground = createSprite(80, 210, 1200, 10)
  }


  function draw() {

    background('white')

    if (keyDown('space') && monkey.y > 110) {
      monkey.velocityY = -7;
    }

    monkey.velocityY += 0.8;
    monkey.collide(ground)
    
    if(ground.x < 0){
       ground.x = ground.width/2;
       }

    ground.velocityx = -222;
    
    textSize(20)
    fill('green')
    text('Survial Time :'+score, 450,40)
    score = Math.round(frameCount/10)
    
    FoodGroup = createGroup()
    obstacleGroup = createGroup()

    fruit()
    
    obstcles()
    
    drawSprites();
  }

  function fruit() {

    if (frameCount % 80 === 0) {
      banana = createSprite(800, Math.round(random(50, 100)), 20, 20)
      banana.addImage(bananaImage)
      banana.velocityX = -4;
      banana.lifetime = 210;
      banana.scale = 0.1;
      FoodGroup.add(banana)
    }
  }

  function obstcles() {

    if (frameCount % 300 === 0) {
      obstacle = createSprite(800, 180, 20, 20)
      obstacle.addImage(obstaceImage)
      obstacle.scale = 0.2;
      obstacle.lifetiem = 210;
      obstacle.velocityX = -8;
      obstacleGroup.add(obstacle)
    }
  }