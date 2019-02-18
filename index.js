var Word = require("./Word");
var inquirer = require("inquirer");
var fs = require("fs");

fs.readFile("./words.json", "utf8", function(error, data) {
  if (error) throw error;
  var wordList = JSON.parse(data);
  //  var word = new Word(wordList[Math.floor(Math.random() * wordList.length)]);
  var word = new Word("buzzed");
  var guesses = [];
  console.log("Let's play Guess The Word!");
  gameLoop(10);

  function gameLoop(guessesLeft) {
    console.log(
      word
        .toString()
        .split("")
        .join(" ")
    );

    inquirer
      .prompt([
        {
          type: "input",
          name: "guess",
          message: "Guess a letter!",
          validate: function(input) {
            if (input.length === 1) {
              if (guesses.indexOf(input) !== -1) {
                return "You already guessed that!";
              } else {
                return true;
              }
            } else {
              return "One letter only, please!";
            }
          }
        }
      ])
      .then(function(answers) {
        guesses.push(answers.guess);
        if (!word.guessLetter(answers.guess.toUpperCase())) {
          console.log("\x1b[31m%s\x1b[0m", "INCORRECT!!!");
          guessesLeft--;
          console.log(guessesLeft + " guesses remaining!!!");
        } else {
          console.log("\x1b[32m%s\x1b[0m", "CORRECT!!!");
        }

        if (
          word.letters.every(function(letter) {
            return letter.isGuessed;
          })
        ) {
          console.log("\x1b[32m%s\x1b[0m", "YOU WIN!!!");
        } else if (guessesLeft > 0) {
          gameLoop(guessesLeft);
        } else {
          console.log("\x1b[31m%s\x1b[0m", "YOU LOSE!!!");
          console.log(
            "The word was " +
              word.letters
                .map(function(letter) {
                  return letter.character;
                })
                .join("")
          );
        }
      });
  }
});
