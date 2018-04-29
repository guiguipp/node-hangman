var inquirer = require('inquirer'); 
/* 
Tried prompt. Has 2 fatal flaws: 
1. Said "Prompt: " in the prompt (not elegant) 
2. Doesn't allow multiple words prompts (allows them, but then can't retrieve the data) 
*/
var validInput = /^[a-z\u00E0-\u00FC]{1}$/i;
var letter; 
/*
first attempt at regex. Tests for: 
- characters + accented characters (because French), 
- limits to one 
- insensitive to case 
*/

askLetter();

function askLetter(){
    inquirer.prompt([
        {
        type: "input",
        message: "Guess a letter!",
        name: "letter"
        }
    ])
    .then(function(r) {
        if (validInput.test(r.letter)) { 
        // if (validChar.test(r.letter) && notDigit.test(r.letter)) {
        console.log(`${r.letter} is a valid input\n`);
        letter = r.letter;
        }
        else {
        console.log(`Sorry, "${r.letter}" is not a valid input\nPlease enter a single letter! :)`);
        askLetter();
        }
    });
    }
module.exports = {
    letter
};
