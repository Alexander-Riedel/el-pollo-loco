function initLevel3() {

    level1 = new Level(
        [
            new Chicken(2000, 2),
            new Chicken(2500, 2),
            new Chicken(3500, 2),
            new Chicken(3750, 2),
            new Chicken(5000, 2),
            new ChickenSmall(4000, 2),
            new ChickenSmall(4400, 2),
            new ChickenSmall(4800, 2)
        ],
        [
            new Endboss(7000, 140, 2.5, 100, 1.5)
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

            new Coin(500, 150),
            new Coin(600, 150),
            new Coin(700, 150),
            new Coin(800, 150),
            new Coin(900, 150),
            new Coin(1000, 150),
            new Coin(1100, 150),
            new Coin(1200, 150),
            new Coin(1300, 150),
            new Coin(1400, 150),
            new Coin(1500, 150),
            new Coin(1600, 150),
            new Coin(1700, 150),
            new Coin(1800, 150),
            new Coin(1900, 150),
            new Coin(2000, 150),
            new Coin(4000, 150),
            new Coin(4100, 150),
            new Coin(4200, 150),
            new Coin(4300, 150),
            new Coin(4400, 150),
            new Coin(4500, 150),
            new Coin(4600, 150),
            new Coin(4700, 150),
            new Coin(4800, 150),
            new Coin(4900, 150),
            new Coin(5000, 150),
            new Coin(5100, 150),
            new Coin(5200, 150),
            new Coin(5300, 150),
            new Coin(5400, 150),
            new Coin(5500, 150),

            // bottles
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