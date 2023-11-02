class ChickenSmall extends MovableObject {3

    y = 380;
    height = 40;
    width = 25;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/3_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 700 + Math.random() * 5000;

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage++ % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            this.x -= 1;
        }, 1000 / 20);
    }

}