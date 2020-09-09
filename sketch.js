var car , wall;

var speed ,weight;

function setup() {
  createCanvas(1600,400);
 
  car =createSprite(80,200,100,50);
 // car.shapeColor = "white";

 wall =  createSprite(1400,200,60,height/2);
 wall.shapeColor="brown";

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background("black");  

   car.velocityX = speed;

   if(wall.x-car.x<(car.width+wall.width)/2)
   {
     car.velocityX = 0;
    var deformation=0.5*weight*speed*speed/22500;


    if (deformation <100){
      car.shapeColor = "green";
    }

    if (deformation<180 && deformation>100){  
    car.shapeColor = color(230,230,0);
    }
  
    if (deformation>180){
    car.shapeColor = "red";
    }
  
  }
   
    if(car.x>1320)
    {
      car.x = 1320;
    }

  console.log(car.velocityX);

  car.collide(wall);

  drawSprites();
}