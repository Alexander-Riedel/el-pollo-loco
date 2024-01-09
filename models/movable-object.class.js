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
    //collect_coin_sound = new Audio('audio/coin.wav');
    //collect_bottle_sound = new Audio('audio/bottle.wav');
    offset = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    };

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 45);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 227;
        }
    }

    playAnimation(images) {
        let i = this.currentImage++ % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight(object) {
        if (object == 'character' && !this.isAboveGround() && this.y != 227) {
            this.y = 227;
        }
        this.x += this.speed;
        this.otherDirection = false;
        //level1.moveBackgroundObjects(0, this.speed);
    }

    moveLeft(object) {
        if (object == 'character' && !this.isAboveGround() && this.y != 227) {
            this.y = 227;
        }
        this.x -= this.speed;
        //level1.moveBackgroundObjects(0, this.speed);
    }

    jump(speedY, speedX) {
        if (speedY == undefined || speedX == undefined) {
            this.speedY = 25;
            this.speedX = 0;
        } else {
            this.speedY = speedY;
            this.speedX = speedX;
        }
    }

    hit() {
        if (this.energy > 0 && new Date().getTime() - this.lastHit > 500) {
            this.energy -= 20;
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    collectCoin() {
        this.coins++;
        collect_coin_sound.play();
    }

    collectBottle() {
        this.bottles++;
        collect_bottle_sound.play();
    }

}