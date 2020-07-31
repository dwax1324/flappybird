function Bird() {
    this.x = 64;
    this.y = height / 2;

    this.gravity = 0.18;
    this.lift = -0.48;
    this.velocity = 0;
    this.color = 255;
    this.fireHeight = 0;
    this.show = function () {
        stroke(100);
         fill(255,0,0);
        ellipse(this.x + 5, this.y + 15, 10, 10);
                 fill(0,255,0);
        ellipse(this.x-5, this.y+15, 10, 10);
        fill(this.color);
        ellipse(this.x, this.y, 32, 32);
        ellipse(this.x, this.y, 50, 10);
        fill(255,0,0);
        ellipse(this.x - 10, this.y, 5, 5);
        fill(0,255,0);
        ellipse(this.x, this.y, 5, 5);
        fill(0,0,255);
        ellipse(this.x + 10, this.y, 5, 5);



    }

    this.up = function () {
        this.velocity += this.lift;
    }

    this.update = function () {
        if (this.velocity < -7) this.velocity = -7;
        if (this.velocity > 7) this.velocity = 7;
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;

        } else if (this.y < 0) {
            this.y = 0;
        }
        fill(0, 255, 0);
        rect(this.x + 6, this.y + 25, 5, this.fireHeight - 4);
                fill(255, 0, 0);

        rect(this.x - 2, this.y + 25, 5, this.fireHeight - 2);
                fill(0, 0, 255);

        rect(this.x-10, this.y + 25, 5, this.fireHeight);
    
        
    }

    this.fire = function(){
        this.fireHeight = 15;
    
    }
  




}