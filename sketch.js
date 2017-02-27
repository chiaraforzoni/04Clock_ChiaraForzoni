function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    var margineore = windowWidth / 24;
    var marginesecmin = windowWidth / 60;
    
    var ore = margineore * hour();
    var minutes = marginesecmin * minute();
    var seconds = marginesecmin * second();
    
    background('#6584ff');
    
    noStroke();
    fill('#ff6584');
    rect(0, 0, 0 + ore, windowHeight / 3);
    
    fill('#65ffe0');
    rect(0, windowHeight / 3, 0 + minutes,
         windowHeight / 3);
    fill('#ffe065');
    
    rect(0, windowHeight / 3 * 2, 0 + seconds, windowHeight / 3);
    
      textSize(90);
      fill('#6584ff');
     text(hour(),-160 +ore,windowHeight/3*0.6);
     text(minute(),-160 +minutes,windowHeight/3*1.6);
      text(second(),-160 +seconds,windowHeight/3*2.6);
      
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}