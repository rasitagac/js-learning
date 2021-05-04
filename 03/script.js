// created by sufuk


// Type conversion

let a = "1";
let b = "2";

console.log((a+b), typeof (a+b)); // 12 string

// 3 number
console.log((Number(a) + Number(b)), typeof (Number(a) + Number(b)));

let c = Number(Number(a) - Number(b));
console.log(c, typeof c);

let d = 12;
console.log(typeof d);

let someString = "My String";

console.log(someString, typeof someString);

if (typeof someString == "string"){
    console.log("Javascript is so easy");
}

let myDate = new Date();
myDate.setMonth(1, 23);
console.log(myDate);

let anotherStr = myDate.toString();

console.log(typeof anotherStr);

console.log(anotherStr.length);

console.log(anotherStr[2]);