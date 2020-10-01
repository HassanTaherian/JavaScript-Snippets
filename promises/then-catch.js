function willGetAPhone() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();

      if (rand > 0.3) {
        // resolve()
        // We can pass as many args we want to get in then block
        const phone = 'iPhone 12 Pro';
        resolve(phone);
      } else {
        const errorMessage = 'Bad luck!!';
        const solutionMessage = 'Try Harder!!!';
        reject(errorMessage, solutionMessage);
      }
    }, 2000);
  })
}

willGetAPhone()
  // Without arg
  /*   .then(_ => {
      console.log('I Got a PHONE!!!');
    }) */
  // with arg
  .then(phone => {
    console.log(`I Got a ${phone}!!!`);
  })
  // Without arg
/*   .catch(_ => {
    console.log('Try Again!!!');
  }) */
// With args
.catch( (reason, solution) => {
  console.log(`${reason} ${solution}`);
} )
