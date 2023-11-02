class Level {
    clouds;
    backgroundObjects;
    enemies;
    level_end_x = 7000;

    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}