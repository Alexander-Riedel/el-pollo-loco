class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x + 30;
        this.y = y + 80;
        this.height = 400 / 6;
        this.width = 400 / 6;
        this.throw();
    }

    throw() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            this.x += 20;
        }, 1000 / 60)
    }

}