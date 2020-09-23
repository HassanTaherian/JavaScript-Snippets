// Scopes In JS
/* 1) Function Scopes -> Variables that are declared
in the function but they aren't accessible out of function
*/
function lol() {
  // These variables are scoped to functions
  let person = 'Tom';
  const age = 45;
  var color = 'teal';
  console.log(age); // 45
}