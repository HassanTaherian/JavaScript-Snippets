// Interperedit
// JS in pre interpreter time
var name;
function f() {
  console.log('f is running...');
}

/*
 * Basically in pre interpret stage(Before execute an js script), JS will sotre let, const variables in uninitialized value, var to undefined and functon statements to reference of their own in memory,
*/


/* Hoisting */
/* var and function are hoisted up
It means that if we use variable/function before declaration, they wouldn't throw error
*/

// Hoisting in var
console.log(name) // undefiened
var name = 'Hassan'
console.log(name) // 'Hassan'

// Hoisting in function statement
f() // f is running
function f() {
  console.log('f is running...');
}
f() // f is running

// Eplenation: JS interpereter will read var/function first and trnaslate it (and give it undefined value to var), and when arrive to statement it will log undefined for var and executes function 

/* let/const and function expressions are not hoisted up
It means that if we use variable/function before declaration, they wouldn throw error
*/

// let/const
console.log(name) // Error
let /* const */ name = 'Hassan'
console.log(name)

// Function Expressions
f() // Error
const /* let */ f = function f() {
  console.log('f is running...');
}
f()
// Function Expressions with var
console.log(f) // undefined
f() // Error
const /* let */ f = function f() {
  console.log('f is running...');
}
f()

/* Articles: 
1) https://bit.ly/3c8xabk
*/