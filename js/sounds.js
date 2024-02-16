let collect_coin_sound = new Audio('audio/coin.wav');
let collect_bottle_sound = new Audio('audio/bottle.wav');
let throw_sound = new Audio('audio/throw.wav');
let walking_sound = new Audio('audio/step.wav');
let jump_sound = new Audio('audio/jump.wav');
let hurt_sound = new Audio('audio/hurt.wav');
let chicken_dead_sound = new Audio('audio/chicken-dead.wav');
let chicken_small_dead_sound = new Audio('audio/chicken-small-dead.wav');
let endboss_dead_sound = new Audio('audio/peep.wav');
let glass_hit = new Audio('audio/glass-hit.wav');

collect_coin_sound.volume = 0.1;
collect_bottle_sound.volume = 0.1;
throw_sound.volume = 0.1;
walking_sound.volume = 1;
jump_sound.volume = 1;
hurt_sound.volume = 0.2;
chicken_dead_sound.volume = 0.5;
chicken_small_dead_sound.volume = 0.7;
endboss_dead_sound.volume = 0.6;
glass_hit.volume = 0.1


function toggleSound() {
    let muteButton = document.getElementById('mute-button');
    if (muteButton.getAttribute('onclick') === 'toggleSound(), muteSounds()') {
        muteButton.setAttribute('onclick', 'toggleSound(), unmuteSounds()');
        muteButton.innerHTML = '<img id="mute" src="/img/keys/muted.svg" alt="left" />';
    } else {
        muteButton.setAttribute('onclick', 'toggleSound(), muteSounds()');
        muteButton.innerHTML = '<img id="mute" src="/img/keys/unmuted.svg" alt="left" />';
    }

    let muteButtonDesktop = document.getElementById('mute-button-desktop');
    if (muteButtonDesktop.getAttribute('onclick') === 'toggleSound(), muteSounds()') {
        muteButtonDesktop.setAttribute('onclick', 'toggleSound(), unmuteSounds()');
        muteButtonDesktop.innerHTML = '<img id="mute" src="/img/keys/muted.svg" alt="left" />';
    } else {
        muteButtonDesktop.setAttribute('onclick', 'toggleSound(), muteSounds()');
        muteButtonDesktop.innerHTML = '<img id="mute" src="/img/keys/unmuted.svg" alt="left" />';
    }
}


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
    glass_hit.volume = 0;
}


function unmuteSounds() {
    collect_coin_sound.volume = 0.1;
    collect_bottle_sound.volume = 0.1;
    throw_sound.volume = 0.1;
    walking_sound.volume = 1;
    jump_sound.volume = 1;
    hurt_sound.volume = 0.2;
    chicken_dead_sound.volume = 0.5;
    chicken_small_dead_sound.volume = 0.7;
    endboss_dead_sound.volume = 0.6;
    glass_hit.volume = 0.5;
}