var Word = require("./Word");
var inquirer = require("inquirer");
var fs = require("fs");

fs.readFile("./words.json", "utf8", function(error, data) {
  if (error) throw error;
  var wordList = JSON.parse(data);
  console.log(wordList);
});
