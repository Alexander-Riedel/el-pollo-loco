class Endboss extends CollidableObject {

    y = 230;
    x = 6500; // Spawn
    height = 200;
    width = 120;
    speed = 0.30 + Math.random(); // Speed
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png'
    ];
    currentImage = 0;
    offset = {
        top: 40,
        right: 15,
        bottom: 10,
        left: 15
    };
    collisionAdjustmentY = 60;

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/1_walk/G4.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {
        //this.moveLeft();

        /*setInterval(() => {
            let i = this.currentImage++ % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 10);*/
    }


}