//Created by sufuk

// primitive Types
let firstName = "Cigdem";
let age = 19;
let iq = 0.002;
let isAlive = true;
let heart = null;

console.log(typeof firstName,
    typeof age,
    typeof iq,
    typeof isAlive,
    typeof heart);

// reference types

// Arrays
let names = ["Sufuk", "Rasit", "Talos"];
console.log(typeof names); // object

// Object

let person = {
    name: names[1],
    age: 22
}
console.log(person);
console.log(typeof person) // object

// Functions

var returnTypeFunction = function(){
    return 12;
}

console.log(typeof returnTypeFunction());