const eqArrays = function(arr1, arr2) {
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if(eqArrays(object1[key], object2[key]) === false){
          return false};
      } else if (object1[key] === object2[key]){
      } else {
        return false;
      } 
    } return true;
  } return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😄💚 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😱⛔ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CASES

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })