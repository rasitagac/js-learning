//Demo: Strings

var sentence = ' Template Literals or template strings is the is the ability Have multi-line strings without any funny business.    ';

var url= 'http://sadikturan.com/Modern Javascript Kursu sıfırdan ileri seviye';

console.log(sentence.length);

sentence = sentence.trim();

var num = sentence.split(' ').length;

console.log(num);

sentence = sentence.replace('-', '');

console.log(sentence);

var str = 'http://';

console.log(url.substring(str.length));
console.log(url.slice(str.length));

console.log(url.startsWith('https://'));
console.log(url.startsWith('http://'));

console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

url = url.replaceAll(' ', '-');
url = url.replaceAll('ı', 'i');
url = url.toLowerCase();
console.log(url);