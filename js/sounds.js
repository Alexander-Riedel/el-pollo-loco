let collect_coin_sound = new Audio('audio/coin.wav');
let collect_bottle_sound = new Audio('audio/bottle.wav');
let throw_sound = new Audio('audio/throw.wav');
let walking_sound = new Audio('audio/step.wav');
let jump_sound = new Audio('audio/jump.wav');
let hurt_sound = new Audio('audio/hurt.wav');
let chicken_dead_sound = new Audio('audio/chicken-dead.wav');
let chicken_small_dead_sound = new Audio('audio/chicken-small-dead.wav');
let endboss_dead_sound = new Audio('audio/peep.wav');

collect_coin_sound.volume = 0.1;
collect_bottle_sound.volume = 0.1;
throw_sound.volume = 0.1;
hurt_sound.volume = 0.2;


function muteSounds() {
    collect_coin_sound.volume = 0;
    collect_bottle_sound.volume = 0;
    throw_sound.volume = 0;
    walking_sound.volume = 0;
    jump_sound.volume = 0;
    hurt_sound.volume = 0;
    chicken_dead_sound.volume = 0;
    chicken_small_dead_sound.volume = 0;
    endboss_dead_sound.volume = 0;

    //change button 
}


function unmuteSounds() {

}