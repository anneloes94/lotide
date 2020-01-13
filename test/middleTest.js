// middleTest.js
const assert = require('chai').assert;
const middle = require('../middle');
describe("#middleTest", () => {
  it("returns true", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns true", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns true", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns true", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns true", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns true", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});