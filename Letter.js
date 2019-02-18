function Letter(character) {
  this.character = character.toUpperCase();
  this.isGuessed = false;
  this.toString = function() {
    return this.isGuessed ? this.character : "_";
  };
  this.guess = function(guessedCharacter) {
    this.isGuessed = guessedCharacter.toUpperCase() === this.character;
  }
}

module.exports = Letter;
