const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var engine,world;
var ground,polygon,polygon_img,holder,slingshot;
var stand1,stand2;

function preload(){
    polygon_img=loadImage("images/polygon.png")
}

function setup(){
    engine=Engine.create();
    world=engine.world;

    createCanvas(900,400);
    ground=new Ground();
    stand1=new Stand(300,300,270,10);
    stand2=new Stand(700,200,200,10);

    //Level One
    block1=new Block(280,275,30,40);
    block2=new Block(310,275,30,40);
    block3=new Block(340,275,30,40);
    block4=new Block(370,275,30,40);
    block5=new Block(400,275,30,40);
    block6=new Block(430,275,30,40);
    block7=new Block(460,275,30,40);
    //Level Two
    block8=new Block(330,235,30,40);
    block9=new Block(360,235,30,40);
    block10=new Block(390,235,30,40);
    block11=new Block(420,235,30,40);
    block12=new Block(450,235,30,40);
    //Level Three
    block13=new Block(360,195,30,40);
    block14=new Block(390,195,30,40);
    block15=new Block(420,195,30,40);
    //Top
    block16=new Block(390,155,30,40);

    //polygon holder with slings
    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot=new Slingshot(this.polygon,{x:100,y:200});
    
}
function draw(){
    background("white")
    Engine.update(engine);

    ground.display();
    strokeWeight(2);
    stroke(15);

    stand1.display();
    stand2.display();

    stroke(15);
    fill("black")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    stroke(15);
    fill("orange")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    stroke(15);
    fill("violet")
    block13.display();
    block14.display();
    block15.display();
    stroke(15)
    fill("green")
    block16.display();
   
    text("Drag the Hexagonal Shape to Release it, to Launch it Towards the Blocks",600,250);

    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}