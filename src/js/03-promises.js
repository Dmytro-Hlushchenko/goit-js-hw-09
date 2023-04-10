import Notiflix from "notiflix";

const formInput = document.querySelector('.form')

formInput.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const form = event.currentTarget;
  let delay = +form['delay'].value;
  const amount = +form['amount'].value;
  const step = +form['step'].value;
  
  let position = 0;

  for (let i = 0; i < amount; i += 1) {
    position = i;

    let fullDelay = delay += step;

    createPromise(position, delay, fullDelay)
      .then(({ position, fullDelay }) => {

        setTimeout(() => {
          Notiflix.Notify.success(`Fulfilled promise ${position} in ${fullDelay}ms`);
        }, fullDelay)
      })

      .catch(({ position, fullDelay }) => {
        setTimeout(() => {
          Notiflix.Notify.warning(`Rejected promise ${position} in ${fullDelay}ms`);
        }, fullDelay)
      })
  }
});


function createPromise(position, fullDelay) {
  const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {

        if (shouldResolve) {
         return resolve({position, fullDelay})
        } else {
         return reject({position, fullDelay})
        }
  })
}