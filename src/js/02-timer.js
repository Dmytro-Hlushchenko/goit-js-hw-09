import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timerInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button');

const timer = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let selectedDate = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    if (selectedDates[0] - Date.now() <= 0) {
      Notiflix.Notify.failure("Please choose a date in the future");
    }
    else {
      selectedDate = selectedDates[0];
      startBtn.disabled = false;
    }
  },
};

startBtn.addEventListener('click', onStartBtn);

flatpickr(timerInput, options);

function onStartBtn() {
  startBtn.disabled = true;
  timerInput.disabled = true;
  Notiflix.Notify.success('Timer started!');
  timerId = setInterval(startTimer, 1000);
  };

function startTimer() {
  const timerTime = selectedDate - Date.now();
  if (timerTime < 0) {
    stopTimer();
    Notiflix.Notify.success('Finished!!!');
  } else 
  convertMs(timerTime);
};

function stopTimer() {
  clearInterval(timerId);
};

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  timer.days.textContent = addLeadingZero(days);
  timer.hours.textContent = addLeadingZero(hours);
  timer.minutes.textContent = addLeadingZero(minutes);
  timer.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};
