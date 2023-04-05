//Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.
//Такий таймер може використовуватися у блогах та інтернет - магазинах, сторінках реєстрації подій,
// під час технічного обслуговування тощо.Подивися демо - відео роботи таймера.

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const timerInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button');

startBtn.addEventListener('click', onStartBtn);
// startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(timerInput, options);

function onStartBtn() {
    window.alert('');
};