//Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів,
//скільки ввели в поле amount.Під час кожного виклику передай їй номер промісу(position), що створюється,
// і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step).

//Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або
// відхиляється через delay часу.Значенням промісу повинен бути об'єкт, в якому будуть властивості
//position і delay зі значеннями однойменних параметрів.Використовуй початковий код функції для вибору того,
// що потрібно зробити з промісом - виконати або відхилити.

const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
