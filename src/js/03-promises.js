//Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів,
//скільки ввели в поле amount. !!!! Під час кожного виклику передай їй номер промісу(position), що створюється,
// і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step).

//Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або
// відхиляється через delay часу.Значенням промісу повинен бути об'єкт, в якому будуть властивості
//position і delay зі значеннями однойменних параметрів.Використовуй початковий код функції для вибору того,
// що потрібно зробити з промісом - виконати або відхилити.

const formInput = document.querySelector('.form');

formInput.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(e) {
  e.preventDefault();
  
  const delay = formInput['delay'].value;
  const step = formInput['step'].value;
  const amount = formInput['amount'].value;

  let position = 0;
  for (let i = 0; i < amount; i += 1) {
    position = i;
    createPromise(position, delay, step);
    }
}

function createPromise(position, delay, step) {
  const promise = new Promise((resolve, rejected) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve('zaebis');
      }
      rejected('ploho');
    }, delay);
  },);
  
  promise.then(result => {
    console.log(result);
  },
    error => { 
      console.log(error)
    })
  
};
