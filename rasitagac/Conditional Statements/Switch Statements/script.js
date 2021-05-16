// Switch Statements

// let category = 'beyaz eşya';
//
// switch (category){
//     case 'telephone':
//         console.log('Telefon kategorisi');
//         break;
//
//     case 'bilgisayar':
//         console.log('Bilgisayar kategorisi');
//         break;
//
//     default:
//         console.log('Yanlış kategori');
//
// }

// let day;

// switch (new Date().getDay()){
//     case 0:
//         day = 'Pazar';
//         break;
//     case 1:
//         day = 'Pazartesi';
//         break;
//     case 2:
//         day = 'Salı';
//         break;
//     case 3:
//         day = 'Çarşamba';
//         break;
//     case 4:
//         day = 'Perşembe';
//         break;
//     case 5:
//         day = 'Cuma';
//         break;
//     case 6:
//         day = 'Cumartesi';
//         break;
// }
// console.log(day);

// case'ler birleştirilebilir
// switch (new Date().getDay()){
//     case 0:
//     case 6:
//         day = 'Hafta sonu';
//         break;
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         day = 'Hafta içi';
//         break;
// }
//
// console.log(`Bugün ${day}`);

let age = 10;

switch (true){
    case age < 19 && age >= 13:
        console.log(`You're a teenager`);
        break;
    case age >= 19 :
        console.log(`You're an adult`);
        break;
    default:
        console.log(`You're a child`);
        break;

}


// if (age > 0 &&  age < 12)
//     console.log(`${firstName} is a child`);
// else if (age >= 13 && age <= 19)
//     console.log(`${firstName} is a teenager`);
// else
//     console.log(`${firstName} is a an adult`);
