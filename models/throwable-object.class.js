class ThrowableObject extends MovableObject {

    throw_sound = new Audio('audio/throw.wav');

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x + 30;
        this.y = y + 70;
        this.height = 400 / 6;
        this.width = 400 / 6;
        this.throw();
    }

    throw() {
        this.speedY = 18;
        this.applyGravity();
        this.throw_sound.volume = 0.1;
        this.throw_sound.play();
        setInterval(() => {
            this.x += 12;

        }, 1000 / 60);
    }

}