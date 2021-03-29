class plattform {
  constructor(x, y){
    if(y){
      this.pos = createVector(x, y)
    }else{
       this.pos = createVector(random(width*0.05, width*0.95), 0-10)
    }
  }
  
  update(){
    this.pos.y -= theyvel
  }
  
  shiftdown(){
    this.pos.y += 1.6
  }
  
  show(){
    rectMode(CENTER)
    fill(0, 220, 30)
    image(cloud, this.pos.x, this.pos.y, 60, 35);
    //rect(this.pos.x, this.pos.y, 40, 10)
  }
  
  
}