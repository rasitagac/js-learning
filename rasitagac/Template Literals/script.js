// Template Literals

const fullName = 'Raşit Ağaç';
const city = 'Antalya';
const yearOfBirth = 1996;

let val;


val = 'My name is ' + fullName + ' I\'m ' + (2021 - yearOfBirth) + ' years old ' + ' and I live in ' + city;

//ternary operator
val = ` My name is ${fullName} I'm ${(2021 - yearOfBirth >= 18)?'over 18' : 'under 18'} years old and I live in ${city}`;

console.log(val);