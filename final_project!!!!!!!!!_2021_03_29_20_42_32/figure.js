class figure {
  constructor() {
    this.pos = createVector(width / 2, height / 5 * 4);
    this.vel = createVector(0, 0);
  }
  
  check(other) {
    if (other.pos.x-20-10 < this.pos.x && other.pos.x+20+10 > this.pos.x && (other.pos.y - this.pos.y < 25 && other.pos.y - this.pos.y > 0) && this.vel.y > 0) {
      this.vel = createVector(0, -6)
      if(currentplattform != other){
        jumpSound.play();
        currentplattform2 = currentplattform;
        currentplattform = other;
        
        plattformArr.splice(0, 1);
        append(plattformArr, new plattform());
        score += 1;
        
      }

    }
  }

  update() {
    if(keyIsDown(LEFT_ARROW)){
      this.pos.x -= 5
    }else if(keyIsDown(RIGHT_ARROW)){
      this.pos.x += 5
    }
    if(this.pos.x < 0){
       this.pos.x = width;
    }else if(this.pos.x > width){
       this.pos.x = 0;
    }
    
    this.vel.y += 0.2;
    this.pos.add(this.vel);
    theyvel = this.vel.y;
    
    
    if(keyCode === SHIFT ){
      for (let i = 0 ; i < jellyfishes.length; i++) {
        if (jellyfishes[i].contains(this.pos.x, this.pos.y)) {
          //hurty = true;
          //jellyfishes[i].hurt();
          
          jellyfishes.splice(i, 1);
          //invaderSize += 10;
        }
      }
    }
 
  }
  

  show(otherr) {
    imageMode(CENTER);
    fill(0);
      if (puff) {
    push();
     // if(currentplattform != other){
      //  puffLand(this.pos.x, this.pos.y);
      //} else{
        puffFly(this.pos.x, this.pos.y);
      //}
    pop();
  } else if (pengu){
    push();
    //if(currentplattform != other){
     //   pengLand(this.pos.x, this.pos.y);
  //  } else{
      pengFly(this.pos.x, this.pos.y);
    //}
    pop();
  } else if (pb){
    push();
    /*if(currentplattform != other){
        pbLand(this.pos.x, this.pos.y);
      } else{*/
        pbFly(this.pos.x, this.pos.y);
      //}
     //pbFly(this.pos.x, this.pos.y);
     
    pop();
  }
    
    //rect(this.pos.x, this.pos.y, 20, 40)
  }
  

  
}

function puffFly(posx, posy){
  image(puffjump, posx, posy);
}

function pengFly(posx, posy){
  image(penguinfly, posx, posy);
}

function pbFly(posx, posy){
  image(pbfly, posx, posy);
}

function puffLand(posx, posy){
  image(puffleap, posx, posy);
}

function pengLand(posx, posy){
  image(penguinjump, posx, posy);
}

function pbLand(posx, posy){
  image(pbjump, posx, posy);
}



