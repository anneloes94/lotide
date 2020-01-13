const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄💚 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};

// returns a count of each letter in sentence 
//  into an object
// skip/not count spaces
const countLetters = function (sentence) {
  let totalLetters = {}
  for (letter of sentence) {
    if (letter !== " ") {
      if (totalLetters[letter]) {
        totalLetters[letter] += 1;
      } else {
        totalLetters[letter] = 1
      }
    }
  }
  return totalLetters;
}

module.exports = totalLetters;

// TEST CASE
// assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,})

// STRETCH: iterate over elements of actual and 
// expected object, see if they match up (instead of 
// comparing results with own eyes).
