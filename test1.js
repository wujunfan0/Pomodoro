function formatTime(number) {
    return number < 10 ? "0" + number : number;
}

console.log(formatTime(9));
console.log(formatTime(25));

let secondsLeft = 5;

while (secondsLeft > 0) {
    console.log("Tick: " + secondsLeft);
    secondsLeft--;
}

console.log("Time's up!");

let userTask = "";

if (userTask === "") {
    console.log("Error: Please type a task before starting your focus session!");
} else {
    console.log("Great! Starting timer for: " + userTask);
}