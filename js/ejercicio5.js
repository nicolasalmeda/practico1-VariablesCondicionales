let seconds = 0;
let timerInterval;

function start() {
    timerInterval = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
}

function pause() {
    clearInterval(timerInterval);
}

function reset() {
    seconds = 0;
    updateTimer();
}

function updateTimer() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

    document.getElementById('timer').innerText = formattedTime;
}