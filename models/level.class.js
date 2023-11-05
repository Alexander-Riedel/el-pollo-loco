class Level {
    clouds;
    backgroundObjects;
    enemies;
    level_start_x = -912;
    level_end_x = 7200;

    constructor(enemies, clouds, backgroundObjects, buildings, collectibleObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectibleObjects = collectibleObjects;
        this.buildings = buildings;
    }
}