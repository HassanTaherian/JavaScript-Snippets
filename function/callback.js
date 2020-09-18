/* Callbacks */
/* 
Anytime we pass a function to another function and the function is excucted in that function we would call it callbacks.
 */

// Use anonymous function for callback
document.querySelector('a')
    .addEventListener('click', () => { // <- callback
  // Do something
})

// Use existing function for callback
function double(x) {
  return x * 2;
}

const doubleArr = [1, 2, 3, 4, 5].map(double /* <- callback */);