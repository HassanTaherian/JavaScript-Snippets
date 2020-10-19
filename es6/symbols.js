// Warning: By specification, object property keys may be either of string type, or of symbol type. Not numbers, not booleans, only strings or symbols, these two types.


// Major use of symbols -> hidden(private) properties in Object -> Why: Preventing Property Name Collisions or if we want to create a private field (singelton)
// Decription: As [user] objects belongs to another code, and that code also works with them, we shouldn’t just add any fields to it. That’s unsafe. But a symbol cannot be accessed accidentally, the third-party code probably won’t even see it, so it’s probably all right to do.
// Description 2: Symbols may not directly benefit JavaScript for providing private properties to objects. However, they are beneficial for another reason. They are useful in situations where disparate libraries want to add properties to objects without the risk of having name collisions.

// Create Symbol
const sym1 = Symbol();
// Optional parameter called description -> usefull for debugging
const sym2 = Symbol('sym2');

console.log(sym1, sym2); // Symbol(), Symbol(sym2)
console.log(typeof sym1); // Symbol

// No two symbol are the same
console.log(Symbol() === Symbol()) // False
console.log(Symbol('key') === Symbol('key')) // False
// Decription: Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they are different values. The description is just a label that doesn’t affect anything.

// There is no auto convert to a string for Symbol in JS
console.log(`Hello ${sym1}`); // TypeError: Cannot convert a Symbol to string
console.log(`Hello ${String(sym1)}`) // Symbol()
console.log(`Hello ${sym1.toString()}`) // Symbol()
// or
// Get Description
console.log(sym2.description) // sym2

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const obj = {};

// Object property with Symbol as key
obj[KEY1] = 'Prop1';
obj[KEY2] = 'Prop2';
// Normal key/value property with string as key
obj.KEY3 = 'Prop3';
obj.KEY4 = 'Prop4';
console.log(obj[KEY1]) // Prop1
console.log(obj[KEY2]) // Prop2

// Symbols are not enumerable in for...in === Symbols are skipped by for…in
for (const i in obj) {
  console.log(obj[i]);
}

// Symbols are ignored by old fashion Object.keys()
console.log(Object.keys(obj))

// But
// Access to both string and symbol keys
console.log(Reflect.ownKeys(obj));

// Symbols are copied during clone time
const clone = Object.assign({}, obj)
console.log(clone);


// Symbols are ignored by JSON.prototype.stringify
// Why: We don't wanna send our identifier to client
console.log(JSON.stringify(obj))

// Global Symbols
// Get an existing symbol with description from Symbol.for() or create a new symbol
const id3 = Symbol.for('key-3')
console.log(id3);
obj[id3] = 3;
console.log(obj);
console.log(obj[Symbol.for('key-3')]);
// Get Decription of a symbol with symbol itself
console.log(Symbol.keyFor(id3));
// built-in Symbols
console.log(Symbol.hasInstance);