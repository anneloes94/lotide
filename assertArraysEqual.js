const eqArrays = function(arr1, arr2) {
  // check for same types
  // check for same values
  // check for same length
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let element = 0; element < arr1.length; element++) {
      if (arr1[element] !== arr2[element]) {
        return false;
      }
    } return true;
  }
}

const assertArraysEqual = function(array1, array2, expected) {
  if (eqArrays(array1, array2) === expected) {
    console.log(`😄💚 Assertion passed: ${eqArrays(array1, array2)} === ${expected}`);
  } else {
    console.log(`😱⛔ Assertion failed: ${eqArrays(array1, array2)} !== ${expected}`);
  }
};