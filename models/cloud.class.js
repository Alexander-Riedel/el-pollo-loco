class Cloud extends MovableObject {

    x = Math.random() * 600;
    y = 10 + Math.random() * 30;
    width = 620 + Math.random() * 100;
    height = 305 + Math.random() * 100;
    speed = 1;

    constructor(imagePath, x) {
        super().loadImage(imagePath);

        this.x = x;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 15);
    }

}