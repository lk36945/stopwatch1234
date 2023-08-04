// Get DOM elements
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime;
let interval;

// Event listeners for buttons
startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);

// Start the stopwatch
function startStopwatch() {
  if (!interval) {
    startTime = Date.now();
    interval = setInterval(updateTime, 10);
  }
}

// Stop the stopwatch
function stopStopwatch() {
  clearInterval(interval);
  interval = null;
}

// Reset the stopwatch
function resetStopwatch() {
  stopStopwatch();
  display.textContent = "00:00:00";
}

// Update the displayed time
function updateTime() {
  const currentTime = Date.now() - startTime;
  const minutes = Math.floor(currentTime / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);
  const milliseconds = Math.floor((currentTime % 1000) / 10);
  display.textContent =
    padTime(minutes) + ":" + padTime(seconds) + ":" + padTime(milliseconds);
}

// Add leading zero to single-digit numbers
function padTime(value) {
  return value < 10 ? "0" + value : value;
}
