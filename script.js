let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');

let timerInterval = null;
let totalSeconds = 1500;

function updateDisplay() {
let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;

minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
}

function startTimer() {
if (timerInterval !== null) return;

     timerInterval = setInterval(() => {
if (totalSeconds > 0) {
        totalSeconds--;
updateDisplay();
     } else {
         clearInterval(timerInterval);
       timerInterval = null;
         alert('Time is up! Great job focusing.');
       }
     }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
timerInterval = null;
}

function resetTimer() {
   clearInterval(timerInterval);
     timerInterval = null;
  totalSeconds = 1500;
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
      totalSeconds = seconds;
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