import '../sass/main.css';

const salatButton = document.querySelector('[data-salat]');
const omletButton = document.querySelector('[data-omlet]');
const drinkButton = document.querySelector('[data-drink]');

const arrayEl = document.querySelector('[data-array]');
const mainEl = document.querySelector('[data-main]');
// const contentEl = document.querySelector('[data-content]');

const paragraphEl = document.querySelector('[data-paragraph]');

const closeEl = document.querySelector('[data-close]');

salatButton.addEventListener('click', () => {
  openListArray();
});

omletButton.addEventListener('click', () => {
  openListArray();
});

drinkButton.addEventListener('click', () => {
  openListArray();
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
}
