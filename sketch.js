
var trex ,trex_running,edges,ground,groundimage,invisibleground,clouds,cloudimage
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimage = loadImage("ground2.png")
  cloudimage = loadImage("cloud.png")
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprit
 trex = createSprite(50,165,20,50)
 trex.addAnimation("running",trex_running)
 trex.scale = 0.6

edges=createEdgeSprites()
// create ground
ground = createSprite(300,175,600,10)
ground.addImage(groundimage)
ground.velocityX = -4

invisibleground=createSprite(300,180,600,10)
invisibleground.visible = false
}

function draw(){
  background("white")
   // jump when space key is pressed
    if(keyDown("space")&& trex.y  >=  128){
      trex.velocityY = -10
      
    }
    //gravity
    trex.velocityY = trex.velocityY +0.5
    //making infinite ground
    if(ground.x<0){
      ground.x = ground.width/2
    }
   // console.log(World.frameCount)
  //stopping trex from falling down
  trex.collide(invisibleground)
  spawnclouds();
drawSprites()
}
function spawnclouds(){
  if(frameCount%60==0){

  
clouds = createSprite(600,100,10,10)
clouds.y = Math.round(random(10,130))
clouds.velocityX = -4
console.log(trex.depth)
console.log(clouds.depth)
clouds.depth = trex.depth
trex.depth = trex.depth+1
clouds.addImage(cloudimage)
}}