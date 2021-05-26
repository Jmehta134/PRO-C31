const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight= 300;
var ground;
function setup() {
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;

  //ground
  ground = new Ground(200,800,400,10);

  //divisions
  for (var k=0 ;k<=width ; k=k+80) {
    divisions.push( new Division(k ,height-divisionHeight/2,10,divisionHeight ));
  }
  //plinkos
  for (var j = 40; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
  // Particles
  if (frameCount%90 === 0) {
    particles.push(new Particle(random(170,230),20));
  }

  // 
  ground.display();
  for ( var i=0 ;i<divisions.length ; i++) {
     divisions[i].display();
  }
  for ( var i=0 ;i<particles.length ; i++) {
    particles[i].display();
  }
  for ( var i=0 ;i<plinkos.length ; i++) {
    plinkos[i].display();
  }
}