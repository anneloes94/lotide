const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // loop through letters (only!)
  //   for (letter of sentence) {
    for (let letter in sentence) {
      if (letter !== " e") {
        // if there is a letter already present
        if (results[sentence[letter]]) {
          // we must add the position of this found letter to the existing array of letter
        } else {
          results[sentence[letter]] = [];
          // else we must make a new array for this letter with this found position
        }
        results[sentence[letter]].push(Number(letter));
      }
    }
  return results;
};

module.exports = letterPositions;