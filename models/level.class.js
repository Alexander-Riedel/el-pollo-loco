class Level {
    clouds;
    backgroundObjects;
    enemies;
    level_start_x = -912;
    level_end_x = 7200;
    blood;

    constructor(enemies, clouds, backgroundObjects, buildings, collectibleObjects, blood) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectibleObjects = collectibleObjects;
        this.buildings = buildings;
        this.blood = blood;
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

