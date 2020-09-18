/* 3) Lexical Scope -> It means that when value of a variable is called, compiler will look first to its function scope than to outer functions to find that variable */
// Attention: With declaretion of new variable with same name of outer variable, the new variable will be replace the old one

function outer() {
  let movie = 'Amadeus';

  function inner() {
    let movie = "The Shining";
    console.log(movie)
  }
  inner();
}
outer(); //'The Shining'
