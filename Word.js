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
    this.letters.forEach(function(element) {
      element.guess(character);
    });
  };
}

module.exports = Word;
