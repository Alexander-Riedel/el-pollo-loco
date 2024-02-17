/**
 * Initializes level 4 of the game.
 * This function sets up the initial configuration for level 1, including creating characters, enemies, background objects, buildings, and collectible objects.
 */
function initLevel4() {

    level1 = new Level(
        [
            new Chicken(2000, 3),
            new Chicken(2500, 3),
            new Chicken(3500, 3),
            new Chicken(3750, 3),
            new Chicken(5000, 3),
            new ChickenSmall(4000, 3),
            new ChickenSmall(4400, 3),
            new ChickenSmall(2100, 3),
            new ChickenSmall(2800, 3),
            new ChickenSmall(4900, 3),
            new ChickenSmall(5300, 3),
            new Chicken(6000, 3),
            new Chicken(6500, 3),
            new Chicken(7200, 3),
            new Chicken(7400, 3)
        ],
        [
            new Endboss(7000, 140, 4, 100, 1.5)
        ],
        [
            new Cloud('img/5_background/layers/4_clouds/1.png', 0),
            new Cloud('img/5_background/layers/4_clouds/2.png', 719 * 1),
            new Cloud('img/5_background/layers/4_clouds/1.png', 719 * 2),
            new Cloud('img/5_background/layers/4_clouds/2.png', 719 * 3),
            new Cloud('img/5_background/layers/4_clouds/1.png', 719 * 4),
            new Cloud('img/5_background/layers/4_clouds/2.png', 719 * 5),
            new Cloud('img/5_background/layers/4_clouds/1.png', 719 * 6),
            new Cloud('img/5_background/layers/4_clouds/2.png', 719 * 7),
            new Cloud('img/5_background/layers/4_clouds/1.png', 719 * 8),
            new Cloud('img/5_background/layers/4_clouds/2.png', 719 * 9),
            new Cloud('img/5_background/layers/4_clouds/1.png', 719 * 10)
        ],
        [
            new BackgroundObject('img/5_background/layers/air.png', -719 * 2, 1),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', -719 * 2, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', -719 * 2, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', -719 * 2, 1),
            new BackgroundObject('img/5_background/layers/air.png', -719, 1),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719, 1),
            new BackgroundObject('img/5_background/layers/air.png', 0, 1),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0, 1),
            new BackgroundObject('img/5_background/layers/air.png', 719, 1),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719, 1),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2, 1),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3, 1),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 4, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 4, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 4, 1),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5, 1),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 6, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 6, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 6, 1),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 7, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 7, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 7, 1),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 8),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 8, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 8, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 8, 1),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 9),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 9, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 9, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 9, 1),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 10),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 10, 0.5),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 10, 0.8),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 10, 1)
        ],
        [
            new Building('img/0_building/Wall_A_03.png', -940, 100, 128, 320),
            new Building('img/0_building/Wall_A_02.png', -1260, 100, 320, 320),
            new Building('img/0_building/Wall_A_01.png', 7200, 100, 128, 320),
            new Building('img/0_building/Wall_A_02.png', 7328, 100, 320, 320),
            new Building('img/0_building/Wall_A_02.png', 7648, 100, 320, 320)
        ],
        [

            // 1 coin 
            new Coin(1500, 150),
            new Coin(1550, 200),
            new Coin(1600, 250),
            new Coin(1650, 200),
            new Coin(1700, 150),
            new Coin(1750, 200),
            new Coin(1800, 250),
            new Coin(1850, 200),
            new Coin(1900, 150),
            new Coin(1950, 200),
            new Coin(2000, 250),
            new Coin(2050, 200),
            new Coin(2100, 150),
            new Coin(2150, 200),
            new Coin(2200, 250),
            new Coin(2250, 200),
            new Coin(2300, 150),
            new Coin(2350, 200),
            new Coin(2400, 250),
            new Coin(2450, 200),
            new Coin(2500, 150),
            new Coin(2550, 200),
            new Coin(2600, 250),
            new Coin(2650, 200),
            new Coin(2700, 150),
            new Coin(2750, 200),
            new Coin(2800, 250),
            new Coin(2850, 200),
            new Coin(2900, 150),
            new Coin(2950, 200),
            new Coin(3000, 250),
            new Coin(3050, 200),
            new Coin(3100, 150),
            new Coin(3150, 200),
            new Coin(3200, 250),
            new Coin(3250, 200),
            new Coin(3300, 150),
            new Coin(3350, 200),
            new Coin(3400, 250),
            new Coin(3450, 200),
            new Coin(3500, 150),
            new Coin(3550, 200),
            new Coin(3600, 250),
            new Coin(3650, 200),
            new Coin(3700, 150),

            // bottles
            new Bottle(-456, 360),
            new Bottle(-289, 360),
            new Bottle(-375, 360),
            new Bottle(-168, 360),
            new Bottle(-201, 360),
            new Bottle(-319, 360),
            new Bottle(-582, 360),
            new Bottle(-174, 360),
            new Bottle(750, 360),
            new Bottle(1350, 360),
            new Bottle(1400, 360),
            new Bottle(2850, 360),
            new Bottle(3000, 360),
            new Bottle(3650, 360),
            new Bottle(3650, 360),
            new Bottle(4800, 360),
            new Bottle(5400, 360),
            new Bottle(5850, 360),
            new Bottle(5910, 360),
            new Bottle(6050, 360),
            new Bottle(6270, 360),
            new Bottle(6570, 360),
            new Bottle(6900, 360)
        ]

    );
}