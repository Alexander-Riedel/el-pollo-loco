function initLevel2() {

    level1 = new Level(
        [
            new Chicken(2800, 1),
            new Chicken(3000, 1),
            new Chicken(3200, 1),
            new ChickenSmall(5000, 1),
            new ChickenSmall(5200, 1),
            new ChickenSmall(5400, 1)
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
            // 1 coin 
            new Coin(500, 150),

            // 3 coins
            new Coin(1000, 200),
            new Coin(1050, 150),
            new Coin(1100, 200),

            // 1 coin 
            new Coin(1500, 150),

            // 3 coins
            new Coin(2000, 200),
            new Coin(2050, 150),
            new Coin(2100, 200),

            // 1 coin 
            new Coin(2500, 150),

            // 3 coins
            new Coin(3000, 200),
            new Coin(3050, 150),
            new Coin(3100, 200),

            // 1 coin 
            new Coin(3500, 150),

            // 3 coins
            new Coin(4000, 200),
            new Coin(4050, 150),
            new Coin(4100, 200),

            // 1 coin 
            new Coin(4500, 150),

            // 3 coins
            new Coin(5000, 200),
            new Coin(5050, 150),
            new Coin(5100, 200),

            // 1 coin 
            new Coin(5500, 150),

            // bottles
            new Bottle(-356, 360),
            new Bottle(-289, 360),
            new Bottle(-375, 360),
            new Bottle(-168, 360),
            new Bottle(-201, 360),
            new Bottle(-319, 360),
            new Bottle(-382, 360),
            new Bottle(-174, 360),
            new Bottle(993, 360),
            new Bottle(1125, 360),
            new Bottle(1478, 360),
            new Bottle(1734, 360),
            new Bottle(2301, 360),
            new Bottle(2415, 360),
            new Bottle(2830, 360),
            new Bottle(3205, 360),
            new Bottle(3512, 360),
            new Bottle(4167, 360),
            new Bottle(4326, 360),
            new Bottle(4849, 360),
            new Bottle(5287, 360),
            new Bottle(5921, 360),
            new Bottle(6148, 360)
        ]

    );
}