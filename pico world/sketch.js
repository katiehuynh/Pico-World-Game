/*
Game system tutorial help from: https://www.youtube.com/watch?v=CyAOEisE8_k
JavaScript Doodle Jump!  Kaelinator

All characters from https://maples.im/

*/

// images 
let penguinjump, penguinfly;
let penguinstand1;
let pengcry;

let pbjump, pbfly;
let pbstand1;
let pbcry;

let puffjump, puffleap;
let puffstand1;
let puffcry;

let grizzChase, grizzHit;

// sounds
let jumpSound, click;
let cavestart, neko;

// control images
let arrow;
let numFish = 10;
let next, girl1, walkeu;
let manwalk, manstand;
let cloud, henesys;
let play;
let city;
let vx = 0, vy;
let jump;
let accel, velocity, mass; 

// commands
let start = true;
let s2 = false;
let s3 = false;
let event1 = false;
let event2 = false;
let event2a, event2b = false;
let event3 = false;
let event3a = false;
let event4a = false;
let event4 = false;
let event5 = false;
let event5b = false;
let event6 = false;

let theyvel = 0;
let currentplattform;
let currentplattform2;
let score = 0;
let myCanvas;
let sel;
let chara;
let puff, pengu, pb = false;
let jellyfishes = [];

function preload(){
  // sounds
  clickSound = loadSound('assets/music/click.mp3');
  jumpSound = loadSound('assets/jumpfx.mp3');
  cavestart = loadSound('assets/music/cavestart.mp3');
  neko = loadSound('assets/music/neko.mp3');
  
  // controls
  arrow = loadImage('assets/controls/leftarrow.png');
  city = loadImage('assets/controls/city.png');
  henesys = loadImage('assets/controls/henesys.jpg');
  next = loadImage('assets/controls/next.png');
  cloud = loadImage('assets/controls/cloud.png');
  play = loadImage('assets/controls/play.png');
  girl1 = loadImage('assets/girl1/stand1_0.png');
  walkeu = loadImage('assets/girl1/walkeu.gif');
  manwalk = loadImage('assets/girl1/manwalk.gif');
  manstand = loadImage('assets/girl1/manstand.png');
  
  //penguin
  penguinjump = loadImage('assets/penguin/angry_0.png');
  penguinfly = loadImage('assets/penguin/fly_0.png');
  penguinstand1 = loadImage('assets/penguin/penguinstand.gif');
  pengcry= loadImage('assets/penguin/pengcry.gif');
  
  // pink bean
  pbfly = loadImage('assets/pinkbean/fly_1.png');
  pbjump = loadImage('assets/pinkbean/jump_0.png');
pbstand1 = loadImage('assets/pinkbean/pinkbeanstand.gif');
  pbcry = loadImage('assets/pinkbean/pbcry.gif');

  // puffram
  puffjump = loadImage('assets/puffram/jump_0.png');
  puffleap = loadImage('assets/puffram/leapup_5.png');
  puffstand1 = loadImage('assets/puffram/puffstand.gif');
  puffcry = loadImage('assets/puffram/puffcry.gif');
  
  //grizz
  grizzChase = loadImage('assets/bear/chase.gif');
  
}

function setup() {
  //let canvasW = 400;
 // let canvasH = 600;
 // myCanvas = createCanvas(canvasW, canvasH);
  createCanvas(400, 600);
  //myCanvas.position((windowWidth-canvasW)/2,(windowHeight-canvasH)/2);
  
  vy = 0;  
  velocity = 0; 
  mass = 100; 
  accel = mass * 0.1; 
  
  for (let i = 0; i < numFish; i++) {
    jellyfishes.push(new jellyfish(i * 20, i * 20, 20 + random(40)));
  }
  
  plattformArr = [];
  player = new figure();
  player1 = new figure1();
  
  append(plattformArr, new plattform(width/2, height-20));
  append(plattformArr, new plattform(width/2, height-19));
  for(i=0;i<height/100;i++){
    append(plattformArr, new plattform(random(width), height-i*80));
  }
  
  //if(event1){
    push();
    textAlign(CENTER);
    sel = createSelect();
    sel.position(240, 360);
    sel.option('puffram');
    sel.option('penguin');
    sel.option('pink bean');
    sel.selected('puffram');
    sel.changed(mySelectEvent);
  pop();
  //}
  cavestart.play();
  
}

function draw() {
  background(220);
  
  if(start){
    starteu();
  } else if(s2){
    starteu2();
  } else if(s3){
    starteu3();
  } else if (event1) {
    push();
    eventOne(); 
    pop();
  } else if (event2){
    push();
    removeElements();
    cavestart.stop();
    eventTwo();
    pop();
 } else if(event2a){
   push();
   eventTwoA();
   pop();
 } else if(event2b){
   push();
   eventTwoB();
   pop();
 }else if(event3){
   //push();
   eventThree();
  // pop();
 }else if(event3a){
   push();
   eventThreeA();
   pop();
 } else if(event4a){
   push();
   eventFourA();
   pop();
 } else if(event4){
   push();
   eventFour();
   pop();
 } else if(event5){
   push();
   eventFive();
   pop();
 } else if(event5b){
   push();
   eventFiveB();
   pop();
 } else if(event6){
   push();
   eventSix();
   pop();
 }
   
}

function mySelectEvent() {
  let character = sel.value();
  neko.loop();
  
  if(character === 'puffram'){
    puff = true;
    pengu = false;
    pb = false;
    
  } else if(character === 'penguin'){
    puff = false;
    pengu = true;
    pb = false;
    
  } else if(character === 'pink bean'){
    puff = false;
    pengu = false;
    pb = true;
  }
}

function keyPressed(){
  if(keyCode == ENTER){
    start = false;
    s2 = false;
    s3 = false;
    event1 = false;
    event2 = false;
    event2a = false
    event3 = false;
    event3a = false;
    event4a = true;
  }
}

function mousePressed() {

  if (playoverBox) {
    playlocked = true;
    fill('white');
    start = false;
    clickSound.play();
    clickSound.setVolume(0.5);
    s2 = true;
    
  } else {
    playlocked = false;
  }
  
  if (s2overBox) {
    s2locked = true;
    fill('white');
    start = false;
    s2 = false;
    clickSound.play();
    clickSound.setVolume(0.5);
    s3 = true;
    
  } else {
    playlocked = false;
  }
  
  if (s3overBox) {
    s3locked = true;
    fill('white');
    start = false;
    s2 = false;
    s3 = false;
    clickSound.play();
    clickSound.setVolume(0.5);
    event1 = true;
    
  } else {
    playlocked = false;
  }
  
  if (overBox) {
    locked = true;
    fill(255, 255, 255);
    start = false;
    s2 = false;
    s3 = false;
    event1 = false;
    event2 = true;
    clickSound.play();
    clickSound.setVolume(0.5);
  } else {
    locked = false;
  }
  
  if (e2overBox) {
    e2locked = true;
    fill(255, 255, 255);
    start = false;
    s2 = false;
    s3 = false;
    event1 = false;
    event2 = false;
    event2a = false
    event3 = true;
    clickSound.play();
    clickSound.setVolume(0.5);
  } else {
    e2locked = false;
  }
  
  if (e2coverBox) {
    e2clocked = true;
    fill(255, 255, 255);
    start = false;
    s2 = false;
    s3 = false;
    event1 = false;
    event2 = false;
    event2a = false
    event3 = true;
    clickSound.play();
    clickSound.setVolume(0.5);
  } else {
    e2clocked = false;
  }
  
  if (e2coverBox) {
    e2clocked = true;
    fill(255, 255, 255);
    start = false;
    s2 = false;
    s3 = false;
    event1 = false;
    event2 = false;
    event2a = false
    event3 = true;
    clickSound.play();
    clickSound.setVolume(0.5);
  } else {
    e2clocked = false;
  }
  
  if (e3overBox) {
    e3locked = true;
    fill(255, 255, 255);
    start = false;
    s2 = false;
    s3 = false;
    event1 = false;
    event2 = false;
    event2a = false
    event3 = false;
    event3a = true;
    clickSound.play();
    clickSound.setVolume(0.5);
  } else {
    e3locked = false;
  }
  
  if (e3poverBox) {
    e3plocked = true;
    fill(255, 255, 255);
    start = false;
    s2 = false;
    s3 = false;
    event1 = false;
    event2 = false;
    event2a = false
    event3 = false;
    event3a = false;
    event4a = true;
    clickSound.play();
    clickSound.setVolume(0.5);
  } else {
    e3plocked = false;
  }
  
  if (e4overBox) {
    e4locked = true;
    fill(255, 255, 255);
    start = false;
    s2 = false;
    s3 = false;
    event1 = false;
    event2 = false;
    event2a = false
    event3 = false;
    event3a = false;
    event4a = false;
    event4 = false;
    event5 = true;
    clickSound.play();
    clickSound.setVolume(0.5);
  } else {
    e4locked = false;
  }
  
  if (e5aoverBox) {
    e5alocked = true;
    fill(255, 255, 255);
    start = false;
    s2 = false;
    s3 = false;
    event1 = false;
    event2 = false;
    event2a = false
    event3 = false;
    event3a = false;
    event4a = false;
    event4 = false;
    event5 = false;
    event5b = true;
    clickSound.play();
    clickSound.setVolume(0.5);
  } else {
    e5alocked = false;
  }

  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}
