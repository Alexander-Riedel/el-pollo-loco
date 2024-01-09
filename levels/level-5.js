function initLevel5() {

    level1 = new Level(
        [
            new Chicken(2000, 5),
            new Chicken(2500, 6),
            new Chicken(3500, 7),
            new Chicken(3750, 8),
            new Chicken(5000, 9),
            new Chicken(2000, 6),
            new Chicken(2500, 7),
            new Chicken(3500, 8),
            new Chicken(3750, 9),
            new Chicken(5000, 10),
            new ChickenSmall(4000, 3),
            new ChickenSmall(4400, 3),
            new ChickenSmall(2100, 3),
            new ChickenSmall(2800, 3),
            new ChickenSmall(4900, 3),
            new ChickenSmall(6000, 3)
        ],
        [
            new Endboss(7000, 50, 6, 100, 2)
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
            new Coin(700, 150),

            // 3 coins
            new Coin(1200, 200),
            new Coin(1250, 150),
            new Coin(1300, 200),

            // 5 coins
            new Coin(1600, 250),
            new Coin(1650, 200),
            new Coin(1700, 150),
            new Coin(1750, 200),
            new Coin(1800, 250),

            // 5 coins vertical
            new Coin(3300, 100),
            new Coin(3300, 150),
            new Coin(3300, 200),
            new Coin(3300, 250),
            new Coin(3300, 300),

            // 5 coins vertical
            new Coin(3600, 100),
            new Coin(3600, 150),
            new Coin(3600, 200),
            new Coin(3600, 250),
            new Coin(3600, 300),

            // 5 coins vertical
            new Coin(3900, 100),
            new Coin(3900, 150),
            new Coin(3900, 200),
            new Coin(3900, 250),
            new Coin(3900, 300),

            // 1 coin
            new Coin(4550, 150),

            // 2 coins
            new Coin(5050, 150),
            new Coin(5100, 150),

            // 3 coins
            new Coin(5600, 200),
            new Coin(5650, 150),
            new Coin(5700, 200),

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