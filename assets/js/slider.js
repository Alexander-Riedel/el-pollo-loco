/**
 * Opens the slider by removing classes to reveal the slider.
 */
function openSlider() {
    document.getElementById('slider-container').classList.remove('slide-to-top');
    document.getElementById('slider-bg').classList.remove('fadeOut');
    document.getElementById('screen-center').classList.add('screen-center');
    document.getElementById('slider-bg').classList.add('slider-bg');
    document.getElementById('screen-center').classList.remove('d-none');
    document.getElementById('slider-bg').classList.remove('d-none');
    document.getElementById('slider-container').classList.add('slider-container');
    document.getElementById('slider-bg').classList.add('fadeIn');
    document.getElementById('slider-container').classList.add('slide-from-top');
    document.getElementById('slider-container').classList.remove('d-none');
}


/**
 * Closes the slider by adding classes to hide it.
 */
function closeSlider() {
    document.getElementById('slider-container').classList.remove('slide-from-top');
    document.getElementById('slider-bg').classList.remove('fadeIn');
    document.getElementById('slider-container').classList.add('slide-to-top');
    document.getElementById('slider-bg').classList.add('fadeOut');
    setTimeout(function () {
        document.getElementById('slider-container').classList.add('d-none');
        document.getElementById('slider-container').classList.remove('slider-container');
    }, 120);
    setTimeout(function () {
        document.getElementById('slider-bg').classList.add('d-none');
        document.getElementById('slider-bg').classList.remove('slider-bg');
        document.getElementById('screen-center').classList.add('d-none');
        document.getElementById('screen-center').classList.remove('screen-center');
    }, 500);
    userData = [];
}


/**
 * Renders a message indicating that the level has been completed in the slider.
 */
function renderLevelDone() {
    document.getElementById('slider-container').innerHTML = `
        <div id="slider">
            <span>LEVEL</span>
            <span>${levelNumber}</span>
            <span>COMPLETED!</span>
        </div>
    `;
}


/**
 * Renders a message indicating that the player has lost in the slider.
 */
function renderYouLose() {
    document.getElementById('slider-container').innerHTML = `
        <div id="slider">
            <span>YOU</span>
            <span>LOSE!</span>
        </div>
    `;
}


/**
 * Renders a message indicating that the player has won in the slider.
 */
function renderYouWin() {
    document.getElementById('slider-container').innerHTML = `
        <div id="slider">
            <span>WINNER</span>
            <span>WINNER</span>
            <span>CHICKEN</span>
            <span>DINNER</span>
        </div>
    `;
}