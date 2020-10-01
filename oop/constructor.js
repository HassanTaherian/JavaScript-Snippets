// Constructor function
function Person(name, birthDate, job) {
  // Define properties
  this.name = name;
  this.birthDate = new Date(birthDate);
  this.job = job;

  // Define method
  /* Note: If we define a method in this way, we can see it in properties.
  It's better to define methods in Object Prototype
  */
  this.getAge = function() {
    const diff = Date.now() - this.birthDate;
    const ageDate = new Date(diff);
    return ageDate.getFullYear() - 1970;
  }
}

// Instansitiate
const hassan = new Person('Hassan', '7/4/2010', 'Web Developer');

console.log(hassan.getAge())
