class Building extends MovableObject {

    /**
     * Constructs a BackgroundObject with the specified parameters.
     * @param {string} imagePath - The path to the image of the background object.
     * @param {number} x - The x-coordinate of the background object.
     * @param {number} y - The y-coordinate of the background object.
     * @param {number} width - The width of the background object.
     * @param {number} height - The height of the background object.
     */
    constructor(imagePath, x, y, width, height) {
        super().loadImage(imagePath);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }

}