class Coin extends CollectibleObject {

    constructor(x, y) {
        super(x, y).loadImage('img/8_coin/coin_1.png');
        this.height = 100;
        this.width = 100;
        //this.offset = {top: 20, right: 20, bottom: 20, left: 20};
    }
}