# wordguess-cli

This is a word guessing game. To install it, type into your shell prompt:

```bash
npm install
```

To run it, type:

```bash
node index
```

You will be presented with a series of blanks (`_`) indicating how many
letters are in the word, and prompted to guess a letter. You can make up
to 10 wrong guesses, and you will be prevented from guessing the same
letter twice.

The program itself is written in JavaScript for the
[Node.js](https://nodejs.org/) runtime. The word list is taken from macOS's
`/usr/share/dict/words` file, converted to JSON format and stored in
`words.json`. Libraries used include the built-in
[`fs` module](https://nodejs.org/api/fs.html) and
[`inquirer`](https://www.npmjs.com/package/inquirer). The code itself
demonstrates the use of constructors in JavaScript.
