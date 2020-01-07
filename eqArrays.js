const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄💚 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};

//takes in two arrays and returns true or 
// false, based on a perfect match. 
const eqArrays = function(arr1, arr2) {
  // check for same types
  // check for same values
  // check for same length
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let element = 0; element < arr1.length; element++) {
      console.log(arr1[element]);
      console.log(arr2[element]);
      if (arr1[element] !== arr2[element]) {
        return false;
      }
    } return true;
  }
}

//TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
