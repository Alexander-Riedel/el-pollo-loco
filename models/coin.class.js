class Coin extends CollectibleObject {

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