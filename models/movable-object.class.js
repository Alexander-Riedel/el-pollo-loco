class MovableObject extends DrawableObject {

    width = 95;
    speed = 3;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    coins = 0;
    bottles = 0;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 45)
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

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
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
        //this.collect_coin_sound.volume = 0.1;
        //this.collect_coin_sound.play();
    }

    collectBottle() {
        this.bottles++;
        //this.collect_bottle_sound.volume = 0.1;
        //this.collect_bottle_sound.play();
    }

}