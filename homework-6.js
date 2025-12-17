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

const productList = ['eggs', 'cheese', 'bread'];

// Задание №8

let persons = [
    {name: 'Daniyar',
        userAge: 20,
        country: 'Russia'},
    {name: 'Vladislav',
        userAge: 20,
        country: 'Ukraine'},
    {name: 'Artur',
        userAge: 12,
        country: 'Russia'}
];

persons.push({name: 'Michael',
    userAge: 24,
    country: 'Belarus'});
console.log(persons);

// Задание №9

const humans = [
    {name: 'Elena',
        userAge: 28,
        country: 'Kazakhstan'},
    {name: 'Sergey',
        userAge: 16,
        country: 'Belarus'},
    {name: 'Daria',
        userAge: 19,
        country: 'Ukraine'} 
];

let mergingPersons = [...persons, ...humans];
console.log(mergingPersons);

const addAgeProp = mergingPersons.map(person => ({
  ...person,
  adult: person.userAge >= 18
}));

console.log(addAgeProp);