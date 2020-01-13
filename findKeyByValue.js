const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄💚 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};

// takes in an object and a value
// scans the object and returns first key that contains
    // given value
// if no key with given value is found, return: undefined

const findKeyByValue = function(object, inputValue) {
  // scan through values of object
  let objectKeys = Object.keys(object)
  for (const key of objectKeys) {
    console.log(`object[key]: ${object[key]}, inputValue: ${inputValue}`)
    // if match with value:
    if (object[key] === inputValue) {
      // return matching key
      return key;
    // else: return undefined
    }
  }
  return undefined;
} 

module.exports = findKeyByValue;


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const pets = { 
  dog: "Wopper",
  cat: "Big Mac",
  llama:  "McNugget"
};


assertEqual(findKeyByValue(pets, "McNugget"), "llama")
assertEqual(findKeyByValue(pets, "Dumpling"), undefined)
