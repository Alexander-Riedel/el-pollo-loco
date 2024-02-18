class Chicken extends CollidableObject {

    y = 373;
    height = 50;
    width = 40;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    IMAGES_DEAD = ['img/3_enemies_chicken/chicken_normal/2_dead/dead.png'];
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
     * Constructs a Chicken object with the specified initial position and speed.
     * @param {number} x - The initial x-coordinate of the Chicken.
     * @param {number} speed - The speed of the Chicken.
     */
    constructor(x, speed) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/3_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.speed = speed;
        this.animate();
    }

    /**
     * Initiates the animation for the Chicken object.
     * Moves the Chicken left at a set interval and plays the walking animation.
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
     * Plays the sound for the Chicken's death and clears the walking animation interval.
     */
    playDeadSound() {
        chicken_dead_sound.play();
        clearInterval(this.walkingInterval);
    }

    /**
     * Plays the sound for the Chicken being hit by a bottle and clears the walking animation interval.
     */
    playDeadByBottleSound() {
        glass_hit.play();
        clearInterval(this.walkingInterval);
    }

}