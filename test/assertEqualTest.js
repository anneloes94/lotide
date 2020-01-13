const assert = require('chai').assert;
const assertEqual = require('../assertEqual')


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
// assertEqual("Lighthouse", "Lighthouse");
// assertEqual(3, 2);

describe("#assertEqual", () => {
  it("returns false for (Lighthouse Labs, Bootcamp)", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("returns true for (1, 1)", () => {
    assert.strictEqual(assertEqual(1, 1));
  })


  it("returns true for Lighthouse, Lighthouse", () => {
    assert.strictEqual(assertEqual("Lighthouse", "Lighthouse"));
  });
  
  it("returns false for 3, 2", () => {
    assert.strictEqual(assertEqual(3, 2));
  });
  
});
