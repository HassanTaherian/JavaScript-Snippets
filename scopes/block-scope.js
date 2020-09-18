
/* 2) Block Scope -> Variables that are declared
in the block body(if/else, for, ...) */

// var -> Not Block Scope
if (true) {
  const animal = 'eel';
  console.log(animal); //'eel'
}
console.log(animal); //NOT DEFINED!


// let & const -> Block Scope
if (true) {
  var animal = 'eel';
  console.log(animal); //'eel'
}
console.log(animal); //'eel'