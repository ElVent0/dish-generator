import './sass/main.css';
import food from './js/data.json';

const salatButton = document.querySelector('[data-salat]');
const omletButton = document.querySelector('[data-omlet]');
const drinkButton = document.querySelector('[data-drink]');
const foodsEl = document.getElementsByClassName('hero__paragraph-list');
const arrayEl = document.querySelector('[data-array]');
const mainEl = document.querySelector('[data-main]');
const paragraphEl = document.querySelector('[data-paragraph]');
const closeEl = document.querySelector('[data-close]');

omletButton.addEventListener('click', () => {
  openListArray();
  makeSalat();
});

salatButton.addEventListener('click', () => {
  openListArray();
  makeOmlet();
});

drinkButton.addEventListener('click', () => {
  openListArray();
  makeDrink();
});

closeEl.addEventListener('click', () => {
  openListArray();
  onClose();
});

function openListArray() {
  arrayEl.classList.toggle('hero__array-open');
  mainEl.classList.toggle('hero__main-open');
  closeEl.classList.toggle('hidden');
  paragraphEl.classList.add('hidden');
  arrayEl.classList.add('animateForvard');
  arrayEl.classList.remove('animateBack');
  mainEl.classList.add('animateForvardMain');
  mainEl.classList.remove('animateBacMain');
}

function onClose() {
  arrayEl.classList.add('animateBack');
  arrayEl.classList.remove('animateForvard');
  mainEl.classList.remove('animateForvardMain');
  mainEl.classList.add('animateBacMain');

  function callback() {
    arrayEl.removeChild(document.querySelector('.hero__array-list'));
    paragraphEl.classList.remove('hidden');
  }

  setTimeout(callback, 700);
}

function makeSalat() {
  const counter = 6;
  const salatArray = [];
  const arrayFinal = [];

  for (let i = 0; i < counter; i += 1) {
    let maxNumber = food[0].common.length - 1;
    let randomNumber = (Math.random() * (maxNumber - 0) + 0).toFixed(0);
    if (!salatArray.includes(randomNumber)) {
      salatArray.push(randomNumber);
    }
  }

  salatArray.map(number => {
    let mark = `<li class="inner-item">${food[0].common[number]}</li>`;
    console.log(number, food[0].common[number]);
    arrayFinal.push(mark);
  });

  const commonFinal = arrayFinal.join('');

  const salatFinal = `<li class="inner-item">${food[0].salat}</li>`;

  const markup = `
  <ul class="hero__array-list">
  <li class="hero__array-item"><h2 class="hero__array-title">Нарізати і перемішати:</h2>
    <ul class="inner-list">${commonFinal}</ul>
  </li>
  <li class="hero__array-item"><h2 class="hero__array-title">Полити зверху:</h2>
    <ul class="inner-list">${salatFinal}</ul>
  </li>
  </ul>`;
  arrayEl.insertAdjacentHTML('afterbegin', markup);
}

function makeOmlet() {
  const omletFinal = `
  <li class="inner-item">${food[0].omlet[0]}</li>
  <li class="inner-item">${food[0].omlet[1]}</li>
  <li class="inner-item">${food[0].omlet[2]}</li>`;

  const counter = 6;
  const omletArray = [];
  const arrayFinal = [];

  for (let i = 0; i < counter; i += 1) {
    let maxNumber = food[0].common.length - 1;
    let randomNumber = (Math.random() * (maxNumber - 0) + 0).toFixed(0);
    console.log(randomNumber);
    if (!omletArray.includes(randomNumber)) {
      if (randomNumber !== 13) {
        omletArray.push(randomNumber);
      }
    }
  }

  omletArray.map(number => {
    let mark = `<li class="inner-item">${food[0].common[number]}</li>`;
    arrayFinal.push(mark);
  });

  const commonFinal = arrayFinal.join('');

  const randomSause = (Math.random() * (4 - 0) + 0).toFixed(0);
  const sause = `<li class="inner-item">${food[0].sause[randomSause]}</li>`;
  const markup = `
  <ul class="hero__array-list">
  <li class="hero__array-item"><h2 class="hero__array-title">Змішати та почати смажити:</h2>
    <ul class="inner-list">${omletFinal}</ul>
  </li>
  <li class="hero__array-item"><h2 class="hero__array-title">Нарізати і додати на сковороду через кілька хвилин:</h2>
    <ul class="inner-list">${commonFinal}</ul>
  </li>
  <li class="hero__array-item"><h2 class="hero__array-title">Вкінці додати соус:</h2>
    <ul class="inner-list">${sause}</ul>
  </li>
  <ul>`;
  arrayEl.insertAdjacentHTML('afterbegin', markup);
}

function makeDrink() {
  const drinkFinal = `
  <li class="inner-item">Молоко</li>
  <li class="inner-item">Морозиво</li>`;

  const counter = 4;
  const fruitsArray = [];
  const arrayFinal = [];

  for (let i = 0; i < counter; i += 1) {
    let maxNumber = food[0].fruits.length - 1;
    let randomNumber = (Math.random() * (maxNumber - 0) + 0).toFixed(0);
    console.log(randomNumber);
    if (!fruitsArray.includes(randomNumber)) {
      fruitsArray.push(randomNumber);
    }
  }

  fruitsArray.map(number => {
    let mark = `<li class="inner-item">${food[0].fruits[number]}</li>`;
    arrayFinal.push(mark);
  });

  const fruitsFinal = arrayFinal.join('');

  const markup = `
  <ul class="hero__array-list">
  <li class="hero__array-item"><h2 class="hero__array-title">Залити в блендер:</h2>
    <ul class="inner-list">${drinkFinal}</ul>
  </li>
  <li class="hero__array-item"><h2 class="hero__array-title">Додати в блендер до молока:</h2>
    <ul class="inner-list">${fruitsFinal}</ul>
  </li>
  <ul>`;
  arrayEl.insertAdjacentHTML('afterbegin', markup);
}

console.log(foodsEl.length);

const listOfClass = ['big', 'yellow', 'background'];

function garlandCallback() {
  let randomElement = (Math.random() * (foodsEl.length - 1) + 1).toFixed(0);
  let randomClass = (Math.random() * (listOfClass.length - 1) + 1).toFixed(0);
  foodsEl[randomElement].classList.add(`${listOfClass[randomClass - 1]}`);
  setTimeout(smallCallback, 250);

  function smallCallback() {
    foodsEl[randomElement].classList.remove(`${listOfClass[randomClass - 1]}`);
  }
  const clone = foodsEl[0].cloneNode(true);
  paragraphEl.appendChild(clone);
  foodsEl[0].remove();
}

function intervalCallback() {
  setInterval(garlandCallback, 500);
}

setInterval(garlandCallback, 500);

setTimeout(intervalCallback, 250);
