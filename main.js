function preload() {

}

function setup() {
    canvas = createCanvas(950,550);
    canvas.position = (900,900);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw() { 
 fill(0,255,255);
 stroke(0,255,255);   
 rect(110,20,700,55);
 rect(110,470,700,55);
 rect(55,23,55,500);
 rect(800,23,55,500);
 fill(255,105,180);
 stroke(255,105,180);
 circle(80,490,90);
 circle(80,49,90);
 circle(831,490,90);
 circle(831,49,90);
 image(video,300,120,300,300);
}

function take_snapshot() {
    save('My_Image_Filter');
}

