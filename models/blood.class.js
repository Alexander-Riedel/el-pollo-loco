class Blood extends MovableObject {

/*     IMAGES_BLOOD_1 = [
        'img/blood/1/1_0.png',
        'img/blood/1/1_1.png',
        'img/blood/1/1_2.png',
        'img/blood/1/1_3.png',
        'img/blood/1/1_4.png',
        'img/blood/1/1_5.png',
        'img/blood/1/1_6.png',
        'img/blood/1/1_7.png',
        'img/blood/1/1_8.png',
        'img/blood/1/1_9.png',
        'img/blood/1/1_10.png',
        'img/blood/1/1_11.png',
        'img/blood/1/1_12.png',
        'img/blood/1/1_13.png',
        'img/blood/1/1_14.png',
        'img/blood/1/1_15.png',
        'img/blood/1/1_16.png',
        'img/blood/1/1_17.png',
        'img/blood/1/1_18.png',
        'img/blood/1/1_19.png',
        'img/blood/1/1_20.png',
        'img/blood/1/1_21.png',
        'img/blood/1/1_22.png',
        'img/blood/1/1_23.png',
        'img/blood/1/1_24.png',
        'img/blood/1/1_25.png',
        'img/blood/1/1_26.png',
        'img/blood/1/1_27.png',
        'img/blood/1/1_28.png'
    ];
    IMAGES_BLOOD_2 = [
        'img/blood/2/1_0.png',
        'img/blood/2/1_1.png',
        'img/blood/2/1_2.png',
        'img/blood/2/1_3.png',
        'img/blood/2/1_4.png',
        'img/blood/2/1_5.png',
        'img/blood/2/1_6.png',
        'img/blood/2/1_7.png',
        'img/blood/2/1_8.png',
        'img/blood/2/1_9.png',
        'img/blood/2/1_10.png',
        'img/blood/2/1_11.png',
        'img/blood/2/1_12.png',
        'img/blood/2/1_13.png',
        'img/blood/2/1_14.png',
        'img/blood/2/1_15.png',
        'img/blood/2/1_16.png',
        'img/blood/2/1_17.png',
        'img/blood/2/1_18.png',
        'img/blood/2/1_19.png',
        'img/blood/2/1_20.png',
        'img/blood/2/1_21.png',
        'img/blood/2/1_22.png',
        'img/blood/2/1_23.png',
        'img/blood/2/1_24.png',
        'img/blood/2/1_25.png',
        'img/blood/2/1_26.png',
        'img/blood/2/1_27.png',
        'img/blood/2/1_28.png'
    ];
    IMAGES_BLOOD_3 = [
        'img/blood/3/1_0.png',
        'img/blood/3/1_1.png',
        'img/blood/3/1_2.png',
        'img/blood/3/1_3.png',
        'img/blood/3/1_4.png',
        'img/blood/3/1_5.png',
        'img/blood/3/1_6.png',
        'img/blood/3/1_7.png',
        'img/blood/3/1_8.png',
        'img/blood/3/1_9.png',
        'img/blood/3/1_10.png',
        'img/blood/3/1_11.png',
        'img/blood/3/1_12.png',
        'img/blood/3/1_13.png',
        'img/blood/3/1_14.png',
        'img/blood/3/1_15.png',
        'img/blood/3/1_16.png',
        'img/blood/3/1_17.png',
        'img/blood/3/1_18.png',
        'img/blood/3/1_19.png',
        'img/blood/3/1_20.png',
        'img/blood/3/1_21.png',
        'img/blood/3/1_22.png',
        'img/blood/3/1_23.png',
        'img/blood/3/1_24.png',
        'img/blood/3/1_25.png',
        'img/blood/3/1_26.png',
        'img/blood/3/1_27.png',
        'img/blood/3/1_28.png'
    ];
    IMAGES_BLOOD_4 = [
        'img/blood/4/1_0.png',
        'img/blood/4/1_1.png',
        'img/blood/4/1_2.png',
        'img/blood/4/1_3.png',
        'img/blood/4/1_4.png',
        'img/blood/4/1_5.png',
        'img/blood/4/1_6.png',
        'img/blood/4/1_7.png',
        'img/blood/4/1_8.png',
        'img/blood/4/1_9.png',
        'img/blood/4/1_10.png',
        'img/blood/4/1_11.png',
        'img/blood/4/1_12.png',
        'img/blood/4/1_13.png',
        'img/blood/4/1_14.png',
        'img/blood/4/1_15.png',
        'img/blood/4/1_16.png',
        'img/blood/4/1_17.png',
        'img/blood/4/1_18.png',
        'img/blood/4/1_19.png',
        'img/blood/4/1_20.png',
        'img/blood/4/1_21.png',
        'img/blood/4/1_22.png',
        'img/blood/4/1_23.png',
        'img/blood/4/1_24.png',
        'img/blood/4/1_25.png',
        'img/blood/4/1_26.png',
        'img/blood/4/1_27.png',
        'img/blood/4/1_28.png'
    ];
    IMAGES_BLOOD_5 = [
        'img/blood/5/1_0.png',
        'img/blood/5/1_1.png',
        'img/blood/5/1_2.png',
        'img/blood/5/1_3.png',
        'img/blood/5/1_4.png',
        'img/blood/5/1_5.png',
        'img/blood/5/1_6.png',
        'img/blood/5/1_7.png',
        'img/blood/5/1_8.png',
        'img/blood/5/1_9.png',
        'img/blood/5/1_10.png',
        'img/blood/5/1_11.png',
        'img/blood/5/1_12.png',
        'img/blood/5/1_13.png',
        'img/blood/5/1_14.png',
        'img/blood/5/1_15.png',
        'img/blood/5/1_16.png',
        'img/blood/5/1_17.png',
        'img/blood/5/1_18.png',
        'img/blood/5/1_19.png',
        'img/blood/5/1_20.png',
        'img/blood/5/1_21.png',
        'img/blood/5/1_22.png',
        'img/blood/5/1_23.png',
        'img/blood/5/1_24.png',
        'img/blood/5/1_25.png',
        'img/blood/5/1_26.png',
        'img/blood/5/1_27.png',
        'img/blood/5/1_28.png'
    ]; */

    constructor(x, y) {
        super().loadImage('img/blood/1/1 _11.png');
        this.x;
        this.y;
        this.height = 400 / 6;
        this.width = 400 / 6;
        //this.throw();
    }

/*     constructor(x, y) {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/3_w.png');
        this.loadImages(this.IMAGES_BLOOD_1);
        this.loadImages(this.IMAGES_BLOOD_2);
        this.loadImages(this.IMAGES_BLOOD_3);
        this.loadImages(this.IMAGES_BLOOD_4);
        this.loadImages(this.IMAGES_BLOOD_5);
        this.x = 20;
        this.y = 80;
        this.height = 158 / 4;
        this.width = 595 / 4;
        //this.animate();
    } */

    animate() {
    setInterval(() => {
            this.playAnimation(this.IMAGES_BLOOD_1);
    }, 1000 / 5);
}

}