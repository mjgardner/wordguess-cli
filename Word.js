var Letter = require("./Letter");

function Word(word) {
  this.letters = word.split("").map(function(character) {
    return new Letter(character);
  });
  this.toString = function() {
    return this.letters
      .map(function(value) {
        return value.toString();
      })
      .join("");
  };
  this.guessLetter = function(character) {
    var guessedRight = false;
    this.letters.forEach(function(letter) {
      if (letter.guess(character)) {
        guessedRight = true;
      }
    });
    return guessedRight;
  };
}

module.exports = Word;
