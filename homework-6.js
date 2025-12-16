// Задание №3

let user = {
    name: 'Daniyar',
    surname: 'Suleiman',
    age: 20,
    email: 'daniyar.bin.kamil@gmail.com',
    country: 'Russian Federation',
    town: 'Sibay',
    relationshipStatus: 'married'
};

// Задание №4

let car = {
    brand: 'Lada',
    model: 'Vesta',
    yearOfRelease: 2025,
    transmissionType: 'manual transmission',
    color: 'metallic'
};

car = {...car, user}

console.log(car);

// Задание №5

function findProperty(car) {
    if (car.hasOwnProperty('maxSpeed') === false) {
        car.maxSpeed = 188;
        } else {return};
};
findProperty(car);
console.log(car);

// Задание №6

function printPropertyValue(obj, propName) {
  console.log(obj[propName]);
}
printPropertyValue(car, 'brand');

// Задание №7

let productList = ['eggs', 'cheese', 'bread'];

// Задание №8

let person = [
    {name: 'Daniyar', userAge: 20, country: 'Russia'},
    {name: 'Vladislav', userAge: 20, country: 'Ukraine'},
    {name: 'Artur', userAge: 36, country: 'Russia'}
];

person.push({name: 'Michael', age: 24, country: 'Belarus'});
console.log(person);

// Задание №9

let human = [
    {name: 'Elena', userAge: 28, country: 'Kazakhstan'},
    {name: 'Sergey', userAge: 45, country: 'Belarus'},
    {name: 'Daria', userAge: 19, country: 'Ukraine'} 
];

let mergingArraysPersons = [...person, ...human];
console.log(mergingArraysPersons);

// Задание №10

function findOutAge(age) {
    if (age >= 30) {
        console.log('Этот человек зрелый.');
    } else {
        console.log('Этот тип заряженный.');
    }
}

findOutAge(mergingArraysPersons[0].userAge);
findOutAge(mergingArraysPersons[1].userAge);
findOutAge(mergingArraysPersons[4].userAge);
findOutAge(mergingArraysPersons[5].userAge);