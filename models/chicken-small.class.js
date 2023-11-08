class ChickenSmall extends CollidableObject {

    y = 382;
    x = 800 + Math.random() * 4000; // Spawn
    height = 40;
    width = 25;
    speed = 0.15 + Math.random() * (1 + Math.random()); // Speed
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    IMAGES_DEAD = ['img/3_enemies_chicken/chicken_small/2_dead/dead.png'];
    currentImage = 0;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    collisionAdjustmentY = 75;
    isDead = false;
    dead_sound = new Audio('audio/chicken-dead.wav');

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/3_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.animate();
    }

    animate() {
        /*         setInterval(() => {
                   this.moveLeft();
                }, 1000 / 30); */

        setInterval(() => {
            if (this.isDead == false) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 10);
    }

    playDeadSound() {
        this.dead_sound.play();
    }

}