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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😄💚 Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`😱⛔ Assertion failed: ${array1} !== ${array2}`);
  }
};

const without = function(source, itemsToRemove){
  let filtered = source.filter(function(value, index, source) {
    return !itemsToRemove.includes(value)
  })
  return filtered;
}


//filtered => [6, 7, 8, 9]
//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// TEST CASES

assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
assertArraysEqual(without(["4", "5", "5"], [5]), ["4", "5", "5"])
assertArraysEqual(without(["4", "5", "5"], ["5"]), ["4"])

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
