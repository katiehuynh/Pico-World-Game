let ppox = 0;
let e5abx = 190;
let e5aby = 555;
let e5aboxSize = 37;
let e5aoverBox = false;
let e5alocked = false;

let e5bbx = 190;
let e5bby = 555;
let e5bboxSize = 37;
let e5boverBox = false;
let e5blocked = false;

function eventFive(){
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
  
  push();
  if(ppox < 230 ){
    translate(ppox++, 0);
    image(manwalk, 0,vy-200, 110,220);
  } else{
    image(manstand, 260, vy-200, 110,220);
  }
  pop();
  
      if (puff) {
    push();
        image(puffjump, vx, vy - 100);
    pop();
  } else if (pengu){
    push();
      image(penguinfly, vx, vy - 100); 
    pop();
  } else if (pb){
    push();
        image(pbfly, vx, vy - 100);
     
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
    text("Hi, I'm Bert.", 50, 500);
  text("I'm glad you've made it this far.", 50, 520);
  text("You have now finished the demo of this game", 50, 540);
  
  //image(girl1, 370, 500, 250,400);
  //image(girl1, 220, 300, 250,400);
  pop();
  
  // Draw the box
  push();
  //rect(e2bx, e2by, e2boxSize + 56, e2boxSize - 2);
  rect(e5abx, e5aby, e5aboxSize + 56, e2boxSize - 2);
  
  image(next, 237, 572 , 93, 35);
  //image(next, 180, 554 , 93, 35);
  // test if cursor is over box
  if (
    mouseX > e5abx - (e5aboxSize + 58) &&
    mouseX < e5abx + (e5aboxSize + 58) &&
    mouseY > e5aby - e5aboxSize &&
    mouseY < e5aby + e5aboxSize
  ) {
    e5aoverBox = true;
    if (!e5alocked) {
      stroke(255);
      fill('orange');
    }
  } else {
    stroke(156, 39, 176);
    fill('lightsalmon');
    e5aoverBox = false;
  }
    pop();
  
}

function eventFiveB(){
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
  
  push();
    image(manstand, 260, vy-200, 110,220);
  pop();
  
      if (puff) {
    push();
        image(puffjump, vx, vy - 100);
        if(vx < 0){
      event5b = false;
      event6 = true;
    }
    pop();
  } else if (pengu){
    push();
      image(penguinfly, vx, vy - 100);
    if(vx < 0){
      event5b = false;
      event6 = true;
    }
    pop();
  } else if (pb){
    push();
        image(pbfly, vx, vy-100);
    if(vx < 0){
      event5b = false;
      event6 = true;
    }
     
    pop();
  }
  
  image(arrow, 100, 100, 50, 50);
  image(arrow, 140, 100, 50, 50);
  
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
    text("Keep going left using your arrow keys.", 50, 500);
  text("Jump with SHIFT", 50, 520);
  
  //image(girl1, 370, 500, 250,400);
  //image(girl1, 220, 300, 250,400);
  pop();
  
}

function movenav(){
  //navigation
    if (keyIsDown(LEFT_ARROW)) {
      vx -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      vx += 5;
    }

    /*if (keyIsDown(UP_ARROW)) {
      vy -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      vy += 5;
    }*/
  
  if(keyIsDown(SHIFT)){
    jumpSound.play();
    vy = 320;  
    velocity = 0;
  }
}