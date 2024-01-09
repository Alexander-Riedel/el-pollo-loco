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
    coinsTotal = 0;
    coinsTotal = this.level.collectibleObjects.filter(obj => obj instanceof Coin).length;
    bottles = 0;
    collect_coin_sound = new Audio('audio/coin.wav');
    collect_bottle_sound = new Audio('audio/bottle.wav');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.calculateCoinsTotal();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkCollisionsCollectibleObjects();
            this.checkTrowableCollisions();
        }, 25);

        setInterval(() => {
            this.checkThrowableObjects();
        }, 25);

        setInterval(() => {
            this.deleteBottle();
        }, 1000);
    }

    calculateCoinsTotal() {
        this.coinsTotal = this.level.collectibleObjects.filter(obj => obj instanceof Coin).length;
    }

    checkThrowableObjects() {
        if (this.keyboard.D) {
            if (this.character.bottles > 0 && (!this.character.lastThrown || (Date.now() - this.character.lastThrown) > 500)) {
                let bottle = new ThrowableObject(this.character.x, this.character.y, this.character.otherDirection);
                this.throwableObjects.push(bottle);
                this.character.lastThrown = Date.now();
                this.character.bottles--;
                this.statusBarBottles.setPercentage(this.character.bottles * 10);
            }
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.checkCharacterIsAboveEnemy(this.character, enemy) && this.character.isAboveGround()) {
                    this.hitEnemy(enemy);
                } else {
                    this.character.hit();
                    this.statusBarHealth.setPercentage(this.character.energy);
                    if (this.character.energy == 0) {
                        this.loseGame();
                    }
                }
            }
        });
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                if (this.checkCharacterIsAboveEnemy(this.character, endboss) && this.character.isAboveGround()) {
                    this.hitEnemy(endboss);
                } else {
                    this.character.hit();
                    this.statusBarHealth.setPercentage(this.character.energy);
                    if (this.character.energy == 0) {
                        this.loseGame();
                    }
                }
            }
        });
    }

    checkTrowableCollisions() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (bottle.isCollidingWithBottle(enemy)) {
                    this.throwableObjects.splice(this.throwableObjects.indexOf(bottle), 1);
                    enemy.playAnimation(enemy.IMAGES_DEAD);
                    enemy.playDeadSound();
                    enemy.isDead = true;
                    enemy.offset.top = 250;
                }
            });
            this.level.endboss.forEach((endboss) => {
                if (bottle.isCollidingWithBottle(endboss)) {
                    this.throwableObjects.splice(this.throwableObjects.indexOf(bottle), 1);
                    this.statusBarEndboss.setPercentage(endboss.energy - 20);
                    endboss.energy = endboss.energy - 20;
                    if (endboss.energy == 0) {
                        this.killEnemy(endboss);
                        if (levelNumber == 10) {
                            this.winGame();
                        } else {
                            this.loadNextLevel();
                        }
                    }
                }
            });
        });
    }

    deleteBottle() {
        this.throwableObjects = this.throwableObjects.filter(throwableObject => throwableObject.y <= 480);
    }

    checkCharacterIsAboveEnemy(character, enemy) {
        if (character.y + character.height - character.offset.top < enemy.y + enemy.height - enemy.offset.top - enemy.collisionAdjustmentY) {
            return true;
        }
    }

    hitEnemy(enemy) {
        if (enemy instanceof ChickenSmall || enemy instanceof Chicken) {
            this.character.jump(15, 0);
            this.killEnemy(enemy);
        } else if (enemy instanceof Endboss) {
            this.character.jump(20, 0);
            this.hitEndboss(enemy);
        }
    }

    hitEndboss(endboss) {
        if (endboss.energy > 0 && new Date().getTime() - endboss.lastHit > 500) {
            this.statusBarEndboss.setPercentage(endboss.energy - 20);
            endboss.energy = endboss.energy - 20;
            endboss.lastHit = new Date().getTime();
        }
        if (endboss.energy == 0) {
            this.killEnemy(endboss);
            if (levelNumber == 10) {
                this.winGame();
            } else {
                this.loadNextLevel();
            }
        }
    }

    killEnemy(enemy) {
        enemy.playAnimation(enemy.IMAGES_DEAD);
        enemy.playDeadSound();
        enemy.isDead = true;
        //enemy.energy = 100;
        enemy.offset.top = 250;
    }

    checkCollisionsCollectibleObjects() {
        this.level.collectibleObjects.forEach((collectible) => {
            if (collectible instanceof Coin && this.character.isColliding(collectible)) {
                this.collectCoin();
                this.level.collectibleObjects.splice(this.level.collectibleObjects.indexOf(collectible), 1);
                this.statusBarCoins.setPercentage(this.character.coins / this.coinsTotal * 100);
            } else if (collectible instanceof Bottle && this.character.isColliding(collectible) && this.character.bottles < 11) {
                this.collectBottle();
                this.level.collectibleObjects.splice(this.level.collectibleObjects.indexOf(collectible), 1);
                this.statusBarBottles.setPercentage(this.character.bottles * 10);
            }
        });
    }

    collectCoin() {
        this.character.coins++;
        this.collect_coin_sound.volume = 0.1;
        this.collect_coin_sound.play();
    }

    collectBottle() {
        this.character.bottles++;
        this.collect_bottle_sound.volume = 0.1;
        this.collect_bottle_sound.play();
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
        this.addObjectsToMap(this.level.endboss);

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

    loadNextLevel() {
        this.clearAllIntervals();
        setTimeout(() => {
            renderLevelDone();
            openSlider();
            setTimeout(() => {
                this.stopAllMediaElements();
                levelNumber++;
                init(levelNumber);
                setTimeout(() => {
                    closeSlider();
                }, 1000);
            }, 2500);
        }, 500);
    }

    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }

    stopAllMediaElements() {
        collect_coin_sound.remove();
        collect_bottle_sound.remove();
        throw_sound.remove();
        walking_sound.remove();
        jump_sound.remove();
        hurt_sound.remove();
        chicken_dead_sound.remove();
        chicken_small_dead_sound.remove();
        endboss_dead_sound.remove();
    }

    winGame() {
        this.clearAllIntervals();
        setTimeout(() => {
            renderYouWin();
            openSlider();
            setTimeout(() => {
                this.stopAllMediaElements();
                setTimeout(() => {
                    initGameWon();
                }, 1000);
            }, 2500);
        }, 500);
    }

    loseGame() {
        this.clearAllIntervals();
        setTimeout(() => {
            renderYouLose();
            openSlider();
            setTimeout(() => {
                this.stopAllMediaElements();
                setTimeout(() => {
                    initRestartGame();
                }, 1000);
            }, 2500);
        }, 500);
    }

}