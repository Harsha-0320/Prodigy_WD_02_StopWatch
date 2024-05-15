let timer;
let isRunning = false;
let startTime;
let lapCounter = 1;

function startStop() {
  if (!isRunning) {
    isRunning = true;
    startTime = new Date().getTime();
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startStopBtn").textContent = "Stop";
  } else {
    isRunning = false;
    clearInterval(timer);
    document.getElementById("startStopBtn").textContent = "Start";
  }
}

function updateDisplay() {
  const currentTime = new Date().getTime();
  const elapsedTime = new Date(currentTime - startTime);
  const minutes = elapsedTime.getMinutes().toString().padStart(2, '0');
  const seconds = elapsedTime.getSeconds().toString().padStart(2, '0');
  const milliseconds = elapsedTime.getMilliseconds().toString().padStart(3, '0');
  document.getElementById("display").textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function recordLap() {
  const time = document.getElementById("display").textContent;
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${lapCounter}: ${time}`;
  document.getElementById("laps").appendChild(lapItem);
  lapCounter++;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById("startStopBtn").textContent = "Start";
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  lapCounter = 1;
}
