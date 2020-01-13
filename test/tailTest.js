const assert = require('chai').assert
const tail = require('../tail.js');
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("Lighthouse, Labs for [Yo Yo, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
});

  // console.log(tail(["Yo Yo", "Lighthouse", "Labs"]))

// assertEqual(tail(words).length, 2); 