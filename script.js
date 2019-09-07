let time = null;
let timerId = null;

const hoursElement = document.querySelector(`.hours`);
const minutesElement = document.querySelector(`.minutes`);
const secondsElement = document.querySelector(`.seconds`);

function addZero(number) {
  if (number < 10) {
    return `0` + number;
  }

  return number;
}

function updateTime() {
  time = new Date();

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hoursElement.textContent = addZero(hours);
  minutesElement.textContent = addZero(minutes);
  secondsElement.textContent = addZero(seconds);
}

function init() {
  time = new Date();
  start();
}

function start() {
  updateTime();
  time = time + 1000;
  timerId = setTimeout(start, 1000);
}

function stop() {
  clearTimeout(timerId);
}

init();
document.querySelector(`.start`).addEventListener(`click`, start);
document.querySelector(`.stop`).addEventListener(`click`, stop);
