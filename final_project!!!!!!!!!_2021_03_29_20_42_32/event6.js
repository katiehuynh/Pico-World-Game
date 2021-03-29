let pwe = 200;
function eventSix(){
  background('yellow');
  
  image(city,0,100);
  velocity += accel; 
  vy += velocity;
  
  if (vy > (height - mass/2 - 100)) {
    // little dampening when hitting the bottom
    velocity *= -0.7;
    vy = height - mass/2 - 100;
  }
  
  movenav();
  //player.show();
  //player.update();
  imageMode(CENTER);
    fill(0);
  
      if (puff) {
    push();
        push();
        if(pwe > 100 ){
        translate(ppox--, 0);
        image(puffjump, 395,vy-100, 110,220);
          } else{
         image(puffjump, vx, vy - 100);
  }
  pop();
    pop();
  } else if (pengu){
    push();
      push();
        if(pwe > 100 ){
          
        translate(ppox--, 0);
        image(penguinfly, 395,vy-100, 110,220);
          } else{
         image(penguinfly, vx, vy - 100);
  }
  pop();
    pop();
  } else if (pb){
    push();
        push();
        if(pwe >100 ){
          ppox = ppox - 2;
        translate(ppox--, 0);
        image(pbfly, 395,vy-100, 110,220);
          } else{
         image(pbfly, vx, vy - 100);
  }
  pop();
     
    pop();
  }
  
  push();
    noStroke();
    fill('black');
    rect(0, 450, 800, 200);
    pop();

  push();
  noStroke();
  textSize(20);
  textStyle(BOLDITALIC);
  fill('white');
    textSize(12);
    text("great!", 50, 500);
    text("you've finished the game!", 50, 520);
  
  
  //image(girl1, 370, 500, 250,400);
  //image(girl1, 220, 300, 250,400);
  pop();
}