class StatusBarCoins extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ];
    percentage = 0;

    /**
     * Creates a new StatusBarCoins object.
     * Initializes the status bar with default values.
     */
    constructor() {
        super().loadImages(this.IMAGES);
        this.x = 20;
        this.y = 40;
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
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

}