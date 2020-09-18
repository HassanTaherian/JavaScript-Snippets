
/* Higher Order Function */
/* Functions that operates on/with other functions */
// 1) Accept other functions as args

// Simulation of Array.prototype.filter
const filter = (array, callback) => {
  const arr = [];
  for (const item of array) {
    if (callback(item)) {
      arr.push(item)
    }
  }

  return arr;
}

const nums = [1, 2, 3, 4, 12, 18, 45];

const result = filter(nums, (num) => num % 2 === 0);
console.log(result);


// 2) Return a function

// Function Factory
// Functions that have same behavior but differents values.
function multiplyByN(n) {
  // Usage of function expressions
  return function (x) {
    return x * n;
  }
}

const multiplyBy4 = multiplyByN(4);
console.log(multiplyBy4(5))
// OR
console.log(multiplyByN(4)(5))
// The second syntax recieve an function as return value and calls it immiedietly. This syntax is used very much in Higher Order Components in React.js