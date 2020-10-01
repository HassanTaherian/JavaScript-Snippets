/* async/await are an different way to handle promises. They look like synchronous but they are asynchronous under the hood.
*/

// async functions convert normal values to promise with resolved value of returned value
// The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
async function f() {
  return 1;
}

// Equailevent
async function f2() {
  return Promise.resolve(1);
}

f().then(value => { console.log(value) }); // 1


