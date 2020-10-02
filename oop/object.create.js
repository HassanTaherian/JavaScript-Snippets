/* 
The Object.create() method returns a new object literal with its prototype set to an existing object
*/

// Usecase -> Inheritance(ES5) or mainiplate constructor's returned value


// Object.create() for inheritance
function Person(name, id) {
  this.name = name;
  this.id = id;
}

Person.prototype.log = function() {
  return `User ${this.name} with ${this.id} id`;
}

const person1 = new Person('John Doe', 74);
const person2 = new Person('Hassan', 982);

function Customer(name, id, phone, email) {
  Person.call(this, name, id);
  this.phone = phone;
  this.email = email;
}

/* set the Dog prototype to the Animal prototype. Object.create() is returning a new object with its prototype set to Animal, which we are then assigning to Dog’s prototype.
*/
Customer.prototype = Object.create(Person.prototype);
/*
If we overwrite Dog’s entire prototype, we overwrote one property that we probably didn’t want to — the constructor property. We want this to point to the Dog constructor, not the Animal constructor. So this is a problem, but luckily the solution is simple. Like on line 5, just reassign Dog.prototype.constructor to point to the Dog constructor. */
Customer.prototype.constructor = Customer;

// Bad Way
// Customer.prototype = Person.prototype;

const customer = new Customer('Hassan', 9823383, 33212, 'hassan@gmail.com');


// Object.create() for  Prototypal 
/* 
Use Object.create() within the constructor function to assign all the methods from the object animalMethods to the prototype of the instance of Animal that we are creating 
*/
function Animal(species, name) {
  const animalStamp = Object.create(animalMethods);
  animalStamp.name = name;
  animalStamp.species = species;
  return animalStamp;
}

const animalMethods = {
  walk: function () {
    console.log(`${this.name} is walking...`);
  }
}