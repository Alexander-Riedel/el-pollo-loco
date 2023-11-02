class ChickenSmall extends MovableObject {3

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
    currentImage = 0;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/3_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 10);
    }

}