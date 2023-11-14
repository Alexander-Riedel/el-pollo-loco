class Chicken extends CollidableObject {

    y = 373;
    x = 3000 + Math.random() * 3800; // Spawn
    height = 50;
    width = 40;
    speed = 0.30;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    IMAGES_DEAD = ['img/3_enemies_chicken/chicken_normal/2_dead/dead.png'];
    currentImage = 0;
    offset = {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    };
    collisionAdjustmentY = 75;
    isDead = false;
    dead_sound = new Audio('audio/chicken-small-dead.wav');
    walkingInterval;

    constructor(x, speed) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/3_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.speed = speed;

        this.animate();
    }

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

    playDeadSound() {
        this.dead_sound.play();
        clearInterval(this.walkingInterval);
    }

}