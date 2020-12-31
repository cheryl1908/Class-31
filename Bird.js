class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectary=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10){
    var pos=[this.body.position.x,this.body.position.y]
    this.trajectary.push(pos);
    }
    //[[x1,y1],[x2,y2],[x3,y3]]
   /* x1=[0][0]
    x2=[1][0]
    x3=[2][0]*/
    for(var i=0;i<this.trajectary.length;i++){
      image(this.smoke,this.trajectary[i][0],this.trajectary[i][1]);
    }
  }
}
