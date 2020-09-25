// map -> To perform an callback function on every single element of array and then create a new one.

// Warning: map doesn'r mutate original array

/* usage: 
1- Clone an array(shallow copy)
2- Create new DOM element from row information(Oftent use in React.js) 
*/

// Uppercase all array element
const texts = ['some', 'often', 'sometimes', 'somewhere', 'somehow'];
const textUppercase = texts.map(text => text.toUpperCase())

console.log(texts)
console.log(textUppercase)