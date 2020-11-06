const text = "Hello I'm Hassan Taherian. I am a web developer from Iran";

// String.prototype.includes -> Check if a called string has another string inside him self and return boolean value.

console.log(text.includes('web')); // true
console.log(text.includes('mobile')) // false
// includes is case-sensetive
console.log(text.includes('iran'))

// includes with optional parameter
console.log(text.includes('Hassan', 10)) // false
// position -> An non-negative integer represented as beginining index of search starting

// ES5 Version
console.log(text.indexOf('Hassan') !== -1)