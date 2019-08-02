let button;
let changeBack;
let backr = 150;
let backg = 150;
let backb = 150;
let reset;

function myCheckedEvent() {
    if (this.checked()) {
      changeBack = true;
    } else {
      changeBack = false;
    }
  }

function setup() {
    createCanvas(displayWidth - 15, displayHeight - 130);
    background(150, 150, 150);
    
    rSlider = createSlider(0, 255, 0);
    rSlider.position(20, height - 160);
    gSlider = createSlider(0, 255, 0);
    gSlider.position(20, height - 130);
    bSlider = createSlider(0, 255, 0);
    bSlider.position(20, height - 100);
    sSlider = createSlider(1, 100, 10);
    sSlider.position(20, height-70);

    button = createButton("clear");
    button.position(20, height - 20);
    button.mousePressed(resetBG);

    checkbox = createCheckbox('background', false);
    checkbox.changed(myCheckedEvent);
    checkbox.position(80, height - 20)
}

function draw(){
    const r = rSlider.value();
    const g = gSlider.value();
    const b = bSlider.value();
    const sW = sSlider.value();

    strokeWeight(8);
    stroke(color(255, 255, 255));
    fill(r, g, b);
    rect(width-150, 0, 150, height)
    
    fill(150, 150, 150)
    rect(0, height - 190, width - 1040, height - 190)

    strokeWeight(0);
    fill(0, 0, 0);
    textSize(15);
    text('red', rSlider.x * 2 + rSlider.width, height - 150);
    text('green', gSlider.x * 2 + gSlider.width, height - 120);
    text('blue', bSlider.x * 2 + bSlider.width, height - 90);
    text('size', sSlider.x * 2 + sSlider.width, height - 60);

    if (changeBack){
        backr = r;
        backg = g;
        backb = b;
        background(backr, backg, backb);
        stroke(color(backr, backg, backb))
    }
    else {
        strokeWeight(110)
        line(width-220, height-60, width-220, height-60);
        strokeWeight(sW);
        stroke(color(0, 0, 0));
        line(width-220, height-60, width-220, height-60);
    }
    if (reset){
        background(backr, backg, backb);
        reset = false;
    }
}

function resetBG() {
    reset = true;
}

function mouseDragged() {
    const r = rSlider.value();
    const g = gSlider.value();
    const b = bSlider.value();
    const sW = sSlider.value();
    strokeWeight(sW);
    stroke(color(r, g, b));
    line(mouseX, mouseY, pmouseX, pmouseY);    
}

