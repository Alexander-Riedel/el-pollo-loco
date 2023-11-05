class CollidableObject extends MovableObject {

    collidable = true;
    damage = 0;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&    // R -> L
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&      // T -> B
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&         // L -> R
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom          // B -> T
    }

}