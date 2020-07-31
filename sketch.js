var bird;
var pipes = [];
let score = 0;
let isDead = false;

let docScore = document.getElementById('scoreView2');
let checkScore = false;

let stars = [];


function setup() {
    // noLoop();
    let canvas = createCanvas(400, 817);
    canvas.parent('container');
    bird = new Bird();
    pipes.push(new Pipe());



}
 
function draw() {

    if (frameCount % 60 === 0) score++;    
    

docScore.innerText = score;
    bird.fireHeight = 0;
    if (keyIsDown(32)) {
        bird.up();
        bird.fire();
    }
    background(5);
    bird.show();
    bird.update();

    if (frameCount % 80 === 0) {
        pipes.push(new Pipe());        
    }

    if (isDead) {
        frameRate(1);
        if (keyIsDown(13) || mouseIsPressed) {
                score = 0;
            frameRate(60);
            isDead = false;
        
            }
        }
        
    


    for (let i = 0; i < pipes.length; i++){
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].x <62 ) {
            bird.color = pipes[i].color;
            checkScore = true;

        }
        if (pipes[i].hits(bird)) {
            stroke(50);
            textSize(20);
            text('tab or press enter to restart', width / 2 - 120, height / 2);
            isDead = true;
            pipes.slice(0, 1);
        }
    if (pipes[i].offscreen()) {
        pipes.splice(i,1);
    }
    }

    if (mouseIsPressed) {
        bird.up();
    }

}


