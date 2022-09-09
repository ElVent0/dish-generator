import '../sass/main.css';
import food from '../js/data.json';

const salatButton = document.querySelector('[data-salat]');
const omletButton = document.querySelector('[data-omlet]');
const drinkButton = document.querySelector('[data-drink]');

const arrayEl = document.querySelector('[data-array]');
const mainEl = document.querySelector('[data-main]');
// const contentEl = document.querySelector('[data-content]');

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
  paragraphEl.classList.toggle('hidden');
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
  arrayEl.removeChild(document.querySelector('.hero__array-list'));
}

function makeSalat() {
  const commonFinal = `
  <li class="inner-item">${food[0].common[0]}</li>
  <li class="inner-item">${food[0].common[0]}</li>
  <li class="inner-item">${food[0].common[0]}</li>
  <li class="inner-item">${food[0].common[0]}</li>
  <li class="inner-item">${food[0].common[0]}</li>
  <li class="inner-item">${food[0].common[0]}</li>`;
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
  console.log(markup);
  arrayEl.insertAdjacentHTML('afterbegin', markup);
}

function makeOmlet() {
  const omletFinal = `
  <li class="inner-item">${food[0].omlet[0]}</li>
  <li class="inner-item">${food[0].omlet[1]}</li>
  <li class="inner-item">${food[0].omlet[2]}</li>`;

  const commonFinal = `
  <li class="inner-item">${food[0].common[0]}</li>
  <li class="inner-item">${food[0].common[1]}</li>
  <li class="inner-item">${food[0].common[2]}</li>
  <li class="inner-item">${food[0].common[0]}</li>
  <li class="inner-item">${food[0].common[1]}</li>
  <li class="inner-item">${food[0].common[2]}</li>`;

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
  const omletFinal = `
  <li class="inner-item">Молоко</li>`;

  const commonFinal = `
  <li class="inner-item">${food[0].common[0]}</li>
  <li class="inner-item">${food[0].common[1]}</li>
  <li class="inner-item">${food[0].common[2]}</li>
  <li class="inner-item">${food[0].common[0]}</li>`;

  const randomSause = (Math.random() * (4 - 0) + 0).toFixed(0);
  const sause = `<li class="inner-item">${food[0].sause[randomSause]}</li>`;
  const markup = `
  <ul class="hero__array-list">
  <li class="hero__array-item"><h2 class="hero__array-title">Залити в блендер:</h2>
    <ul class="inner-list">${omletFinal}</ul>
  </li>
  <li class="hero__array-item"><h2 class="hero__array-title">Додати в блендер до молока:</h2>
    <ul class="inner-list">${commonFinal}</ul>
  </li>
  <ul>`;
  arrayEl.insertAdjacentHTML('afterbegin', markup);
}

console.log(food[0].omlet);
