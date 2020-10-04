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

  // Custom error messages
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

// Note: We can't use multiple catch block in Js. We have to user if/else to check type of error

/* Custom Errors */
class StringError extends Error {
  constructor(messaage) {
    super(messaage)
    this.name = this.constructor.name;
  }
}
class ShortLengthError extends StringError {
  constructor() {
    super('Your string is too short!');
    // Short way
    this.name = this.constructor.name;
  }
}

class BadGrammerError extends StringError {
  constructor() {
    super('Your string doesn\'t start with uppercase letter!');
    // Tidious way
    this.name = 'BadGrammer';
  }
}

try {
  const name = 'HT';
  if (name.length < 5) {
    throw new ShortLengthError();
  } if (name.charAt(0) < 90) {
    throw new BadGrammerError();
  }
} catch (e) {
  if (e instanceof ShortLengthError) {
    console.log(e.message + 1)
  } else if (e instanceof BadGrammerError) {
    console.log(e.message + 2)
  } else if (e instanceof StringError) {
    console.log(e.message + 3)
  } else {
    throw e;
  }

  // or
  if (e.name === 'BadGrammer') {
    // Do
  }

  // First way is better because in the future if we inherit more class form this class, all of them will work in this condition
  console.log(e.name);
}