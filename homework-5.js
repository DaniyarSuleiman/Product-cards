// Задание №3. Создание функций принимающих аргументы город и температура.

function getTemperature(town, temperature) {
  return `В городе ${town} сейчас ${temperature} градусов.`;
}

const message1 = getTemperature('Сибай', -24);
const message2 = getTemperature('Уфа', -18);

console.log(message1);
console.log(message2);

// Задание №4.

const LIGHT_SPEED = 299792458; 

function compareSpeed(speed) { 
  if (speed > LIGHT_SPEED) { 
    console.log('Сверхсветовая скорость'); 
  } else if (speed < LIGHT_SPEED) { 
    console.log('Субсветовая скорость'); 
  } else {
    console.log('Световая скорость'); 
  } 
} 

compareSpeed(200000);
compareSpeed(299792458);
compareSpeed(399792458);

// Задание №5.

const product = 'Хлеб';
const productPrice = 50;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`Вы купили ${product} за ${productPrice} рублей. Спасибо за покупку!`);
  } else {
    let difference = productPrice - budget;
    console.log(`Вам не хватает ${difference} рублей.`);
  }
}

buyProduct(75);
buyProduct(50);
buyProduct(40);

// Задание №6.

const getNumberPages = (book, pages) => {
  console.log(`В книге ${book} вы прочитали ${pages} страниц.`)
}

getNumberPages('Война и мир', 100);
getNumberPages('Преступление и наказание', 50);

// Задание №7.

var bird = 'eagle';
let car = 'ford';
const freeFallSpeed = "9,8";