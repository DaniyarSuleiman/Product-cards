// Задание №3. Создание функций принимающих аргументы город и температура.

function townWeather(town, temperature,) {
  console.log(`В городе ${town} сейчас ${temperature} градусов.`);
}

townWeather('Сибай', -24);
townWeather('Уфа', -18)

// Задание №4.

const LIGHT_SPEED = 299792458; 

function speedTest(speed) { 
  if (speed > LIGHT_SPEED) { 
    console.log('Сверхсветовая скорость'); 
  } else if (speed < LIGHT_SPEED) { 
    console.log('Субсветовая скорость'); 
  } else {
    console.log('Световая скорость'); 
  } 
} 

speedTest(200000);
speedTest(299792458);
speedTest(399792458);

// Задание №5.

const product = 'Хлеб';
const productPrice = 50;

function calc(budget) {
  if (budget >= productPrice) {
    console.log(`Вы купили ${product} за ${productPrice} рублей. Спасибо за покупку!`);
  } else {
    let difference = productPrice - budget;
    console.log(`Вам не хватает ${difference} рублей.`);
  }
}

calc(75);
calc(50);
calc(40);

// Задание №6.

const cityWeather = (city, temperature) => {
  console.log(`В городе ${city} сейчаc ${temperature} градусов.`)
}

townWeather('Москва', -15);
townWeather('Казань', -19);

// Задание №7.

var bird = 'eagle';
let car = 'ford';
const freeFallSpeed = "9,8";