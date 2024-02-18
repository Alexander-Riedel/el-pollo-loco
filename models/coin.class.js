class Coin extends CollectibleObject {

    /**
     * Creates a Coin object with a specified position.
     * @param {number} x - The x-coordinate of the coin.
     * @param {number} y - The y-coordinate of the coin.
     */
    constructor(x, y) {
        super(x, y).loadImage('img/8_coin/coin_1.png');
        this.height = 100;
        this.width = 100;
        this.offset = {
            top: 30,
            right: 30,
            bottom: 30,
            left: 30
        };
    }

}