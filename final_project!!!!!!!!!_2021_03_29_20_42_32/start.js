
let playbx = 158;
let playby = 283;
let playboxSize = 32;
let playoverBox = false;
let playlocked = false;
let posX = 0;

let s2bx = 190;
let s2by = 555;
let s2boxSize = 37;
let s2overBox = false;
let s2locked = false;

let s3bx = 190;
let s3by = 555;
let s3boxSize = 37;
let s3overBox = false;
let s3locked = false;

let phrase1 = "Welcome to Pico!";



function starteu(){
  
    imageMode(CENTER);
    background('black');
    
    push();
    textAlign(CENTER, CENTER);
    fill('white');
    strokeWeight(10);
    stroke(random(100,200), random(200,230), random(100,250));
    textStyle(BOLDITALIC);
    textFont('Menlo');
    textSize(40);
    text('pico', 200,230);
    //image(startButton,350, windowHeight/2 +70, 140,90);
    pop();
    
    // Draw the box
  rect(playbx, playby, playboxSize + 50, playboxSize);
  
  image(play, 200,300, 100,50);
  
  // test if cursor is over box
  if (
    mouseX > playbx - (playboxSize + 58) &&
    mouseX < playbx + (playboxSize + 58) &&
    mouseY > playby - playboxSize &&
    mouseY < playby + playboxSize
  ) {
    playoverBox = true;
    if (!playlocked) {
      stroke(255);
      fill('orange');
    }
  } else {
    stroke(156, 39, 176);
    fill('lightsalmon');
    playoverBox = false;
  }
  
  
}

function starteu2(){
  image(henesys, 600,300);

   push();
    fill('black');
    noStroke();
    rect(0,0, 800, 200);
    pop();
    
    push();
    noStroke();
    fill('black');
    rect(0, 450, 800, 200);
    pop(); 
  
  if(posX < -120){
    fill('white');
    textSize(12);
   text(phrase1, 20, 500);
    text("Here, you will have two quests", 20, 520);
    text("to complete.", 20, 540);
    
    image(girl1, 270,270);
    
    image(girl1, 370, 500, 250,400);
    
    
    push();
  // Draw the box
  rect(s2bx, s2by, s2boxSize + 56, s2boxSize - 2);
  
  image(next, 237, 572 , 93, 35);
  // test if cursor is over box
  if (
    mouseX > s2bx - (s2boxSize + 58) &&
    mouseX < s2bx + (s2boxSize + 58) &&
    mouseY > s2by - s2boxSize &&
    mouseY < s2by + s2boxSize
  ) {
    s2overBox = true;
    if (!s2locked) {
      stroke(255);
      fill('orange');
    }
  } else {
    stroke(156, 39, 176);
    fill('lightsalmon');
    s2overBox = false;
  }
pop();
     
    
  } else{
    push();
    translate(posX--, 0);
    image(walkeu, width-4,270); 
    pop();
  } 

}

function starteu3(){
  image(henesys, 600,300);

   push();
    fill('black');
    noStroke();
    rect(0,0, 800, 200);
    pop();
    
    push();
    noStroke();
    fill('black');
    rect(0, 450, 800, 200);
    pop();
  
    push();
    fill('white');
    textSize(12);
    text("First, choose your character.", 20, 500);
    text("Then, use arrow keys to meet me", 20, 520);
    text("on the next level!", 20, 540);
    text("Get at least 15 points!", 20, 560);
    pop();
  
    image(girl1, 270,270);
    image(girl1, 370, 500, 250,400);
  
  // Draw the box
  push();
  rect(s3bx, s3by, s3boxSize + 56, s3boxSize - 2);
  
  image(next, 237, 572 , 93, 35);
  // test if cursor is over box
  if (
    mouseX > s3bx - (s3boxSize + 58) &&
    mouseX < s3bx + (s3boxSize + 58) &&
    mouseY > s3by - s3boxSize &&
    mouseY < s3by + s3boxSize
  ) {
    s3overBox = true;
    if (!s3locked) {
      stroke(255);
      fill('orange');
    }
  } else {
    stroke(156, 39, 176);
    fill('lightsalmon');
    s3overBox = false;
  }
    pop();
  
}