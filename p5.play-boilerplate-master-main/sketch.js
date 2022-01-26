const Engine = Matter.Engine; // usado para criar o mecanismo da física
const World = Matter.World; // usado para criar o mundo físico e adicionar objetos a ele
const Bodies = Matter.Bodies; // usado para criar os objetos físicos que habitam o mundo.



var engine, world, object;

function setup() {
  // cria a tela do jogo
  var canvas = createCanvas(400,400);

  //cria mecanismos de física e adicionamos a física ao mundo
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true,
  };

  //cria objeto no mundo que vai conter o mecanismo de físico que vamos definir
  object = Bodies.rectangle(200,200,50,50, options);
  World.add(world,object);

  console.log(object);
  
}

function draw() {
  background(0); 
  Engine.update(engine); //atualiza o mecanismo a cada frame.
   //criando um retangulo normal  
  rectMode(CENTER); // ativa as coordenadas como ponto no centro do objeto
  rect(object.position.x,object.position.y,50,50);


  drawSprites();
}
