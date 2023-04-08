const bodyRef = document.querySelector('body')
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

let timerId = null;

function onStartBtn() {
    timerId = setInterval(() => { bodyRef.style.backgroundColor = getRandomHexColor() }, 1000);
    startBtn.setAttribute("disabled",'')    
};

function onStopBtn() {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled');
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
