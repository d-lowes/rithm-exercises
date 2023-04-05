"use strict";


/** Accept a word and return the most common letter in the word */

function mostPopular(word) {
  const letterTotals = letterCounter(word);
  const highestTotal = findHighestTotal(letterTotals);

  return Object.keys(letterTotals).
    filter(letter => letterTotals[letter] === highestTotal);
}


/** Find the highest value in an object */
function findHighestTotal(letterTotals) {
  let highest = -Infinity;

  for (let letter in letterTotals) {
    if (letterTotals[letter] > highest) {
      highest = letterTotals[letter];
    }
  }

  return highest;
}


/** Accept a word and return an object with each letter's frequency */

function letterCounter(word) {
  const letterCounterObject = {};

  for (let letter of word) {
    if (letter in letterCounterObject) {
      letterCounterObject[letter]++;
    } else {
      letterCounterObject[letter] = 1;
    }
  }

  return letterCounterObject;
}