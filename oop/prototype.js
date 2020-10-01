function Person(firstName, lastName, birthday, job) {
  // Define properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(birthday);
  this.job = job;
  this.married = false;
}

Person.prototype.getAge = function () {
  const diff = Date.now() - this.birthday;
  const ageDate = new Date(diff);
  return ageDate.getFullYear() - 1970;
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getMarried = function () {
  this.married = true;
};

const hassan = new Person("Hassan", "Taherian", "7-4-2010", "Web Developer");
const john = new Person("John", "Doe", "7/4/2010", "Web Developer");

console.log(hassan);
console.log(hassan.hasOwnProperty('firstName'))
console.log(hassan.hasOwnProperty('hobbies'))
console.log(hassan.hasOwnProperty('getAge'))
