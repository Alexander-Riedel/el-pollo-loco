class Level {
    
    backgroundObjects;
    enemies;
    endboss;
    clouds;
    buildings;
    level_start_x = -912;
    level_end_x = 7200;

    constructor(enemies, endboss, clouds, backgroundObjects, buildings, collectibleObjects) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectibleObjects = collectibleObjects;
        this.buildings = buildings;
    }

    moveBackgroundObjects(direction, characterSpeed) {
        this.backgroundObjects.forEach(obj => {
            // Passen Sie hier die Geschwindigkeit der Hintergrundobjekte relativ zur Charakterbewegung an
            if (obj.parallaxSpeed) {
                obj.x -= characterSpeed * obj.parallaxSpeed * direction;
            }
        });
    }
    
}

