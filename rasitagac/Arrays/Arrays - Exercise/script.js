// Demo : Arrays

let cars = ['Bmw', 'Mercedes', 'Opel', 'Mazda'];
//let cars2 = new array('Bmw', 'Mercedes', 'Opel', 'Mazda');


console.log(cars.length);
console.log(cars[0]);
console.log(cars[cars.length-1]);

cars.push('Renault');
console.log(cars);

cars.unshift('Toyota');
console.log(cars);

cars.pop();
console.log(cars);

cars.shift();
console.log(cars);

cars.reverse();
console.log(cars);

cars.sort();
console.log(cars);

let numbers = [1, 2, 5, 80, 15];

function compare(a, b) {
    if (a > b)
        return 1;
    if (a == b)
        return 0;
    if (a < b)
        return -1;
}

console.log(numbers.sort(compare));

// numbers.sort();
// console.log(numbers);

console.log(cars.includes('Opel'));

// Stringi arraya çevirme
let str = 'Chevrolet,Dacia';
let cars2 = str.split(',');

console.log(cars2);

let carsAll = cars.concat(cars2);
console.log(carsAll);

carsAll.splice(carsAll.length-2, 2);
console.log(carsAll);

let studentA = ['Yiğit', 'Bilgi', 2010];
let studentB = ['Sena', 'Turan', 1999];
let studentC = ['Ahmet', 'Turan', 1998];

let students = [studentA, studentB, studentC];

console.log(students);
