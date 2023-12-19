let canvas;
let world;
let keyboard = new Keyboard();
let levelNumber;

function init(number) {
    levelNumber = number;
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('interaction-buttons').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    callInitLevel(number);
    //initLevel(number);
    world = new World(canvas, keyboard);
}

function callInitLevel(number) {
    // Den Funktionsnamen generieren
    var functionName = "initLevel" + number;

    // Überprüfen, ob die Funktion existiert
    if (typeof window[functionName] === 'function') {
        // Funktion aufrufen
        window[functionName]();
    } else {
        console.error("Die Funktion " + functionName + " existiert nicht.");
    }
}


/* function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
}


function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
}


function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
} */


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