class World {

    level = level1;
    character = new Character();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    camery_y = 0;
    statusBarHealth = new StatusBarHealth();
    statusBarCoins = new StatusBarCoins();
    statusBarBottles = new StatusBarBottles();
    statusBarEndboss = new StatusBarEndboss();
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowableObjects()
        }, 50);
    }

    checkThrowableObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x, this.character.y);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                console.log('Collission with Character', 'Left Energy:', this.character.energy);
                this.statusBarHealth.setPercentage(this.character.energy);
            }
        })
    }

    /*     checkCollisionsCollectibleObjects() {
            this.level..forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    console.log('Collission with Character', 'Left Energy:', this.character.energy);
                    this.statusBarHealth.setPercentage(this.character.energy);
                }
            })
        } */

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, this.camery_y);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.buildings);
        this.addObjectsToMap(this.level.collectibleObjects);

        this.ctx.translate(-this.camera_x, -this.camery_y);
        // ---------------- space for fixed objects -------------------
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarBottles);
        this.addToMap(this.statusBarEndboss);
        this.ctx.translate(this.camera_x, this.camery_y);

        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, this.camery_y);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object)
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }


}