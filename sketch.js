var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var gameState="Play";
var j=0;
var count=0;
function setup() {
  createCanvas(850, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    stopParticles=new Ground(width+20,height/2,10,height);
    stopParticles2=new Ground(0,height/2,10,height);
    
}
//I only need to add the score 
//I can add in the for loop where i made particles
//I can use the var j which is in the for loop
//And can give if statement and conditions inside this
 
function mousePressed(){
  if(gameState!=="end"){
    particle=new Particle(mouseX,10,10,10);
  }
}

function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  for (var i = 20; i < 790; i=i+320) {
    text("500",i,480);
  }
  for (var i = 100; i < 790; i=i+320) {
    text("100",i,480);
  }
  for (var i = 180; i < 850; i=i+320) {
    text("400",i,480);
  }
  for (var i = 260; i < 790; i=i+320) {
    text("200",i,480);
  }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   push();
   fill("yellow")
   rect(410,505,width+50,10);
   pop();

   if(particle!=null&&gameState==="Play"){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>0&&particle.body.position.x<80){
        score=score+500;
        count++;
        particle=null;
        if(count===5){ 
          gameState="end";
        }
      }
    }
   }
   if(particle!=null&&gameState==="Play"){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>80&&particle.body.position.x<160){
        score=score+100;
        count++;
        particle=null;
        if(count===5){ 
          gameState="end";
        }
      }
    }
   }if(particle!=null&&gameState==="Play"){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>160&&particle.body.position.x<240){
        score=score+400;
        count++;
        particle=null;
        if(count===5){ 
          gameState="end";
        }
      }
    }
   }if(particle!=null&&gameState==="Play"){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>240&&particle.body.position.x<320){
        score=score+200;
        count++;
        particle=null;
        if(count===5){ 
          gameState="end";
        }
      }
    }
   }if(particle!=null&&gameState==="Play"){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>320&&particle.body.position.x<400){
        score=score+500;
        count++;
        particle=null;
        if(count===5){ 
          gameState="end";
        }
      }
    }
   }if(particle!=null&&gameState==="Play"){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>400&&particle.body.position.x<480){
        score=score+100;
        count++;
        particle=null;
        if(count===5){ 
          gameState="end";
        }
      }
    }
   }if(particle!=null&&gameState==="Play"){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>480&&particle.body.position.x<560){
        score=score+400;
        count++;
        particle=null;
        if(count===5){ 
          gameState="end";
        }
      }
    }
   }if(particle!=null&&gameState==="Play"){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>560&&particle.body.position.x<640){
        score=score+200;
        count++;
        particle=null;
        if(count===5){ 
          gameState="end";
        }
      }
    }
   }if(particle!=null&&gameState==="Play"){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>640&&particle.body.position.x<720){
        score=score+500;
        count++;
        particle=null;
        if(count===5){ 
          gameState="end";
        }
      }
    }
   }if(particle!=null&&gameState==="Play"){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>720&&particle.body.position.x<800){
        score=score+100;
        count++;
        particle=null;
        if(count===5){ 
          gameState="end";
        }
      }
    }
   }if(particle!=null&&gameState==="Play"){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>800&&particle.body.position.x<880){
        score=score+400;
        count++;
        particle=null;
        if(count===5){ 
          gameState="end";
        }
      }
    }
   }
   
   if(gameState==="end"){
          push();
          textSize(50);
          strokeWeight(10);
          fill("green");
          stroke("red");
          text("Game Over",width/3,350);
          pop();
   }

   if(gameState==="end"&&keyCode===32){
     count=0;
     gameState="Play";
     score=0;
     //World.remove(world,particle.body);
   }
}

