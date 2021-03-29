let bx = 280;
let by = 530;
let boxSize = 37;
let overBox = false;
let locked = false;

function eventOne(){
  background('black');
  
  push();
  textAlign(CENTER, CENTER);
    fill('white');
    textStyle(BOLDITALIC);
    textSize(20);
    textFont('Menlo');
    text('choose your character', 200,405);
  pop();
  
  if (puff) {
    push();
     puffStart();
    pop();
  } else if (pengu){
    push();
     pengStart();
    pop();
  } else if (pb){
    push();
     pbStart();
    pop();
  }
  
  // Draw the box
  rect(bx, by, boxSize + 56 , boxSize - 2);
  
  image(next, 327, 548 , 95, 35);
  // test if cursor is over box
  if (
    mouseX > bx - (boxSize + 58) &&
    mouseX < bx + (boxSize + 58) &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
      stroke(255);
      fill('orange');
    }
  } else {
    stroke(156, 39, 176);
    fill('lightsalmon');
    overBox = false;
  }
  
}


function puffStart(){
  image(puffstand1, 200, 250, 130, 200);
}

function pengStart(){
  image(penguinstand1, 200, 250, 130, 200);
}

function pbStart(){
  image(pbstand1, 200, 250, 140, 200);
}
