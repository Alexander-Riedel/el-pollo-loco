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

    /**
     * Creates a new World.
     * @constructor
     * @param {HTMLCanvasElement} canvas - The canvas element.
     * @param {Keyboard} keyboard - The keyboard input.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.calculateCoinsTotal();
    }

    /**
     * Sets the world for the character.
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Starts the game loop.
     */
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

    /**
     * Calculates the total number of coins in the level.
     */
    calculateCoinsTotal() {
        this.coinsTotal = this.level.collectibleObjects.filter(obj => obj instanceof Coin).length;
    }

    /**
     * Checks if throwable objects should be thrown.
     * This method checks if the 'D' key is pressed, if the character has bottles available,
     * and if enough time has passed since the last throwable object was thrown. If all conditions are met,
     * a new throwable object is created, added to the list of throwable objects, and character statistics are updated.
     */
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

    /**
     * Checks collisions between the character and enemies.
     * This method iterates over the enemies and end boss in the level,
     * checking if the character collides with any of them. If a collision is detected,
     * appropriate actions are taken, such as calling 'collidingWithEnemy' or 'collidingWithEndboss'.
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.collidingWithEnemy(enemy);
            }
        });
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.collidingWithEndboss(endboss);
            }
        });
    }

    /**
     * Handles collision with an enemy.
     * If the character is above the enemy and is on the ground, the enemy is hit.
     * Otherwise, the character is hit, its energy is updated, and the game may be lost if energy reaches zero.
     * @param {Enemy} enemy - The enemy object with which collision occurred.
     */
    collidingWithEnemy(enemy) {
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

    /**
     * Handles collision with the end boss.
     * The character is hit, its energy is updated, and the game may be lost if energy reaches zero.
     * @param {Endboss} endboss - The end boss object with which collision occurred.
     */
    collidingWithEndboss(endboss) {
        this.character.hit();
        this.statusBarHealth.setPercentage(this.character.energy);
        if (this.character.energy == 0) {
            this.loseGame();
        }
    }

    /**
     * Checks collisions between throwable objects and enemies/endbosses.
     * For each throwable object, it checks collision with enemies and endbosses and handles the collision accordingly.
     */
    checkTrowableCollisions() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                this.enemyCollidingWithBottle(bottle, enemy);
            });
            this.level.endboss.forEach((endboss) => {
                this.endbossCollidingWithBottle(bottle, endboss);
            });
        });
    }

    /**
     * Handles collision between an enemy and a throwable object.
     * If the bottle collides with the enemy, it removes the bottle, triggers splash animation,
     * plays dead animation and sound for the enemy, and updates enemy's status.
     * @param {ThrowableObject} bottle - The throwable object.
     * @param {Enemy} enemy - The enemy object.
     */
    enemyCollidingWithBottle(bottle, enemy) {
        if (bottle.isCollidingWithBottle(enemy)) {
            setTimeout(() => {
                this.throwableObjects.splice(this.throwableObjects.indexOf(bottle), 1);
            }, 500);
            this.throwableObjects.forEach((bottle) => {
                bottle.splashAnimation(bottle, enemy)
            });
            enemy.playAnimation(enemy.IMAGES_DEAD);
            enemy.playDeadByBottleSound();
            enemy.isDead = true;
            enemy.offset.top = 250;
        }
    }

    /**
     * Handles collision between an end boss and a throwable object.
     * If the bottle collides with the end boss, it triggers splash animation, plays sound,
     * removes the bottle, and updates end boss's energy.
     * @param {ThrowableObject} bottle - The throwable object.
     * @param {Endboss} endboss - The end boss object.
     */
    endbossCollidingWithBottle(bottle, endboss) {
        if (bottle.isCollidingWithBottle(endboss)) {
            this.throwableObjects.forEach((bottle) => {
                bottle.splashAnimation(bottle, endboss)
            });
            glass_hit.play();
            setTimeout(() => {
                this.throwableObjects.splice(this.throwableObjects.indexOf(bottle), 1);
            }, 500);
            this.calculateEndbossEnergy(endboss);
        }
    }

    /**
     * Calculates the end boss's energy after being hit by a throwable object.
     * It reduces the end boss's energy by 20 units, updates the status bar accordingly,
     * and checks if the end boss has been defeated. If defeated, appropriate actions are taken.
     * @param {Endboss} endboss - The end boss object.
     */
    calculateEndbossEnergy(endboss) {
        this.statusBarEndboss.setPercentage(endboss.energy - 20);
        endboss.energy = endboss.energy - 20;
        if (endboss.energy == 0) {
            setTimeout(() => {
                this.killEnemy(endboss);
                if (levelNumber == 10) {
                    this.winGame();
                } else {
                    this.loadNextLevel();
                }
            }, 100);
        }
    }

    /**
     * Deletes throwable objects that are out of bounds.
     * This method removes throwable objects from the array if their y-coordinate exceeds 480.
     */
    deleteBottle() {
        this.throwableObjects = this.throwableObjects.filter(throwableObject => throwableObject.y <= 480);
    }

    /**
     * Checks if the character is positioned above an enemy.
     * @param {Character} character - The character object.
     * @param {Enemy} enemy - The enemy object.
     * @returns {boolean} True if the character is above the enemy, otherwise false.
     */
    checkCharacterIsAboveEnemy(character, enemy) {
        if (character.y + character.height - character.offset.top < enemy.y + enemy.height - enemy.offset.top - enemy.collisionAdjustmentY) {
            return true;
        }
    }

    /**
     * Handles when the character hits an enemy.
     * It makes the character jump, then proceeds to kill the enemy.
     * @param {Enemy} enemy - The enemy object.
     */
    hitEnemy(enemy) {
        this.character.jump(15, 0);
        this.killEnemy(enemy);
    }

    /**
     * Handles when the end boss is hit by the character.
     * If the end boss's energy is greater than 0 and it hasn't been hit recently (within the last 500 milliseconds),
     * it reduces the end boss's energy by 20 units, updates the status bar, and records the time of the hit.
     * If the end boss's energy reaches 0, it is killed, and the game progresses accordingly.
     * @param {Endboss} endboss - The end boss object.
     */
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

    /**
     * Kills the enemy.
     * This method plays the dead animation and sound for the enemy,
     * sets its 'isDead' property to true, and adjusts its vertical offset.
     * @param {Enemy} enemy - The enemy object to be killed.
     */
    killEnemy(enemy) {
        enemy.playAnimation(enemy.IMAGES_DEAD);
        enemy.playDeadSound();
        enemy.isDead = true;
        enemy.offset.top = 250;
    }

    /**
     * Checks collisions between the character and collectible objects.
     * This method iterates over the collectible objects in the level and checks collision with the character.
     * If a collision is detected with a coin, it triggers coin collection, updates the status bar,
     * and removes the collected coin from the level.
     * If a collision is detected with a bottle and the character has less than 11 bottles,
     * it triggers bottle collection, updates the status bar, and removes the collected bottle from the level.
     */
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

    /**
     * Collects a coin.
     * This method increments the character's coin count and plays a sound effect.
     */
    collectCoin() {
        this.character.coins++;
        collect_coin_sound.play();
    }

    /**
     * Collects a bottle.
     * This method increments the character's bottle count and plays a sound effect.
     */
    collectBottle() {
        this.character.bottles++;
        collect_bottle_sound.play();
    }

    /**
     * Draws the game world.
     * This method clears the canvas, translates the context based on camera position,
     * and draws various game objects including background elements, collectibles, characters, enemies, and throwable objects.
     * It also handles drawing fixed objects such as health, coins, bottles, and endboss status bars.
     * Finally, it schedules the next frame using requestAnimationFrame for smooth animation.
     */
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
        // ------------------------------------------------------------

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, this.camery_y);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * Adds objects to the map.
     * This method iterates over the provided array of objects and calls 'addToMap' for each object.
     * @param {Object[]} objects - An array of objects to be added to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object)
        });
    }

    /**
     * Adds an object to the map.
     * This method flips the image if necessary, draws the object, and then flips the image back.
     * @param {Object} mo - The object to be added to the map.
     */
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

    /**
     * Flips the image horizontally.
     * This method saves the current canvas state, translates to the right edge of the image, scales it horizontally by -1,
     * and updates the object's position accordingly.
     * @param {Object} mo - The object whose image is to be flipped.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Restores the canvas state after flipping.
     * This method restores the canvas to its previous state after flipping the image.
     * @param {Object} mo - The object whose image was flipped.
     */
    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }

    /**
     * Loads the next level.
     * This method clears the canvas, clears all intervals, and initiates loading of the next level.
     * It involves rendering the level done screen, opening a slider, stopping all media elements,
     * incrementing the level number, initializing the next level, and finally closing the slider.
     */
    loadNextLevel() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

    /**
     * Clears all intervals.
     * This method clears all intervals created within the window context.
     * It iterates over a range of interval IDs and clears each interval.
     */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }

    /**
     * Stops all media elements.
     * This method stops all the audio elements used in the game.
     * It removes event listeners and stops playback for each sound.
     */
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
        glass_hit.remove();
    }

    /**
     * Handles the win condition of the game.
     * This method clears all intervals, displays the "You Win" message,
     * opens a slider, stops all media elements, and initializes the game as won.
     */
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

    /**
     * Handles the lose condition of the game.
     * This method clears all intervals, displays the "You Lose" message,
     * opens a slider, stops all media elements, and initializes the game for restarting.
     */
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