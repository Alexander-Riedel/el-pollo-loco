function initLevel9() {

    level1 = new Level(
        [
            new Chicken(1000, 10),
            new Chicken(1100, 10),
            new Chicken(3000, 7),
            new Chicken(3500, 7),
            new Chicken(4000, 7),
            new Chicken(4500, 9),
            new Chicken(5000, 9),
            new Chicken(5500, 9),
            new Chicken(6000, 9),
            new Chicken(6500, 9),
            new Chicken(9000, 10),
            new Chicken(9200, 10),
            new Chicken(9400, 13),
            new Chicken(9800, 11),
            new Chicken(10000, 12),
            new Chicken(8000, 11),
            new Chicken(8900, 12),
            new Chicken(9100, 13),
            new Chicken(11000, 17),
            new Chicken(11200, 16),
            new ChickenSmall(4000, 3),
            new ChickenSmall(4400, 3),
            new ChickenSmall(2100, 3),
            new ChickenSmall(2800, 3),
            new ChickenSmall(4900, 3),
            new ChickenSmall(6000, 3),
            new ChickenSmall(10000, 15),
            new ChickenSmall(10200, 16),
            new ChickenSmall(10400, 17),
            new ChickenSmall(10600, 18),
            new ChickenSmall(10800, 19),
            new ChickenSmall(11000, 20),
            new ChickenSmall(4000, 6),
            new ChickenSmall(4400, 7),
            new ChickenSmall(2100, 8),
            new ChickenSmall(2800, 9),
            new ChickenSmall(4900, 10),
            new ChickenSmall(6000, 11),
            new ChickenSmall(10000, 21),
            new ChickenSmall(10200, 22),
            new ChickenSmall(10400, 23),
            new ChickenSmall(10600, 21),
            new ChickenSmall(10800, 22),
            new ChickenSmall(11000, 23),
            new Chicken(20000, 24),
            new Chicken(25000, 24),
            new Chicken(30000, 25),
            new Chicken(35000, 25),
            new Chicken(20000, 23),
            new Chicken(25000, 23),
            new Chicken(20000, 22),
            new Chicken(25000, 22),
            new Chicken(20000, 21),
            new Chicken(25000, 21),
            new Chicken(20000, 20),
            new Chicken(22000, 20),
            new Chicken(24000, 20),
            new Chicken(28000, 20),
            new Chicken(21000, 20),
            new Chicken(28000, 21),
            new Chicken(28900, 21),
            new Chicken(29100, 22),
            new Chicken(21100, 21),
            new Chicken(21120, 22)
        ],
        [
            new Endboss(7000, 50, 9, 100, 2)
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
            // 3 coin 
            new Coin(600, 150),
            new Coin(600, 200),
            new Coin(600, 250),

            // 3 coin 
            new Coin(900, 150),
            new Coin(900, 200),
            new Coin(900, 250),

            // 3 coin 
            new Coin(1200, 150),
            new Coin(1200, 200),
            new Coin(1200, 250),

            // 9 coins
            new Coin(1600, 250),
            new Coin(1700, 200),
            new Coin(1800, 150),
            new Coin(1900, 200),
            new Coin(2000, 250),
            new Coin(2100, 200),
            new Coin(2200, 150),
            new Coin(2300, 200),
            new Coin(2400, 250),
            new Coin(2500, 200),
            new Coin(2600, 150),
            new Coin(2700, 200),
            new Coin(2800, 250),
            new Coin(2900, 200),
            new Coin(3000, 150),
            new Coin(3100, 200),
            new Coin(3200, 250),

            // 4 coins
            new Coin(3800, 150),
            new Coin(3850, 150),
            new Coin(3900, 150),
            new Coin(3950, 150),
            new Coin(4000, 150),

            // 5 coins vertical
            new Coin(4400, 100),
            new Coin(4400, 150),
            new Coin(4400, 200),
            new Coin(4400, 250),
            new Coin(4400, 300),

            // 2 coins
            new Coin(4900, 150),
            new Coin(4950, 150),

            // 1 coin
            new Coin(5300, 150),

            // 2 coins
            new Coin(5600, 150),
            new Coin(5600, 150),

            // 3 coins
            new Coin(6050, 200),
            new Coin(6100, 150),
            new Coin(6150, 200),

            // bottles
            new Bottle(-656, 360),
            new Bottle(-289, 360),
            new Bottle(-475, 360),
            new Bottle(-168, 360),
            new Bottle(-201, 360),
            new Bottle(-319, 360),
            new Bottle(-582, 360),
            new Bottle(-174, 360),
            new Bottle(750, 360),
            new Bottle(1350, 360),
            new Bottle(1400, 360),
            new Bottle(1600, 360),
            new Bottle(1670, 360),
            new Bottle(2000, 360),
            new Bottle(2850, 360),
            new Bottle(3000, 360),
            new Bottle(3080, 360),
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