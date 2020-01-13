# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anneloes94/lotide`

**Require it:**

`const _ = require('@anneloes94/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: logs whether two arrays are equal
* `assertEqual(actual, expected)`: checks two values to see if they are equal
* `assertObjectsEqual(actual, expected)`: logs whether two objects are equal
* `countLetters(sentence)`: creates an objects of letter keys and count values out of a sentence
* `countOnly(allItems, itemsToCount)`: filters out items to count out of an array of items and returns an object
* `eqArrays(arr1, arr2)`: compares two arrays and sees if they are equal
* `eqObjects(object1, object2)`: sees whether the keys and values of two objects are the same
* `findKey(object, callback)`: returns a key that has to be found in an object, or undefined if it is not present
* `findKeyByValue(object, inputValue)`: returns the first key in an object that matches the inputValue, or returns undefined
* `flatten(arrayOfArrays)`: flattens an array input that may exist of multiple arrays
* `head(array)`: returns the first (head) element of an array
* `letterPositions(sentence)`: returns an object of indices of letters in a sentence
* `map(array, callback)`: modifies an array with a callback function, returns a new array
* `middle(arr)`: takes the middle element(if length is odd) or elements (if length is even) of an array
* `tail(array)`: returns the tail of an array (all but first element)
* `takeUntil(array, callback)`: returns an array that stops when a callback condition has been met
* `without(source, itemsToRemove)`: returns an array that was filtered from another array 