class Endboss extends CollidableObject {

    y = 230;
    x = 6500; // Spawn
    height = 200;
    width = 120;
    speed = 10;
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];
    currentImage = 0;
    offset = {
        top: 40,
        right: 15,
        bottom: 10,
        left: 15
    };
    collisionAdjustmentY = 60;
    isDead = false;
    dead_sound = new Audio('audio/peep.wav');
    hit_sound = new Audio('audio/hit.wav');
    walkingInterval;
    endbossEnergy;

    constructor(x, speed, energy) {
        super().loadImage('img/4_enemie_boss_chicken/1_walk/G4.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.speed = speed;
        this.animate();
        this.endbossEnergy = energy;
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
        this.y = 300;
    }

}