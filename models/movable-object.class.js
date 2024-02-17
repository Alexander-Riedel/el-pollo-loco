class MovableObject extends DrawableObject {

    width = 95;
    height = 0;
    speed = 3;
    otherDirection = false;
    speedY = 0;
    speedX = 0;
    acceleration = 2;
    energy = 100;
    coins = 0;
    bottles = 0;
    lastHit = 0;
    offset = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    };

    /**
     * Applies gravity to the object by decreasing its vertical position (y-coordinate) based on its vertical speed and acceleration.
     */
    applyGravity() {
        this.applyGravityIntervall = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 45);
    }

    /**
     * Checks if the object is above the ground. For ThrowableObject instances, it always returns true.
     * For other objects, it returns true if the y-coordinate is less than 227.
     * @returns {boolean} - True if the object is above the ground, false otherwise.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 227;
        }
    }

    /**
     * Plays an animation by updating the image of the object based on the provided array of image paths.
     * @param {string[]} images - Array of image paths representing the animation frames.
     */
    playAnimation(images) {
        let i = this.currentImage++ % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Moves the object to the right by increasing its horizontal position (x-coordinate) based on its speed.
     * @param {string} object - The type of object being moved ('character', 'enemy', etc.).
     */
    moveRight(object) {
        if (object == 'character' && !this.isAboveGround() && this.y != 227) {
            this.y = 227;
        }
        this.x += this.speed;
        this.otherDirection = false;
        //level1.moveBackgroundObjects(0, this.speed);
    }

    /**
     * Moves the object to the left by decreasing its horizontal position (x-coordinate) based on its speed.
     * @param {string} object - The type of object being moved ('character', 'enemy', etc.).
     */
    moveLeft(object) {
        if (object == 'character' && !this.isAboveGround() && this.y != 227) {
            this.y = 227;
        }
        this.x -= this.speed;
        //level1.moveBackgroundObjects(0, this.speed);
    }

    /**
     * Initiates a jump for the object with the given vertical and horizontal speeds.
     * If no speeds are provided, default values are used.
     * @param {number} [speedY=25] - The vertical speed of the jump.
     * @param {number} [speedX=0] - The horizontal speed of the jump.
     */
    jump(speedY, speedX) {
        if (speedY == undefined || speedX == undefined) {
            this.speedY = 25;
            this.speedX = 0;
        } else {
            this.speedY = speedY;
            this.speedX = speedX;
        }
    }

    /**
     * Reduces the energy of the object when hit, if its energy is greater than 0 and the last hit was more than 600 milliseconds ago.
     */
    hit() {
        if (this.energy > 0 && new Date().getTime() - this.lastHit > 600) {
            this.energy -= 20;
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the object is currently hurt based on the time since the last hit.
     * @returns {boolean} - True if the object is hurt, false otherwise.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }

    /**
     * Checks if the object is dead by verifying if its energy is equal to 0.
     * @returns {boolean} - True if the object is dead, false otherwise.
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Increases the number of coins collected by the object and plays a sound effect.
     */
    collectCoin() {
        this.coins++;
        collect_coin_sound.play();
    }

    /**
     * Increases the number of bottles collected by the object and plays a sound effect.
     */
    collectBottle() {
        this.bottles++;
        collect_bottle_sound.play();
    }

}