'use strict';

let l = console.log;

//function expresion
const Person = function (firstName, birthYear) {
  // l(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

class PersonCL {
  constructor(firstName, birthYear) {
    // l(this);
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  get age() {
    return 2037 - this.birthYear;
  }
}

const jonas = new Person('Jonas', 1991);
// l(jonas);

//1. New {} is created
//2. function is called, this = {}
//3. {} Linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// l(matilda, jack);

// l(jonas instanceof Person);

//Prototypes
Person.prototype.calcAge = function () {
  //   l(2037 - this.birthYear);
};

// l(Person.prototype);

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

// l(jonas.__proto__);
// l(jonas.__proto__ === Person.prototype);

// l(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';

// l(jonas.species, matilda.species);

// l(jonas.hasOwnProperty('firstName'));
// l(jonas.hasOwnProperty('species'));

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  //   console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  //   console.log(`${this.make} is going at ${this.speed} km/h`);
};

// console.log(Car);
//

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

Person.hey = function () {
  console.log('hey');
  console.log(this);
};

Person.hey();

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
