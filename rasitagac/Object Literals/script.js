// Object Literals

let val;

let person = {
  firsName:  'Çınar',
  lastName: 'Turan',
  age: 11,
  hobbies: ['music', 'oyun'],
  address: {
      city: 'Kocaeli',
      country : 'Türkiye',
  },
  getBirthYear : function (){
      return new Date().getFullYear() - this.age;
  },
};

val = person;
val = person.firsName;
val = person.lastName;
val = person['firsName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.address.city;
val = person.address.country;
val = person.getBirthYear();



console.log(person);
console.log(typeof person);


let people = [
    {
        firsName:  'Muhammed',
        lastName: 'Turan',
        age: 11,
        hobbies: ['music', 'oyun'],
        address: {
            city: 'Kocaeli',
            country : 'Türkiye',
        },
        getBirthYear : function (){
            return new Date().getFullYear() - this.age;
        },
    },
    {
        firsName:  'Raşit',
        lastName: 'Turan',
        age: 11,
        hobbies: ['music', 'oyun'],
        address: {
            city: 'Kocaeli',
            country : 'Türkiye',
        },
        getBirthYear : function (){
            return new Date().getFullYear() - this.age;
        },
    },
    {
        firsName:  'Ağaç',
        lastName: 'Turan',
        age: 11,
        hobbies: ['music', 'oyun'],
        address: {
            city: 'Kocaeli',
            country : 'Türkiye',
        },
        getBirthYear : function (){
            return new Date().getFullYear() - this.age;
        },
    }
];

val = people[0];
val = people[0].firsName;

for (let i = 0; i < people.length; i++){
    console.log(people[i].firsName);
}


console.log(val);
console.log(typeof people);

