let dist = 50;
let d = 200;
let r = d/2;
let size = 500;

function setup() {
  createCanvas(size, size);
  let cord = 2*sqrt(r*r-dist*dist/4);
}

function draw() {
  background(255);
  
  if (dist>d) {
    dist = d;
  }
  cord = 2*sqrt(r*r-dist*dist/4)
  
  noFill();
  strokeWeight(3);
  ellipse(width/2-dist/2, height/2, d);
  ellipse(width/2+dist/2, height/2, d);
  
  strokeWeight(1);
  line(width/2-dist/2, height/2, width/2+dist/2, height/2);
  line(width/2, height/2-sqrt(r*r-dist*dist/4), width/2, height/2+sqrt(r*r-dist*dist/4));
  
  
  strokeWeight(5)
  point(width/2-dist/2, height/2);
  point(width/2+dist/2,  height/2);
  
  textSize(30);
  fill(0);
  text("Distance: " + floor(dist), 0, 30);
  text("Cord: " + floor(cord), 0, 90);
  text("Ratio: " + float(sq(dist) + sq(cord)), height/2, 30);
  //text("Ratio2: " + 2*sqrt(r*r-dist*dist/4)/sq(dist), height/2, 90);

}

function mousePressed() {
  let setTo = map(mouseY, 0, size, 0, d);
  dist = setTo;
}