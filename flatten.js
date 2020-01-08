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
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😄💚 Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`😱⛔ Assertion failed: ${array1} !== ${array2}`);
  }
};

const flatten = function(arrayOfArrays) {
  let flatArray = [];
  for (let element = 0; element < arrayOfArrays.length; element++) {
    if (Array.isArray(arrayOfArrays[element])) {
      flatArray = flatArray.concat(arrayOfArrays[element]);
    } else {
      flatArray.push(arrayOfArrays[element]);
    }
  }
  return flatArray;
};

// TEST CASES
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 2], [3, 3, 3], 4]), [1, 2, 2, 3, 3, 3, 4]);
