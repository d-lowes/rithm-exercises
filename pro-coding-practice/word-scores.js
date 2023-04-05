"use strict";


/** Accept an array of words ; return each word's score */
// TODO: re-write to a one line map function

function wordScores(wordArray, scrabbleBoard = LETTER_TO_SCORE) {
  return wordArray.map(word => convertWordToScore(word, scrabbleBoard))
}

/** Accept a letter ; return it capitalized */
// TODO: remove the capitalize function
function capitalize(letter) {
  return letter.toUpperCase();
}

/** Accept a word ; return its score */

function convertWordToScore(word, scrabbleBoard = LETTER_TO_SCORE) {
  let score = 0;

  for (let character of word) {
    if (capitalize(character) in scrabbleBoard) {
      score += scrabbleBoard[capitalize(character)];
    } else {
      return null;
    }
  }

  return score;
}

/** Declare a fixed global constant */
// TODO: be more specific about variable name

const LETTER_TO_SCORE = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};
