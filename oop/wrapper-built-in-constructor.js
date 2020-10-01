
// Wrapper classes
const name1 = 'Jeff';
const name2 = new String('Jeff');

// Add prop
// name2.foo = 'bar';
console.log(name1, name2);
console.log(typeof name1, typeof name2); // string, Object

console.log(name1 === 'Jeff') // true
console.log(name2 === 'Jeff') // false -> Check value and type 
console.log(name2 == 'Jeff') // true -> Just check value
console.log(name2.valueOf() === 'Jeff') // true

// Number
const num1 = 5;
const num2 = new Number(5);
console.log(typeof num1, typeof num2); // number, Object

// Boolean
const bool1 = true;
const bool2 = new Number(true);
console.log(typeof bool1, typeof bool2); // boolean, Object

/* Function */
const sum1 = function(x, y) {
  return x + y;
}

const sum2 = new Function('x', 'y', 'return x + y;'); 
// :(:(:(
  console.log(typeof sum1, typeof sum2); // Object, Object

/* Object */
const john1 = {
  name: 'John'
};
const john2 = new Object({
  name: 'John'
});

console.log(john1, john2)

/* Array */
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);
console.log(arr1, arr2)

// Regex
const rgx1 = /\w+/;
const rgx2 = new RegExp('\\w+');
console.log(rgx1, rgx2)
