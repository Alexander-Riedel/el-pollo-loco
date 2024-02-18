class ThrowableObject extends MovableObject {

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

    /**
     * Creates a new bottle object that is thrown.
     * @param {number} x - The x-coordinate where the bottle is placed.
     * @param {number} y - The y-coordinate where the bottle is placed.
     * @param {boolean} direction - The direction in which the bottle is thrown (true for left, false for right).
     */
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

    /**
     * Throws the bottle in the specified direction.
     * If the direction is true, moves the bottle to the left; otherwise, moves it to the right.
     */
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

    /**
     * Applies gravity to the bottle while it's in the air.
     * Updates the bottle's vertical position based on its current speed and acceleration.
     */
    applyBottleGravity() {
        this.applyBottleGravityIntervall = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 45);
    }

    /**
     * Checks if the character is colliding with a bottle object.
     * @param {Object} mo - The bottle object to check collision with.
     * @returns {boolean} - True if the character is colliding with the bottle, otherwise false.
     */
    isCollidingWithBottle(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&       // R -> L
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&         // T -> B
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&            // L -> R
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom              // B -> T
    }

    /**
     * Initiates the splash animation when a bottle hits an enemy.
     * @param {Object} bottle - The bottle object.
     * @param {Object} enemy - The enemy object.
     */
    splashAnimation(bottle, enemy) {
        bottle.offset.top = 1000;
        clearInterval(this.throwInterval);
        if (enemy instanceof ChickenSmall || enemy instanceof Chicken) {
            this.enemySplashAnimation(enemy);
        } else {
            this.endbossSplashAnimation(bottle);
        }
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
        }, 1000 / 10);
    }

    /**
     * Initiates the splash animation for hitting an enemy.
     * @param {Object} enemy - The enemy object.
     */
    enemySplashAnimation(enemy) {
        clearInterval(this.applyBottleGravityInterval);
        this.x = enemy.x - 10;
        this.y = enemy.y;
        this.speedY = 0;
        this.acceleration = 0;
    }

    /**
     * Initiates the splash animation for hitting the endboss.
     * @param {Object} bottle - The bottle object.
     */
    endbossSplashAnimation(bottle) {
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

}