function login(user = 'johndoe', password = '0000') {
  const msg = `Welcome ${user}`;
  return msg;
}

// See a function, object, etc with details like scopes, prototypes, etc
console.dir(login/* Function, Object */)

// Length prop is available for function and show the number of function's Argumant (At declaration not calling function)
console.log(login.length) // 2

