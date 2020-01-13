const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`😄💚 Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`😱⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual('test','test');
module.exports = assertEqual

