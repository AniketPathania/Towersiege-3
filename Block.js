class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
    score(){
      if(this.visibility<0 && this.visibility >-105){
        score++;
      }
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed <3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,30, 40);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      pop();
      
    }
  }
}
