class ThrowableObject extends MovableObject {

    throw_sound = new Audio('audio/throw.wav');

    constructor(x, y, direction) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x + 30;
        this.y = y + 70;
        this.height = 400 / 6;
        this.width = 400 / 6;
        this.throw();
        this.direction = direction;
    }

    throw() {
        this.speedY = 20;
        this.applyGravity();
        this.throw_sound.volume = 0.1;
        this.throw_sound.play();
        setInterval(() => {
            if (this.direction == true) {
                this.x -= 8;
            } else {
                this.x += 8;
            }
        }, 1000 / 60);
    }

    isCollidingWithBottle(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&       // R -> L
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&         // T -> B
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&            // L -> R
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom              // B -> T
    }

}