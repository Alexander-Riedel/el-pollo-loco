class Character extends CollidableObject {

    y = 227; // 227
    height = 200;
    speed = 5;
    currentImage = 0;
    world;
    walking_sound = new Audio('audio/step.wav');
    jump_sound = new Audio('audio/jump.wav');
    hurt_sound = new Audio('audio/hurt.wav');
    isDeathAnimationPlayed = false;

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png'
    ];
    IMAGES_JUMPING = [
        //'img/2_character_pepe/3_jump/J-31.png',
        //'img/2_character_pepe/3_jump/J-32.png',
        //'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        //'img/2_character_pepe/3_jump/J-37.png',
        //'img/2_character_pepe/3_jump/J-38.png',
        //'img/2_character_pepe/3_jump/J-39.png'
    ];
    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];
    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];
    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
    ];

    offset = {
        top: 80,
        right: 25,
        bottom: 5,
        left: 15
    };

    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_IDLE);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight('character');
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > this.world.level.level_start_x) {
                this.moveLeft('character');
                this.otherDirection = true;
                this.walking_sound.play();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 160;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead() && !this.isDeathAnimationPlayed) {
                this.playAnimation(this.IMAGES_DEAD);
                this.isDeathAnimationPlayed = true;
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            } else if (!this.isAboveGround()) {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 1000 / 5);

        setInterval(() => {
            if (this.isDead()) {
                // death sound
            } else if (this.isHurt()) {
                this.hurt_sound.volume = 0.2;
                this.hurt_sound.play();
            } else if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump_sound.play();
            } else if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.world.character.y == 227) {
                this.walking_sound.play();
            } else if (!this.isAboveGround()) {

            }
        }, 1000 / 60);

    }

}