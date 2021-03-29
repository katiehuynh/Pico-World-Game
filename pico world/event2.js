let time = 10;

let e2bx = 190;
let e2by = 555;
let e2boxSize = 37;
let e2overBox = false;
let e2locked = false;

let e2cbx = 190;
let e2cby = 555;
let e2cboxSize = 37;
let e2coverBox = false;
let e2clocked = false;

function eventTwo(){
  background('lightblue');
  
  textAlign(CENTER);
    if (frameCount % 60 === 0 && time > 0) {
      time--;
    } else if (time === 0) {
      if(score < 15){
        event2 = false;
        event2a = true;
      } else{
        event2 = false;
        event2b = true;
      }
    }
    
    push();
    fill('white');
    text(time, width / 2, 100);
    textStyle(BOLD);
    text("LEVEL ONE", width/2, 85);
    pop();
  
  for(i=0;i<plattformArr.length;i++){
    if(currentplattform != currentplattform2){
      plattformArr[i].shiftdown();
    }
    
    player.check(plattformArr[i]);
    plattformArr[i].update();
    plattformArr[i].show();
  }
  
  player.update();
  player.show();
  
  push();
  textStyle(BOLDITALIC)
  textSize(30);
  text(score.toString(), 20, 50);
  pop();
}


function eventTwoA() {
  background('lightblue');
  
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
    text("Oh no!!", 20, 500);
  text("Looks like you fell", 20, 520);
  text("We'll proceed anyways...", 20, 540);
  
  image(girl1, 370, 500, 250,400);
  //image(girl1, 220, 300, 250,400);
  pop();
  
  // Draw the box
  push();
  //rect(e2bx, e2by, e2boxSize + 56, e2boxSize - 2);
  rect(e2bx, e2by, e2boxSize + 56, e2boxSize - 2);
  
  image(next, 237, 572 , 93, 35);
  //image(next, 180, 554 , 93, 35);
  // test if cursor is over box
  if (
    mouseX > e2bx - (e2boxSize + 58) &&
    mouseX < e2bx + (e2boxSize + 58) &&
    mouseY > e2by - e2boxSize &&
    mouseY < e2by + e2boxSize
  ) {
    e2overBox = true;
    if (!e2locked) {
      stroke(255);
      fill('orange');
    }
  } else {
    stroke(156, 39, 176);
    fill('lightsalmon');
    e2overBox = false;
  }
    pop();
}

function eventTwoB() {
  background('lightblue');
  
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
    text("Wow!!", 20, 500);
  text("You're good!", 20, 520);
  text("Let's proceed...", 20, 540);
  
  image(girl1, 370, 500, 250,400);
  //image(girl1, 220, 300, 250,400);
  pop();
  
  // Draw the box
  push();
  //rect(e2bx, e2by, e2boxSize + 56, e2boxSize - 2);
  rect(e2cbx, e2cby, e2cboxSize + 56, e2cboxSize - 2);
  
  image(next, 237, 572 , 93, 35);
  
  // test if cursor is over box
  if (
    mouseX > e2cbx - (e2cboxSize + 58) &&
    mouseX < e2cbx + (e2cboxSize + 58) &&
    mouseY > e2cby - e2cboxSize &&
    mouseY < e2cby + e2cboxSize
  ) {
    e2coverBox = true;
    if (!e2clocked) {
      stroke(255);
      fill('orange');
    }
  } else {
    stroke(156, 39, 176);
    fill('lightsalmon');
    e2coverBox = false;
  }
    pop();
}
