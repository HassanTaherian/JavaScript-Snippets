/* Callbacks */
/* 
Anytime we pass a function to another function and the function is excucted in that function we would call it callbacks or with other words callbacks are functions which they are gonna be called by another function

Reason: Functions in JS are first-class. (objects)
First-class means that something is dynamic and it can be paseed to another functions, or returned value.
 */

 /* Why we need callbacks?
 Because the nature of JS which is an event-oriented language, Instead of waiting for response, it will pass throgh them and listen for those call backs (Asynchonous)
 Callbacks are very useful for AJAX Requests and or fetch(Promises).
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

/* 
References:
1) https://bit.ly/2RAybQ4 (Vigool-Persian)
2) https://bit.ly/2REPcIY (javascript.info)
*/