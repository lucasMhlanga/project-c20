/*function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
function draw() {
  background(255,255,255);  
  drawSprites();
}*/


//var x = prompt("which class is this")

var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
console.log(movingRect.x-fixedRect.x)
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 || movingRect.x-fixedRect.x<fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor="red"
  fixedRect.shapeColor="red"
}else{
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
}
  drawSprites();
}