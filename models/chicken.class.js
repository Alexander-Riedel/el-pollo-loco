class Chicken extends MovableObject {

    y = 373;
    height = 50;
    width = 40;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/3_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 700 + Math.random() * 10000;

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage++ % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            this.x -= 2;
        }, 1000 / 20);
    }

}