let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');

let timerInterval = null;

// Load saved state from localStorage
let totalSeconds = parseInt(localStorage.getItem('totalSeconds')) || 1500;
let endTime = parseInt(localStorage.getItem('endTime')) || null;
let isRunning = localStorage.getItem('isRunning') === 'true';

// Check if the timer was running when navigating away
if (isRunning && endTime) {
    let now = Date.now();
    let remaining = Math.floor((endTime - now) / 1000);
    if (remaining > 0) {
        totalSeconds = remaining;
        startTimer(); // Resume the timer automatically
    } else {
        totalSeconds = 0;
        isRunning = false;
        localStorage.setItem('isRunning', 'false');
    }
}

updateDisplay();

function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
}

function startTimer() {
    if (timerInterval !== null) return;

    // Set an absolute end time based on current time + remaining seconds
    if (!isRunning || !endTime) {
        endTime = Date.now() + totalSeconds * 1000;
    }
    
    isRunning = true;
    localStorage.setItem('isRunning', 'true');
    localStorage.setItem('endTime', endTime);

    timerInterval = setInterval(() => {
        let now = Date.now();
        totalSeconds = Math.max(0, Math.floor((endTime - now) / 1000));
        localStorage.setItem('totalSeconds', totalSeconds);
        updateDisplay();

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            isRunning = false;
            localStorage.setItem('isRunning', 'false');
            localStorage.removeItem('endTime');
            alert('time is up! good job focusing.');
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;
    localStorage.setItem('isRunning', 'false');
    localStorage.removeItem('endTime');
    localStorage.setItem('totalSeconds', totalSeconds);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;
    totalSeconds = 1500;
    localStorage.removeItem('isRunning');
    localStorage.removeItem('endTime');
    localStorage.removeItem('totalSeconds');
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

let focusBtn = document.getElementById('focus-btn');
let shortBreakBtn = document.getElementById('short-break-btn');
let longBreakBtn = document.getElementById('long-break-btn');

function setMode(seconds) {
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;
    totalSeconds = seconds;
    localStorage.removeItem('isRunning');
    localStorage.removeItem('endTime');
    localStorage.setItem('totalSeconds', totalSeconds);
    updateDisplay();
}

focusBtn.addEventListener('click', () => {
    setMode(1500);
});

shortBreakBtn.addEventListener('click', () => {
    setMode(300);
});

let longBreakAction = () => {
    setMode(900);
};

longBreakBtn.addEventListener('click', longBreakAction);

let watermark = document.getElementById('watermark');
watermark.addEventListener('click', () => {
    totalSeconds += 1000 * 60;
    localStorage.setItem('totalSeconds', totalSeconds);
    updateDisplay();
});