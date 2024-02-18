class Bottle extends CollectibleObject {

    /**
     * Constructs a Bottle object with the specified coordinates.
     * @param {number} x - The x-coordinate of the bottle.
     * @param {number} y - The y-coordinate of the bottle.
     */
    constructor(x, y) {
        super(x, y).loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.height = 65;
        this.width = 65;
        this.offset = {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
        };
    }

}