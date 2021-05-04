var num = 15.4546456465465;

console.log(num.toPrecision(3));

console.log(num.toFixed(3));

console.log(Math.floor(num));

console.log(Math.round(num));

console.log(Math.floor(num));

console.log(Math.ceil(num));

console.log(Math.min(1 ,2, 10 , 56 ,20));

console.log(Math.max(1 ,2, 10 , 56 ,20));

//let minValue = Number(window.prompt("Please input min value of range."));
//let maxValue = Number(window.prompt("Please input max value of range."));

//console.log(Math.floor(minValue+Math.random()*(maxValue-minValue)));


var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi = 42;

var toplamBrutMaas = brutMaas + (mesaiSuresi*mesaiUcreti);

var toplamNetMaas = toplamBrutMaas -  toplamBrutMaas*0.25;



console.log(toplamBrutMaas.toFixed(2), toplamNetMaas.toFixed(2));

