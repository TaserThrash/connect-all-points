function setup() {
  createCanvas(400, 600);
  translate(200,200);
  text("enter a number: "+x,0,220);
}

var x="";

function keyPressed(){
  if(int(key)>=0){
    x+=key;
    text("enter a number: "+x,0,220);
  }
  else{
    background("#ffffff");
    x=int(x);
    var v=[];
    for(let i=1.5;i<x+1.5;i++){
      v.push([sin(2*PI/x*i)*180,cos(2*PI/x*i)*180]);
    }
    for(let i of v){
      for(let j of v){
        if(i!=j){
          line(i[0],i[1],j[0],j[1]);
        }
      }
    }
    x="";
    text("enter a number: "+x,0,220);
  }
}