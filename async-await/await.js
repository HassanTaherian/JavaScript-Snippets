// The keyword await makes JavaScript wait until that promise settles and returns its result.

// Warning: await keyword will work only in an async function(It will throw an error )
async function f() {
  const response = await fetch('https://swapi.dev/api/planets'); // function execution will pause at this line
  console.log(response); // Response object
  // with out await: undifined
}

// Example
async function showAvatar() {

  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();

// Problem: await won’t work in the top-level code?(global scope)
// Solution: Use IIEE
(async function() {
  let response = await fetch('something');
  let user =  await response.json();
  // ...
})

// await accepts “thenables”
/*
 Like promise.then, await allows us to use thenable objects (those with a callable then method). The idea is that a third-party object may not be a promise, but promise-compatible: if it supports .then, that’s enough to use it with await
 */

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
};

async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1);
  alert(result);
}

f();