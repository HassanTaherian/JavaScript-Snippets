// If a promis resolves normally, then await will get results. but in the case of rejection, async function will throw an error

// First way
async function f() {
  return Promise.reject(new Error("Whoops!"));
}

// Same way but shorter
async function f2() {
  throw new Error('Whoops!');
}

// Handle an error with await
async function f3() {
  try {
    const res = await fetch('url');
    const user = await res.json();
  } catch(e) {
    // Catch error if the promise was rejected
    console.log(e)
  }
}

/* 
async/await or promise.then/catch?
When we use async/await, we rarely need .then, because await handles the waiting for us. And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.

But at the top level of the code, when we’re outside any async function, we’re syntactically unable to use await, so it’s a normal practice to add .then/catch to handle the final result or falling-through error.
*/