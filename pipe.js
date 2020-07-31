function Pipe() {
    
    this.space = random(400,500);
    this.top = random(0,height - this.space);
    this.bottom = height - this.top-170;


    this.x = width;
    this.w = 30;
    this.speed = 2.5;
    if (score >= 10 && score < 20) this.speed = 3;
    else if (score >= 20 && score < 30) this.speed = 3.5;
    else if (score >= 30 && score < 40) this.speed = 4;
    else if (score >= 40 && score < 50) this.speed = 5;
    else if (score >= 50) this.speed = 7;
    this.color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    this.hits = function (bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                return true;  
            }
        }

    }

    this.show = function () {
    
        fill(this.color);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    }

    this.update = function () {
    
        this.x -= this.speed;

    }

    this.offscreen = function () {
    
        if (this.x < -500) {
            return true;
        } else {
            return false;
        }
    }

}