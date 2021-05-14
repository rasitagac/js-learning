// Arrays

let names = ['çınar', 'sena', 'ada', 'yiğit'];

let years = [2017, 1999, 2012, 2010];

let mix = ['sadık', 'turan', 1983, null, undefined, ['sinema', 'kitap']];

//get array item
console.log(names[0]);
console.log(names[3]);

// set array item
names[names.length] = 'emel';

// add item
years.push(1986);
years.unshift(1986);

//remove item
years.pop();
years.shift();

//indexOf
let index = names.indexOf('ada');
console.log('index: ' + index);

//reverse
names.reverse();

// sort
years.sort();

// concat
let val = years.concat(names);
console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);