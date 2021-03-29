
let hurty = false;
let health = 300;
let time2 = 12;

let e4bx = 190;
let e4by = 555;
let e4boxSize = 37;
let e4overBox = false;
let e4locked = false;

function eventFourA(){
  background('lightblue');
  
  textAlign(CENTER);
    if (frameCount % 60 === 0 && time2 > 0) {
      time2--;
    } else if (time2 === 0) {
        event4a = false;
        event4 = true;
    }
    
    push();
    fill('white');
    text(time2, width / 2, 100);
    textStyle(BOLD);
    text("LEVEL TWO", width/2, 85);
    pop();
  
  for (var i = 0; i < jellyfishes.length; i++) {
      jellyfishes[i].swim();
      jellyfishes[i].checkEdges();
    }
  
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
  
  push();
  textStyle(BOLDITALIC)
  textSize(12);
  text("jellyfish defeated: " + (numFish - jellyfishes.length), 75, 70);
  pop();
}

function eventFour(){
  background('lightblue');
  textStyle(BOLDITALIC);
  fill('white');
    text("LEVEL TWO OVER", width / 2 - 70, height / 2 - 100);
  
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
    text("That was hard huh..", 20, 500);
  text("It's okay, we'll move on.", 20, 520);
  //text("We'll proceed anyways...", 20, 540);
  
  image(girl1, 370, 500, 250,400);
  //image(girl1, 220, 300, 250,400);
  pop();
  
  // Draw the box
  push();
  //rect(e2bx, e2by, e2boxSize + 56, e2boxSize - 2);
  rect(e4bx, e4by, e4boxSize + 56, e2boxSize - 2);
  
  image(next, 237, 572 , 93, 35);
  //image(next, 180, 554 , 93, 35);
  // test if cursor is over box
  if (
    mouseX > e4bx - (e4boxSize + 58) &&
    mouseX < e4bx + (e4boxSize + 58) &&
    mouseY > e4by - e4boxSize &&
    mouseY < e4by + e4boxSize
  ) {
    e4overBox = true;
    if (!e4locked) {
      stroke(255);
      fill('orange');
    }
  } else {
    stroke(156, 39, 176);
    fill('lightsalmon');
    e4overBox = false;
  }
    pop();
}