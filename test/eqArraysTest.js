const eqArrays = require('../eqArrays');
const assert = require("chai").assert

// //TEST CASES
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns false for [3, 2, 1] and [1, 2, 3]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
})  


