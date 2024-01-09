let canvas;
let world;
let keyboard = new Keyboard();
let levelNumber;


function init(number) {
    levelNumber = number;
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('lose-screen').classList.add('d-none');
    document.getElementById('win-screen').classList.add('d-none');
    document.getElementById('interaction-buttons').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    callInitLevel(number);
    world = new World(canvas, keyboard);
}


function initRestartGame() {
    levelNumber = 1;
    document.getElementById('lose-screen').classList.remove('d-none');
    document.getElementById('win-screen').classList.add('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('interaction-buttons').classList.remove('d-none');
    closeSlider();
}


function initGameWon() {
    levelNumber = 1;
    document.getElementById('win-screen').classList.remove('d-none');
    document.getElementById('lose-screen').classList.add('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('interaction-buttons').classList.remove('d-none');
    closeSlider();
}


function callInitLevel(number) {
    var functionName = "initLevel" + number;
    if (typeof window[functionName] === 'function') {
        window[functionName]();
    }
}


window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});


window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});


window.addEventListener("touchstart", (e) => {
    document.getElementById('right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    })

    document.getElementById('left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    })

    document.getElementById('space').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    })

    document.getElementById('action').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    })
});


window.addEventListener("touchend", (e) => {
    document.getElementById('right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    })

    document.getElementById('left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    })

    document.getElementById('space').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    })

    document.getElementById('action').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    })
});