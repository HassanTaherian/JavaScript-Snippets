/* 
Promise ->  is an object representing the eventual completion or failure of an synchronous operation
 */

// Create a promise
const newPromise = new Promise((resolve, reject) => {
  // Do Something
});

// Promise factory
function promiseFactory() {
  return new Promise((resolve, reject) => {
    // Do Something
  })
}

// Attention: For most usecases (fetch something from API), we don't need to create promise. The API provider will send us back a promise. The most important thing about promise for us, is how to interact or consume promise with then or catch

/* 
promise status:
1) pending -> Promise is neither rejected or resolved
1) fulfailed -> Promise is resolved
1) rejected -> Promis is rejected
*/