class StatusBarBottles extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'
    ];
    percentage = 100;

    /**
     * Creates a new StatusBarBottles object.
     * Initializes the status bar with default values.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 20;
        this.y = 80;
        this.height = 158 / 4;
        this.width = 595 / 4;
        this.setPercentage(0);
    }

    /**
     * Sets the percentage value of the status bar and updates the displayed image accordingly.
     * @param {number} percentage - The percentage value to set (0 to 100).
     */
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Resolves the index of the image based on the current percentage value.
     * @returns {number} The index of the image to be displayed.
     */
    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage >= 70) {
            return 4;
        } else if (this.percentage >= 50) {
            return 3;
        } else if (this.percentage >= 30) {
            return 2;
        } else if (this.percentage >= 10) {
            return 1;
        } else {
            return 0;
        }
    }

}