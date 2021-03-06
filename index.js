const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual')
const assertArraysEqual = require('./assertArraysEqual')
const assertObjectsEqual = require('./assertObjectsEqual')
const countLetters = require('./countLetters')
const eqObjects = require('./eqObjects')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const flatten = require('./flatten')
const head = require('./head')
const letterPostitions = require('./letterPositions')
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  head: head,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};