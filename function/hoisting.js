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

/*
Aproatch 2:
Hoisting: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their 'scope' before code execution.

In JavaScript, an undeclared variable is assigned the value undefined at execution and is also of type undefined.
In JavaScript, a ReferenceError is thrown when trying to access a previously undeclared variable.
Variable assignment takes precedence over function declaration Function declarations take precedence over variable declarations
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

// Warning: Of note however, is the fact that the hoisting mechanism only moves the declaration. The assignments are left in place.

/* Hoisting classes */
// 1) Class declarations (statements)
/* Much like their function counterparts, JavaScript class declarations are hoisted. However, they remain uninitialised until evaluation. This effectively means that you have to declare a class before you can use it. */

var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

class Hobbit {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}

// Much like their function counterparts, class expressions are not hoisted.
var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square); // Output: TypeError: Polygon is not a constructor

var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};


// Note: const, let. class declaration are hoisted, but unlike var, they will be evaluated to uninitialized
/* Articles: 
1) https://bit.ly/3c8xabk
2) https://bit.ly/3hQoOGR
*/