class Cloud extends MovableObject {

    x = Math.random() * 600;
    y = 10 + Math.random() * 30;
    width = 620 + Math.random() * 100;
    height = 305 + Math.random() * 100;
    speed = 1;

    /**
     * Creates a Cloud object with a random position and size.
     * @param {string} imagePath - The path to the image file.
     * @param {number} x - The initial x-coordinate of the cloud.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);

        this.x = x;
        this.animate();
    }

    /**
     * Animates the cloud by moving it left at a fixed interval.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 15);
    }

}