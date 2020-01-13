// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (let element = 0; element < arr1.length; element++) {
//       if (arr1[element] !== arr2[element]) {
//         return false;
//       }
//     } return true;
//   }
// }

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`😄💚 Assertion passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`😱⛔ Assertion failed: ${array1} !== ${array2}`);
//   }
// };

const middle = function(arr){
  let middleElements = [];
  if (arr.length === 1 || arr.length === 2) {
    return middleElements;
  } else {
      let middleIndex = Math.floor(arr.length/2);
      if (arr.length % 2 === 0) {
        middleElements.push(arr[middleIndex - 1], arr[middleIndex]);
      } else {
        middleElements.push(arr[middleIndex]); 
    } return middleElements;
  }
}

module.exports = middle;

// TEST CODE
