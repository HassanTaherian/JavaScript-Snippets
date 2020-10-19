// Map
// Difference between map and object literal
// We can use an type as key in Map but in Object Literal we can only use Symbol and string

const map1 = new Map();
const key1 = 'string',
      key2 = {},
      key3 = function() { console.log(1); };


// Set map values by key
map1.set(key1, 'value1');
map1.set(key2, 'value2');
map1.set(key3, 'value3');

// Get Values by key
console.log(map1.get(key1)); // value1

// Get length of key/values
console.log(map1.size); // 3

/* Iterating on map */

// for...of
// Get key/Values as array
for (const key of map1) {
 console.log(key); 
}

// Get Key
for (const [key] of map1) {
 console.log(key); 
}
// Description: for...of iterates over map by returning an array with key and value members and we can use array destructuring to extract specific part.

// or
for (const key of map1.keys()) {
 console.log(key); 
}

// Get Values
for (const value of map1.values()) {
  console.log(value);
}

// forEach
map1.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
})

// Convert to arrays
let keyValuePairs = [...map1];
keyValuePairs = Array.from(map1);
console.log(keyValuePairs);

// Create an array of keys
map1.values(); // class: MapIterator
const keys = Array.from(map1.keys());
console.log(keys);
