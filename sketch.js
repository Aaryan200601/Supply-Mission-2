var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var wall1Sprite, wal2Sprite, baseWallSprite;
var wall1, wall2, baseWall;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1Sprite = createSprite(width/2-60, 610, 20, 100);
	wall1Sprite.shapeColor=("red");
	

	wall2Sprite = createSprite(width/2+60, 610, 20, 100);
	wall2Sprite.shapeColor=("red");

	baseWallSprite = createSprite(width/2, 650, 100, 20);
	baseWallSprite.shapeColor=("red");
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	wall1 = Bodies.rectangle(width/2-60, 610, 20, 100, {isStatic:true} );
	World.add(world, wall1);

	wall2 = Bodies.rectangle(width/2+60, 610, 20, 100, {isStatic:true} );
	World.add(world, wall2);

	baseWall = Bodies.rectangle(width/2, 635, 100, 20, {isStatic:true} );
	World.add(world, baseWall);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites(); 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}