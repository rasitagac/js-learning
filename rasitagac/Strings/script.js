//Strings

const firstName = 'Raşit';
const lastName = 'Ağaç';
let hobbies = 'sinema, spor, kitap, yazılım';
const age = 25;
let val;

// string concat

val = firstName + ' ' + lastName;
val = 'Raşit';
val += ' Ağaç';

val = 'Benim adım ' + firstName + ' ' + lastName + ' yaşım: ' + age + ' ve ben Antalya\'da yaşıyorum.';

//string concat

val = firstName.concat(' ', lastName);

//string length
//val = val.length;

//string uppercase - lowercase
val = val.toUpperCase();
val = val.toLowerCase();

//string replace
//val = val.replace('raşit', 'rafet');

// string trim = delete spaces both ends and stars
val = ' ' + val.replace('raşit', 'rafet') + '                 ';
val = val.trim();

//string trim
// sting substring
//val = val.substring(0, 5);

// slice method
//val = val.slice(5);

//val = val.indexOf('x');

//every string is an array
//val = val[1];

//Splitting method
val = hobbies.split(',');

console.log(val);
console.log(typeof val);