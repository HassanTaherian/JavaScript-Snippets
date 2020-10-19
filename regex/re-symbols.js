let re;
// Litereal Characters
re = /hello/;
re = /hello/i;

// Meta Character Symbols
re = /^h/i; // Must starts with
re = /ld$/i; // Must ends with
re = /^hello$/; // Must begin and ends with
re = /h.llo/; // Mathc any character (Has to be one character difference)
re = /h*llo/; // Mathc any character (0 or more time)
re = /gra?e?y/; // Optional character
re = /gra?e?y\?/; // Escapecharacter

// String to match
const str = 'grey?';
const result = re.exec(str);
// log results
console.log(result);


function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not matches ${re.source}`);
  }
}

reTest(re, str)