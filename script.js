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
         alert('time is up! good job focusing.');
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
  function showAchievement(title) {
    let container = document.getElementById('toast-container');
    let toast = document.createElement('div');
      toast.className = 'achievement-toast';
    toast.textContent = '🏆 Achievement Unlocked: ' + title;
      container.appendChild(toast);

  setTimeout(() => {
     toast.classList.add('show');
  }, 100);

    setTimeout(() => {
  toast.classList.remove('show');
      setTimeout(() => {
    toast.remove();
      }, 400);
    }, 3500);
}

function checkMilestones() {
    if (!achievements.first100 && cookies >= 100) {
       achievements.first100 = true;
     showAchievement('100 Cookies Baked!');
    }
    if (!achievements.first1000 && cookies >= 1000) {
       achievements.first1000 = true;
     showAchievement('Cookie Master (1,000)!');
    }
}
let watermark = document.getElementById('watermark');

watermark.addEventListener('click', () => {
    totalSeconds += 1000 * 60;
    updateDisplay();
});
