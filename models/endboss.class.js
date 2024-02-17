class Endboss extends CollidableObject {

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
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
    walkingInterval;
    hadFirstContact = false;

    constructor(x, y, speed, energy, size) {
        super().loadImage('img/4_enemie_boss_chicken/1_walk/G4.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ALERT);
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.energy = energy;
        this.height = 200 * size;
        this.width = 120 * size;
        this.animate();
    }

    animate() {
        let i = 0;
        setInterval(() => {
            if (i < 10) {
                this.playAnimation(this.IMAGES_ALERT);
            } else if (this.isDead == false) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                // do nothing
            }
            i++;
            if (world.character.x > 6495 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact = true;
            }
        }, 1000 / 10);

        this.walkingInterval = setInterval(() => {
            if (this.hadFirstContact && i > 10)
                this.moveLeft();
        }, 1000 / 30);
    }

    playDeadSound() {
        endboss_dead_sound.play();
        clearInterval(this.walkingInterval);
        this.y = 300;
    }

}