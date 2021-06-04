var Cat,CAT,Garden,Mouse;
function preload() {
    //load the images here
     bg = loadImage("images/iss.png");
     sleep =loadAnimation("images/sleep.png");
     brush = loadAnimation("images/brush.png");
     gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
    eat = loadAnimation("images/eat1.png","images/eat2.png");
    bath =loadAnimation("images/bath1.png","images/bath2.png");
    move = loadAnimation("images/move.png","images/move1.png");
}

function setup(){
    createCanvas(1000,800);
    
    sapcespish = createSprite(500,400);
    sapcespish.addImage(bg);
    sapcespish.scale=0.2;
     
    astronaut = createSprite(300,230);
    astronaut.addAnimation("seeping",sleep);
    astronaut.scale=0.1;
  


    edges= createEdgeSprites()
}

function draw() {

    background(255);
   


    drawSprites();
}


function UP_ARROW(){
    if(keyDown("UP_ARROW")){
        astronaut.addAnimation("brushing",brush);
        astronaut.changeAnimation("brushing");
        astronaut.y = 350;
        astronaut.velocityY=0;
        astronaut.velocityX=0;
    }
}


function Down_ARROW(){

    if(keyDown("DOWN_ARROW")){
        astronaut.addAnimation("gyming",gym);
        astronaut.changeAnimation("gyming");
        astronaut.y=380;
        astronaut.velocityY=0;
        astronaut.velocityX=0;
    }
}


function LEFT_ARROW(){

    if(keyDown("LEFT_ARROW")){
        astronaut.addAnimation("eating",eat);
        astronaut.changeAnimation("eating");
        astronaut.y=340;
        astronaut.velocityY=0;
        astronaut.velocityX=0;
    }
}

function RIGTH_ARROW(){
       
    if(keyDown("REIGTH_ARROW")){
        astronaut.addAnimation("bathing",bath);
        astronaut.changeAnimation("bathing");
        astronaut.y=369;
        astronaut.velocityY=0;
        astronaut.velocityX=0;
    }
}
   
function M_KEY(){
    
    if(keyDown("M_KEY")){
        astronaut.addAnimation("moveing",move);
        astronaut.changeAnimation("moveing");
        astronaut.y=354;
        astronaut.velocityY=0;
        astronaut.velocityX=0;
    }
}

