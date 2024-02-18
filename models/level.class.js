class Level {

    backgroundObjects;
    enemies;
    endboss;
    clouds;
    buildings;
    level_start_x = -912;
    level_end_x = 7200;

    /**
     * Constructs a Level object with specified enemies, endboss, clouds, background objects, buildings, and collectible objects.
     * @param {Array} enemies - Array of enemy objects in the level.
     * @param {Array} endboss - Array containing the endboss object.
     * @param {Array} clouds - Array of cloud objects in the background.
     * @param {Array} backgroundObjects - Array of background objects.
     * @param {Array} buildings - Array of building objects.
     * @param {Array} collectibleObjects - Array of collectible objects in the level.
     */
    constructor(enemies, endboss, clouds, backgroundObjects, buildings, collectibleObjects) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectibleObjects = collectibleObjects;
        this.buildings = buildings;
    }

}

