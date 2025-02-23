let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("button1");
const stopButton = document.getElementById("button2");
const resetButton = document.getElementById("button3");

// Format time (MM:SS:MS)
function formatTime(ms) {
    let minutes = Math.floor(ms / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    let milliseconds = Math.floor((ms % 1000) / 10);

    return (
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + ":" +
        (milliseconds < 10 ? "0" : "") + milliseconds
    );
}

// Start the stopwatch
function startStopwatch() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            timeDisplay.textContent = formatTime(elapsedTime);
        }, 10);
        running = true;
    }
}

// Stop the stopwatch
function stopStopwatch() {
    clearInterval(timerInterval);
    running = false;
}

// Reset the stopwatch
function resetStopwatch() {
    clearInterval(timerInterval);
    running = false;
    elapsedTime = 0;
    timeDisplay.textContent = "00:00:00";
}
//event listeners 
startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);