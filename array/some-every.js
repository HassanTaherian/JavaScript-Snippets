const words = ['dog', 'fug', 'jam', 'cat'];
let val;

// Array.prototype.every -> return true when given condition in callback is true for all elements of array
val = words.every(word => word.length === 3) // true
val = ['dog', 'fug', 'jam', 'cat'].every(word => word.length === 3) // false

// Array.prototype.some -> return true when given condition in callback is true for at least an element of array
val = words.every(word => word.length === 3) // true
val = ['dog', 'fug', 'jam', 'cat'].every(word => word.length === 3) // false

console.log(val)