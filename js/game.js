let canvas;
let world;
let keyboard = new Keyboard();
let levelNumber;


/**
 * Initializes the game with the specified level number.
 * This function sets up the game environment, hides unnecessary screens and elements, and initializes the game world.
 * @param {number} number - The level number to initialize.
 */
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


/**
 * Initializes the game for restarting.
 * This function resets the level number, displays the lose screen, hides the win screen,
 * hides the canvas, shows interaction buttons, and closes any open sliders.
 */
function initRestartGame() {
    levelNumber = 1;
    document.getElementById('lose-screen').classList.remove('d-none');
    document.getElementById('win-screen').classList.add('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('interaction-buttons').classList.remove('d-none');
    closeSlider();
}


/**
 * Initializes the game when it's won.
 * This function resets the level number, displays the win screen, hides the lose screen,
 * hides the canvas, shows interaction buttons, and closes any open sliders.
 */
function initGameWon() {
    levelNumber = 1;
    document.getElementById('win-screen').classList.remove('d-none');
    document.getElementById('lose-screen').classList.add('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('interaction-buttons').classList.remove('d-none');
    closeSlider();
}


/**
 * Calls the initialization function for the specified level number.
 * This function constructs the name of the initialization function based on the level number,
 * checks if the function exists, and invokes it if it does.
 * @param {number} number - The level number for which to call the initialization function.
 */
function callInitLevel(number) {
    var functionName = "initLevel" + number;
    if (typeof window[functionName] === 'function') {
        window[functionName]();
    }
}


/**
 * Listens for keydown events and updates the keyboard object accordingly.
 * This function listens for specific key codes and sets the corresponding properties in the keyboard object.
 * @param {Event} e - The keydown event object.
 */
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


/**
 * Listens for keyup events and updates the keyboard object accordingly.
 * This function listens for specific key codes and resets the corresponding properties in the keyboard object.
 * @param {Event} e - The keyup event object.
 */
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


/**
 * Listens for touchstart events and updates the keyboard object accordingly.
 * This function listens for touchstart events on specific elements and sets the corresponding properties in the keyboard object.
 * @param {TouchEvent} e - The touchstart event object.
 */
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


/**
 * Listens for touchend events and updates the keyboard object accordingly.
 * This function listens for touchend events on specific elements and resets the corresponding properties in the keyboard object.
 * @param {TouchEvent} e - The touchend event object.
 */
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