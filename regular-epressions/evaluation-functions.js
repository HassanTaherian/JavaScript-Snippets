let result 

// Create a regex pattern
let rgx = /hello/;
/* Flags */
re = /hello/i; // i = insensitive case
console.log(re.test('Hello')) // true

re = /hello/g; // g = global search

// or
rgx = new RegExp('hello');

/* RegExp.prototype.exec() -> Return result in array or null */
result = rgx.exec('Hassan hello World!'); // Array
console.log(result.index); // 7
console.log(result[0]); // hello
console.log(result.input); // Hassan hello World!
console.log(rgx.exec('Hello')); // null
// Note: Regexs by default are case sensitive

/* RegExp.prototype.test() -> Returns boolean value */
console.log(rgx.test('Hello')); // false
console.log(result = rgx.test('hello')); // true

/* String.prototype.match() -> Returns array or null */ // Just like exec but swap the places of string and regex
const str = 'Hello There!';
result = str.match(re)
console.log(str) // Array

/* String.prototype.match() -> Returns array or null */ // Just like exec but swap the places of string and regex
const str = 'Hello There!';
result = str.match(re)
console.log(str) // Array

/* String.prototype.search() -> Returns index of first match or -1 */ // like indexOf
const str = 'Hello There!';
result = str.search(re)
console.log(result) // 0

/* String.prototype.replace() -> Returns new string with replaced match with second arg */ // like indexOf
const str = 'hello There!';
result = str.search(re, 'll');
console.log(result) // ll There!