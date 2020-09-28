// In JS, a thenable is an object that has a then() method.
// Warnign: All promise are thenables, but all thenables aren't promise
/* Conclusion: All things that we can use with promise like then, catch, await and async, it work with thenable object */
const thenable = {
  then: function(resolve, reject) {
    const r
  }
}