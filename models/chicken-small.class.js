class ChickenSmall extends CollidableObject {

    y = 382;
    height = 40;
    width = 25;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    IMAGES_DEAD = ['img/3_enemies_chicken/chicken_small/2_dead/dead.png'];
    currentImage = 0;
    offset = {
        top: -5,
        right: -5,
        bottom: -5,
        left: -5
    };
    collisionAdjustmentY = 75;
    isDead = false;
    walkingInterval;

    /**
     * Constructs a ChickenSmall object with the specified parameters.
     * @param {number} x - The initial x-coordinate of the ChickenSmall object.
     * @param {number} speed - The speed of the ChickenSmall object.
     */
    constructor(x, speed) {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/3_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.speed = speed;

        this.animate();
    }

    /**
     * Animates the ChickenSmall object.
     * Moves the ChickenSmall object left and plays the walking animation.
     */
    animate() {
        this.walkingInterval = setInterval(() => {
            this.moveLeft();
        }, 1000 / 30);

        setInterval(() => {
            if (this.isDead == false) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 10);
    }

    /**
     * Plays the sound effect for the ChickenSmall's death and stops its walking animation.
     */
    playDeadSound() {
        chicken_small_dead_sound.play();
        clearInterval(this.walkingInterval);
    }

    /**
     * Plays the sound effect for the ChickenSmall's death caused by a bottle hit and stops its walking animation.
     */
    playDeadByBottleSound() {
        glass_hit.play();
        clearInterval(this.walkingInterval);
    }

}