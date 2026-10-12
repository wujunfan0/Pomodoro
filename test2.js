let userTask = "Learn JavaScript";
let sessionSeconds = 5;

if (userTask.trim() === "") {
console.log("error: ypou must enter a task name before starting");
} else {
console.log("starting fovus session for: '" + userTask + "'");

  function formatTime(number) {
return number < 10 ? "0" + number : number;
  }
//tierm
     let countdownInterval = setInterval(() => {
        if (sessionSeconds > 0) {
      let displayFormatted = "00:" + formatTime(sessionSeconds);
            console.log("⏱️ Timer: " + displayFormatted);
            
       sessionSeconds--;
         } else {
       clearInterval(countdownInterval);
             console.log("Focus session complete! great job working on: " + userTask);
}
    }, 1000);
}

//