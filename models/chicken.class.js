class Chicken extends CollidableObject {

    y = 373;
    x = 3000 + Math.random() * 3800; // Spawn
    height = 50;
    width = 40;
    speed = 0.30 + Math.random() * (3 + Math.random()); // Speed
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/3_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {
        //setInterval(() => {
        //    this.moveLeft();
        //}, 1000 / 30);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 10);
    }

}