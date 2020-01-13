const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄💚 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {
  let objectKeys = Object.keys(object);
  for (const key of objectKeys) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// TEST CASES

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  noOfWheels : 2,
  hasSteeringWheel: true,
  hasEngine: false,
  noInBeijing: "9 million"
}, x => x === true), "hasSteeringWheel");

module.exports = findKey;