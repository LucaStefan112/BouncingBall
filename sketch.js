let x = 400, y = 25, x_size = 40, y_size = 40, speed = 1;

function drawCerc(){
  background(255);
  stroke(0);
  line(0, 600, 800, 600);
  stroke(255, 0, 0);
  ellipse(x, y, x_size, y_size);
}

function updateCerc(){

  if(y + y_size / 2 + speed < 600)

    if(speed < 6)
      
      speed += 1;
  
  else
    
    speed *= 1.07;
  
  else{
    
    if(abs(speed) < 2){
      y = 600 - y_size / 2;      
      speed = 0;
    }
    
    else{
      y = 600 - y_size / 2;
      speed = (-0.8) * speed;
    }
  }
 
  y += speed;
  
  x_size = 40 - speed * 0.1;
  y_size = 40 + speed * 0.1;
}

function setup() {
  createCanvas(800, 700);
  noFill();
  strokeWeight(4);
}

function draw() {
  drawCerc();
  updateCerc(x, y);
}