const tail = array => array.slice(1,100);
// console.log(tail(["Yo Yo", "Lighthouse", "Labs"]))
module.exports = tail;

// const assertEqual = function(actual, expected) {
//   console.log(actual, expected);
//   if (actual !== expected) {
//     console.log(`😱⛔ Assertion failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`😄💚 Assertion passed: ${actual} === ${expected}`);
//   }
// };

// const tail = function(array) {
//   let arrayTail = array.slice(1);
//   return arrayTail;
// };

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: Make sure that original array is not modified
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


// // Test Case 3: Array with one element returns an empty array as tail
// const array3 = ["Table"];
// assertEqual(tail(array3).length, 0);
