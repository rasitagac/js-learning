// Demo: Conditional Statements

// Car care time reminder

let trafficDate =  new Date(2017, 4, 20);
let current = Date.now();

let carCareTime = (current - trafficDate) / (1000*60*60*24*365);


// With switch-case
// switch (true){
//     case carCareTime >= 1 && carCareTime < 2:
//         console.log('1. yıl bakım vaktiniz gelmiştir.');
//         break;
//     case carCareTime >= 2 && carCareTime < 3:
//         console.log('2. yıl bakım vaktiniz gelmiştir.');
//         break;
//     case carCareTime >= 3:
//         console.log('3. yıl bakım vaktiniz gelmiştir.');
//         break;
// }

// With if-else

if (carCareTime >= 1 && carCareTime < 2)
    console.log('1. yıl bakım vaktiniz gelmiştir.');
else if (carCareTime >= 2 && carCareTime < 3)
    console.log('2. yıl bakım vaktiniz gelmiştir.');
else
    console.log('3. yıl bakım vaktiniz gelmiştir.');


// Login steps

let name = prompt(`Who's There?`);
let password;

if (name === 'Admin') {
    password = prompt('What is your password?');

    switch (true) {
        case password === 'TheMaster':
            console.log('Welcome!');
            break;
        case password === null:
            console.log('Program is canceled');
            break;
        default:
            console.log('Wrong password');
            break;
    }

}else if (name === null)
    console.log('Program is canceled');
else
    console.log(`I don't know you`);


