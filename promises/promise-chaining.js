function willGetAPhone() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();

      if (rand > 0.3) {
        resolve()
      } else {
        reject();
      }
    }, 2000);
  })
}

willGetAPhone()
  .then(_ => {
    console.log('I Got a PHONE!!!');
    return willGetAPhone();
  })
  .then(_ => {
    console.log('I Got a PHONE!!!');
    return willGetAPhone();
  })
  .then(_ => {
    console.log('I Got a PHONE!!!');
    return willGetAPhone();
  })
  .then(_ => {
    console.log('I Got a PHONE!!!');
  })
  .catch(_ => {
    console.log('Try Again!!!');
  })