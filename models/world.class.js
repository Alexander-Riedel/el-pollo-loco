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
    coins = 0;
    coinsTotal = this.level.collectibleObjects.filter(obj => obj instanceof Coin).length;
    bottles = 0;

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
            this.checkCollisionsCollectibleObjects();
        }, 25);

        setInterval(() => {
            this.checkThrowableObjects();
        }, 25);
    }

    checkThrowableObjects() {
        if (this.keyboard.D) {
            if (this.character.bottles > 0 && (!this.character.lastThrown || (Date.now() - this.character.lastThrown) > 500)) {
                let bottle = new ThrowableObject(this.character.x, this.character.y);
                this.throwableObjects.push(bottle);
                this.character.lastThrown = Date.now(); // Setze die Zeit des letzten Wurfs
                this.character.bottles--;
                this.statusBarBottles.setPercentage(this.character.bottles * 10);
            }
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.checkCharacterIsAboveEnemy(this.character, enemy) && this.character.isAboveGround()) {
                    this.killEnemy(enemy); 
                } else {
                    this.character.hit();
                    this.statusBarHealth.setPercentage(this.character.energy);
                }
            }
        });
    }

    checkCharacterIsAboveEnemy(character, enemy) {
        if (character.y + character.height - character.offset.top < enemy.y + enemy.height - enemy.offset.top - enemy.collisionAdjustmentY) {
            return true;
        }
    }

    killEnemy(enemy) {
        if (enemy instanceof ChickenSmall || enemy instanceof Chicken) {
            enemy.playAnimation(enemy.IMAGES_DEAD);
            enemy.playDeadSound();
            enemy.isDead = true;
            enemy.offset.top = 100;
        }
    }

    checkCollisionsCollectibleObjects() {
        this.level.collectibleObjects.forEach((collectible) => {
            if (collectible instanceof Coin && this.character.isColliding(collectible)) {
                this.character.collectCoin();
                this.level.collectibleObjects.splice(this.level.collectibleObjects.indexOf(collectible), 1);
                this.statusBarCoins.setPercentage(this.character.coins / this.coinsTotal * 100);
            } else if (collectible instanceof Bottle && this.character.isColliding(collectible) && this.character.bottles < 11) {
                this.character.collectBottle();
                this.level.collectibleObjects.splice(this.level.collectibleObjects.indexOf(collectible), 1);
                this.statusBarBottles.setPercentage(this.character.bottles * 10);
            }
        });
    }

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
        this.addObjectsToMap(this.level.blood);

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
        //mo.drawFrame(this.ctx);
        //mo.drawInnerFrame(this.ctx);

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