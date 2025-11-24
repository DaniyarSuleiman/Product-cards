// Покраска первой карточки

const cardContainer = document.querySelector('.card-container');
const changeColorForFirstCardButton = document.querySelector('#change-color-for-first-card-button');
let blueColorHash = "#00FF"

changeColorForFirstCardButton.addEventListener('click', () => {
  cardContainer.style.backgroundColor = blueColorHash;
})

// Покраска всех карточек

const cardContainers = document.querySelectorAll('.card-container');
const changeCardsColorButton = document.querySelector('#change-color-cards-button');
let greenColorHash = '#00FF00';

changeCardsColorButton.addEventListener('click', () => { 
  cardContainers.forEach((card) => card.style.backgroundColor = greenColorHash);
})

// Переход на страницу Google.com с помощью простой функции

const linkToGoogleBtn = document.querySelector('#open-page-google-btn');
const googleURL = ('https://google.com');
linkToGoogleBtn.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm("Вы точно хотите перейти на Google.com?");
  if(answer === true) {
    window.open(googleURL)
  } else {
    return;
  }
}

// Вывод в консоль

const outputConsoleBtn = document.querySelector('#output-console-btn');
outputConsoleBtn.addEventListener('click', () => outputConsoleLogAlert('ДЗ №4'));

function outputConsoleLogAlert(message) {
  alert(message);
  console.log(message);
}

// Вывод заголовка в консоль при наведении

const heading = document.querySelector('.the-first-headline');
heading.addEventListener('mouseover', () => outputConsoleLog(heading));

function outputConsoleLog(element) {
  console.log(element.textContent);
}

// Кнопка изменяющая свой цвет

const changeBtnColor = document.getElementById('change-btn-color');
const lightVioletBtnClr = '#7875ddff';
const originalColor = changeBtnColor.style.backgroundColor || ''; // Запоминаем оригинальный цвет
let isViolet = false; // Переменная для отслеживания состояния

changeBtnColor.addEventListener('click', () => {
  if (isViolet) {
    changeBtnColor.style.backgroundColor = originalColor; // Возвращаем оригинальный цвет
  } else {
    changeBtnColor.style.backgroundColor = lightVioletBtnClr; // Меняем на фиолетовый
  }
  isViolet = !isViolet; // Переключаем состояние
});

