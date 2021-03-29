let poy = 0;
let ev3Time = 10;
let e3bx = 190;
let e3by = 555;
let e3boxSize = 37;
let e3overBox = false;
let e3locked = false;

let e3pbx = 190;
let e3pby = 555;
let e3pboxSize = 37;
let e3poverBox = false;
let e3plocked = false;


function eventThree(){
  ev3Time--;
  background('lightblue');
  
  if (puff) {
    push();
     puffFall();
    pop();
  } else if (pengu){
    push();
     pengFall();
    pop();
  } else if (pb){
    push();
     pbFall();
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
    text("You're falling!!!!", 20, 500);
  
  image(girl1, 370, 500, 250,400);
  //image(girl1, 220, 300, 250,400);
  pop();
  
  // Draw the box
  push();
  rect(e3bx, e3by, e3boxSize + 56, e3boxSize - 2);
  
  image(next, 237, 572 , 93, 35);
  // test if cursor is over box
  if (
    mouseX > e3bx - (e3boxSize + 58) &&
    mouseX < e3bx + (e3boxSize + 58) &&
    mouseY > e3by - e3boxSize &&
    mouseY < e3by + e3boxSize
  ) {
    e3overBox = true;
    if (!e3locked) {
      stroke(255);
      fill('orange');
    }
  } else {
    stroke(156, 39, 176);
    fill('lightsalmon');
    e3overBox = false;
  }
    pop();
  
}

function puffFall(){
  translate(0, poy++);
  rotate(5);
  image(puffcry, 220, 10, 80,80);
  
}

function pengFall(){
  translate(0, poy++);
  rotate(5);
  image(pengcry, 220, 10, 80,80);
}

function pbFall(){
  translate(0, poy++);
  rotate(5);
  image(pbcry, 220, 5, 80,80);
}

function eventThreeA(){
  ev3Time--;
  background('lightblue');
  image(henesys, 600,300);
  
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
    text("Let's head to your next quest.", 20, 500);
  text("Use SHIFT to defeat the mobs!", 20, 520);
  
  image(girl1, 370, 500, 250,400);
  //image(girl1, 220, 300, 250,400);
  pop();
  
  // Draw the box
  push();
  rect(e3pbx, e3pby, e3pboxSize + 56, e3pboxSize - 2);
  
  push();
  fill('orange');
  textSize(13);
  textStyle(BOLD);
  text("press ENTER", 198,576);
  pop();
  image(next, 237, 572 , 93, 35);
  // test if cursor is over box
  if (
    mouseX > e3pbx - (e3pboxSize + 58) &&
    mouseX < e3pbx + (e3pboxSize + 58) &&
    mouseY > e3pby - e3pboxSize &&
    mouseY < e3pby + e3pboxSize
  ) {
    e3poverBox = true;
    if (!e3plocked) {
      stroke(255);
      fill('orange');
    }
  } else {
    stroke(156, 39, 176);
    fill('lightsalmon');
    e3poverBox = false;
  }
    pop();
  
}