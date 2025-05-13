const timer = document.getElementById('timer');

let time = 10;

const button = document.getElementById('startButton');

button.addEventListener("click", function() {
    const interval = setInterval(() => {
        timer.textContent = time;
        time -= 1;
    }, 1000)
    setTimeout(() => {
        clearInterval(interval);
        timer.textContent = "Time's Up!";
    }, 10000)
});