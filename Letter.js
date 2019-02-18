function Letter(character) {
  this.character = character.toUpperCase();
  this.isGuessed = false;
  this.toString = function() {
    return this.isGuessed ? this.character : "_";
  };
  this.guess = function(guessedCharacter) {
    if (guessedCharacter.toUpperCase() === this.character) {
      this.isGuessed = true;
      return true;
    } else {
      return false;
    }
  };
}

module.exports = Letter;
