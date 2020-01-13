const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄💚 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // two objects have same number of keys
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // value for each key in one object is the same as
    //      value for that same key in other object    
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // if true, continue
        if(eqArrays(object1[key], object2[key]) === false){
          return false};
      } else if (object1[key] === object2[key]){
      } else {
        return false;
      } 
    } return true;
  } return false;
};

module.exports = eqObjects;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true)
assertEqual(eqObjects(ab, abc), false)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true)
assertEqual(eqObjects(cd, cd2), false)
