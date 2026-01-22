// Покраска всех карточек

const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = getRandomHexColor());
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = 'green';
})

// Функция-случайный цвет для карточки (нашел через поисковик)

function getRandomHexColor() {
  const randomNumber = Math.floor(Math.random() * 16777215);
  let hexColor = randomNumber.toString(16);
  hexColor = hexColor.padStart(6, '0');
  return `#${hexColor}`;
}

// Открыть Google

const openGoogleButton = document.querySelector('#open-google');
const googleURL = 'https://google.com';

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer === true) {
    window.open(googleURL);
  } else {
    return;
  }
}

// Вывод сообщения в консоль лог и в уведомлении

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// Наведение на главный заголовок и выведение его содердимого в лог
const mouseOnTitle = document.querySelector('.title');

mouseOnTitle.addEventListener ('mouseover', () => {
  const logTitleText = mouseOnTitle.textContent;
  titleLog(logTitleText);
});

function titleLog(message) {
  console.log(message);
}

// Кнопка с переключением цвета

const colorSwitchButton = document.querySelector('#two-color-switch-button');

colorSwitchButton.addEventListener('click', () => {
   colorSwitchButton.classList.toggle('two-color-button-alt');
});