const user = {
  name: 'Hs'
}

try {
  /*  Core errors */

  // ReferenceError
  doesntexistFunction()

  // TypeError
  null.f();

  // SyntaxError
  eval('cons a = 2;');

  // URIError
  decodeURIComponent('%')

  // Custom error
  if (user.name.length < 3) {
    throw new Error('Short Length!' /* error message */);
  }

  // Throw an error with other types
  throw new ReferenceError('User has short name!')

} catch (e) {
  console.log(e) // Error Object
  // Get error message
  console.log(e.messaage)

  // Get Error type
  console.log(e.type)

  // Check the type of error
  console.log(e instanceof TypeError)

} finally {
  console.log("This will run regardless of return or uncaught error ,...")
}