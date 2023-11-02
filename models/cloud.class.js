class Cloud extends MovableObject {

    x = Math.random() * 600;
    y = 10 + Math.random() * 30;
    width = 620 + Math.random() * 100;
    height = 305 + Math.random() * 100;
    speed = 0.15 + Math.random();

    constructor(imagePath) {
        super().loadImage(imagePath);

        this.animate();
    }

    animate() {
        this.moveLeft();
    }

}