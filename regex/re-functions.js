// init a regex literal
let rgx = /hello/;
rgx = /hello/i; // i -> case insensetive
// rgx = /hello/g; // g -> Global Search

/* console.log(rgx)
// Get actual expression
console.log(rgx.source);
 */

/* // exec -> return results in array or null
let result = rgx.exec('Hassan hello world!');
console.log(result); // array
console.log(result[0]); // hello
// Get index of first match
console.log(result.index); // 7
// Get search string
console.log(result.input);

result = rgx.exec('hi world!');
console.log(result); // null

 */

/* // test() -> returns boolean
let result = rgx.test('hello Hassan');
console.log(result); // true
// Regex is case sensetive. to ingore it have to use 'i' flag
result = rgx.test('Hello Hassan');
console.log(result); // false

 */

/*  // match -> similar to exec
 const str = 'hello world hello';
 console.log(str.match(rgx)) */

 // search -> Returns index of the first match. if not found returns -1
/*  let str = 'Hassan Hello There';
 console.log(str.search(rgx)) // 7
 str = 'Hassan Heello There';
 console.log(str.search(rgx)) // -1 */

 // replace -> Returns new string with some or all matches of a pattern
 const str = 'Hassan hello there? hello?'
console.log(str.replace(rgx, 'Hi'));