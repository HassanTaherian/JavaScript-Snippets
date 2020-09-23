
/* 2) Block Scope -> Variables that are declared
in the block body(if/else, for, ...) */

// let & const -> Block Scope
let animal = 'deer';
if (true) {
  let animal = 'eel';
  const name = 'Hassan';
  console.log(animal, name); //'eel', 'Hassan
}
console.log(animal); //deer
console.log(name); //NOT DEFINED!

// var -> Not Block Scope
var animal = 'deer';
if (true) {
  var animal = 'eel';
  console.log(animal); //'eel'
}
console.log(animal); //'eel'