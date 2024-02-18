class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;

    /**
     * Constructs a BackgroundObject with the specified image path, x-coordinate, and optional parallax speed.
     * @param {string} imagePath - The path to the image file.
     * @param {number} x - The x-coordinate of the background object.
     * @param {number} [parallaxSpeed=1] - The parallax speed of the background object.
     */
    constructor(imagePath, x, parallaxSpeed = 1) {
        super().loadImage(imagePath);

        this.x = x;
        this.y = 480 - this.height;
        this.parallaxSpeed = parallaxSpeed;
    }

}