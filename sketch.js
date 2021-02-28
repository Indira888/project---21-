var canvas;
var music;
var redbox,bluebox,yellowbox,greenbox,box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   bluebox = createSprite(80,570,190,30);
   bluebox.shapeColor = "blue";

   redbox = createSprite(290,570,190,30);
   redbox.shapeColor = "red";

   yellowbox = createSprite(490,570,190,30);
   yellowbox.shapeColor = "yellow";

   greenbox = createSprite(700,570,200,30);
   greenbox.shapeColor = "green"
   
   box = createSprite(400,300,20,20);
   createSprite(random(20,750))
   box.shapeColor = "white";
   box.velocityX=-8;
   box.velocityY=8;

  

   //createSprite(random(20,750));
   edges = createEdgeSprites();

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


    
    
    //add condition to check if box touching surface and make it box
  
    box.bounceOff(edges);
    



if ( bluebox.isTouching(box) && box.bounceOff(bluebox)){
    box.shapeColor = "blue";
    
}

    if (redbox.isTouching(box) ){
        box.shapeColor = "red"
        box.velocityX = 0;
        box.velocityY = 0;
    }

    if (yellowbox.isTouching(box) && box.bounceOff(yellowbox) ){
        box.shapeColor = "yellow"
        
    }

    if (greenbox.isTouching(box) && box.bounceOff(greenbox)){
        box.shapeColor = "green"
        
    }

    drawSprites();



    
}
