class Cloud extends MovableObject {png

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;
        this.y = 10 + Math.random() * 20;
        this.width = 400 + Math.random() * 100;
        this.height = 200 + Math.random() * 100;
    }
}