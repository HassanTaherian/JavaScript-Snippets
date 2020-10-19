// Sets - Store unique values of any type
// In sets order of elements doesn't matter, hence index isn't defined in sets

let set = new Set();

// Add element in set
set.add(100);
set.add('Hassan');
set.add(true);
set.add({ name: 'Iman' });
set.add(function () { });

// Init set with initial values
set = new Set([1, true, null, 'str', { a: 3 }]);

console.log(set);

// Get size of set
console.log(set.size); // 4

// Check for values
console.log(set.has(1)); // true
console.log(set.has(3 - 2)); // true
console.log(set.has({a: 3})); // false: difference between references

// Delete a Value
const deleted = set.delete(1); // return true if set has the value
console.log(set);
console.log(deleted);

/* Iterate Through Sets */
// for...of
for (const item of set) {
  console.log(item);
}
// or
for (const item of set.values()) {
  console.log(item);
}
// or
for (const item of set.keys()) {
  console.log(item);
}

// forEach
set.forEach((value) => {
  console.log(value);
})

// Convert Set to Array
let setArr = [...set];
// or
setArr = Array.from(set);
console.log(setArr);