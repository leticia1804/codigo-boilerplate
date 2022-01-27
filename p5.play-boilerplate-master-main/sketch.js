const Engine = Matter.Engine; // usado para criar o mecanismo da física
const World = Matter.World; // usado para criar o mundo físico e adicionar objetos a ele
const Bodies = Matter.Bodies; // usado para criar os objetos físicos que habitam o mundo.
const Constraint = Matter.Constraint; // MÓDULO PARA ATIVAR AS FUNÇÕES QUE ENGLOBAM RESTRIÇÃO ENTRE CORPOS
var engine, world,ground;



function preload() {
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 
}

function draw() {
  background(189);
 
  Engine.update(engine);
  
   
}
