var monkey, monkey_running, monkey_collided;
var banana, bananaImage, apple, appleImage, obstacleImage;
var foodGroup, obstacleGroup, cloudsGroup;
var backgroundImage, groundImage, cloudImage;
var gameOver, gameOverImage, restart, restartImage;
var invisibleGround;
var score;

function preload(){
monkey_running = loadAnimation("monkey walking .gif");

bananaImage = loadImage("banana.png");
backgroundImage = loadImage("background.png");
groundImage = loadImage("ground.png");
cloudImage = loadImage("cloud.png");
gameOverImage = loadImage("gameOver.png");
restartImage = loadImage("restart.png");
}

function setup() {
  createCanvas(400,400);
  background = createSprite(400,200,800,400);

  monkey = createSprite(50,380,20,20);
  monkey.AddAnimation("monkey",monkey_running);
  
  
  ground = createSprite(400,390,800,20);
  ground.addImage(groundImage);

  invisibleGround = createSprite(400,395,800,10);
  invisibleGround.visible = false;

  gameOver = createSprite(400,200,20,20);
  gameOver.addImage(gameOverImage);

  restart = createSprite(400,100,20,20);
  
}

function draw() {
  drawSprites();
}

