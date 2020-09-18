// Function Statements
function signup(user) {
  console.log(`${user} signed up successfully!`);
}

// Function Expressions
const login = function(user) { // <- Anonymous function
  console.log(`${user} loged in successfully!`);
}

const product = function multiply(x, y) { // <- Named function
  return x * y;
}

// These two are the same
signup('Hassan');
login('Iman');

// Reason: Beacause functions are objects and we can store them into variables, arrays, etc

