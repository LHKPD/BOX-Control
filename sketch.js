var box;

function setup() {
  createCanvas(800,600);
  
  
  
  box = createSprite(200,200, 50, 50);
  box.shapeColor = "white";
  

  gameObject1 = createSprite(100,580,150,20);
  gameObject1.shapeColor = "yellow" ;
  gameObject2 = createSprite(300,580,150,20);
  gameObject2.shapeColor = "blue" ;
  gameObject3 = createSprite(500,580,150,20);
  gameObject3.shapeColor = "green" ;
  gameObject4 = createSprite(700,580,150,20);
  gameObject4.shapeColor = "red" ;
}

function draw() {
  background(0); 
  box.x = World.mouseX;
  box.y = World.mouseY;

  if(box.isTouching(gameObject1)){
    box.shapeColor = "yellow";
  }
  if(box.isTouching(gameObject2)){
    box.shapeColor = "blue";
  }
  if(box.isTouching(gameObject3)){
    box.shapeColor = "green";
  }
  if(box.isTouching(gameObject4)){
    box.shapeColor = "red";
  }
if(box.y<540 ){
  box.shapeColor = "white";
}
  


  
  drawSprites();
}


  
