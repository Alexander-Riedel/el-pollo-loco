class ThrowableObject extends MovableObject {

    //throw_sound = new Audio('audio/throw.wav');

    offset = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
    };

    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    constructor(x, y, direction) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.x = x + 30;
        this.y = y + 70;
        this.height = 400 / 6;
        this.width = 400 / 6;
        this.throw();
        this.direction = direction;
    }

    throw() {
        this.speedY = 20;
        this.applyBottleGravity();
        throw_sound.play();
        this.throwInterval = setInterval(() => {
            if (this.direction == true) {
                this.x -= 8;
            } else {
                this.x += 8;
            }
        }, 1000 / 60);
    }

    applyBottleGravity() {
        this.applyBottleGravityIntervall = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 45);
    }

    isCollidingWithBottle(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&       // R -> L
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&         // T -> B
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&            // L -> R
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom              // B -> T
    }

    splashAnimation(bottle, enemy) {
        bottle.offset.top = 250;
        clearInterval(this.throwInterval);
        if (enemy instanceof ChickenSmall || enemy instanceof Chicken) {
            clearInterval(this.applyBottleGravityInterval);
            this.x = enemy.x;
            this.y = enemy.y;
            this.speedY = 0;
            this.acceleration = 0;
        } else {
            this.x = bottle.x;
            this.y = bottle.y;
            this.speedY = -5;
            this.acceleration = 0.1;
            setInterval(() => {
                if (this.direction == true) {
                    this.x -= 4;
                } else {
                    this.x += 4;
                }
            }, 1000 / 30);
        }
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
        }, 1000 / 10);
    }

}