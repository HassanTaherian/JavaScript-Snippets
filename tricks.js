
//1) Use !! operator to convert to boolean

// It converts falsy values(0, '', null, etc) to false
function validateCash(cash) {
  if (!!cash) {
    return 'Invalid Input';
  } else if (cash < 0) {
    return 'Negative Input';
  } else {
    return 'Valid Input';
  }
}

// Use the + operator to convert to numbers
let num = '74';
num = +num;
console.log(num, typeof num); // 2, Number
num = +'a';
console.log(num, typeof num); // NaN, Number

// Convert date to total seconds from 1/1/1970
console.log(+new Date());

// Combine if and functions
let decimal = 10.2;
if(decimal % 1 !== 0) {
  console.log(Math.floor(decimal));
}

let decimal = 10.2;
decimal % 1 !== 0 && console.log(Math.floor(decimal));

console.log(decimal);



// Reference https://bit.ly/2H4w593

/* Compact way to declare several variables */
const number = 2,
      string = 'String',
      boolean = true;