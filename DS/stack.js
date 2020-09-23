// Stack -> First thing in, last thing out (Like a stack of books)

const multiply = (x, y) => x * y;
// Call Stack here for square(a) then toppest element will be poped
/* 
multiply(3) -> 9 _|_
square(3) -> 9 _|_
isRightTriangle(3, 4, 5)
*/
const square = x => multiply(x * x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
}

isRightTriangle(3, 4, 5);

// How to see call stack in Chrome DevTools?
// DevTools(F12) -> Source Tab -> Call Stack subsection(right of screen)