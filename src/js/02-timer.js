//HTML містить готову розмітку таймера, поля вибору кінцевої дати і кнопку, по кліку на яку,
//таймер повинен запускатися.Додай мінімальне оформлення елементів інтерфейсу.

//Метод onClose() з об'єкта параметрів викликається щоразу під час закриття елемента інтерфейсу,
//який створює flatpickr.Саме у ньому варто обробляти дату, обрану користувачем.Параметр
//selectedDates - це масив обраних дат, тому ми беремо перший елемент.

//Якщо користувач вибрав дату в минулому, покажи window.alert() з текстом "Please choose a date in the future".
//Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
//Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому.
//Натисканням на кнопку «Start» починається відлік часу до обраної дати з моменту натискання.

//Натисканням на кнопку «Start» скрипт повинен обчислювати раз на секунду, скільки часу залишилось до вказаної дати,
// і оновлювати інтерфейс таймера, показуючи чотири цифри: дні, години, хвилини і секунди у форматі xx: xx: xx: xx.

//Кількість днів може складатися з більше, ніж двох цифр.
//Таймер повинен зупинятися, коли дійшов до кінцевої дати, тобто 00:00:00:00.

//Якщо таймер запущений, для того щоб вибрати нову дату і перезапустити його - необхідно перезавантажити сторінку.

//Для підрахунку значень використовуй готову функцію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.


//Функція convertMs() повертає об'єкт з розрахованим часом, що залишився до кінцевої дати.
//Зверни увагу, що вона не форматує результат.Тобто, якщо залишилося 4 хвилини або будь - якої іншої складової часу,
//то функція поверне 4, а не 04.В інтерфейсі таймера необхідно додавати 0, якщо в числі менше двох символів.
//Напиши функцію addLeadingZero(value), яка використовує метод padStart()
//і перед рендерингом інтефрейсу форматує значення.

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timerInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button');
let timerTime = 0;
let timerDateMax = {};
let currentTimer = 0;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startTime = Date.now();
    timerTime = selectedDates[0] - startTime;
    if (timerTime > 0) {
      startBtn.removeAttribute('disabled');
      timerDateMax = convertMs(timerTime);
      console.log(timerDateMax);
    }
    else {
      console.log('Invalid Date')
    }
    
    },
};

startBtn.addEventListener('click', onStartBtn);
startBtn.setAttribute('disabled', '');

flatpickr(timerInput, options);

function onStartBtn() {
  startBtn.setAttribute('disabled', '');
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

  return { days, hours, minutes, seconds };
}