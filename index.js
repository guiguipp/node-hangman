const values = require("./word.js")
const Word = values.Word;
const inquirer = require('inquirer'); 
/* 
Tried prompt. Has 2 fatal flaws: 
1. Said "Prompt: " in the prompt (not elegant) 
2. Doesn't allow multiple words prompts (allows them, but then can't retrieve the data) 
*/
let attempts = 10;

const verbs = require("./db.js") // get word from word database

let randomWordObj = verbs.verbArray[Math.floor(Math.random()*verbs.verbArray.length)]; // generate random word to guess

let wordToGuess = randomWordObj.frenchTrans; // the word to guess is in French, this is its stored value
let wordToGuessEng = randomWordObj.englishTrans; // English translation of the word to guess (to be used in key or as hint?)
let wordToGuessFren = randomWordObj.frenchTrans;
// console.log(wordToGuess + " = " + wordToGuessTrans);
console.log(`\nGuess what is the French for "${wordToGuessEng}"\n`);

wordToGuess = new Word(wordToGuess);
// console.log("wordToGuess: " + wordToGuess);
// console.log("wordToGuess.split(): " + wordToGuess.split(wordToGuess));
console.log(`${wordToGuess.string()}\n`);


const validInput = /^[a-z\u00E0-\u00FC]{1}$/i;
/*
first attempt at regex. Tests for: 
- characters + accented characters (because: French), 
- limits to one 
- insensitive to case 
*/

// askLetter();

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
        // console.log(`${r.letter} is a valid input\n`);
        console.log(`\nYour guesses so far: ${wordToGuess.checkLetters(r.letter)}\n`);  // riddle is not updating if this is not there
        console.log(`\n${wordToGuess.string()}\n`);
        startGame();
        }
        else {
        console.log(`Sorry, "${r.letter}" is not a valid input\nPlease enter a single letter! :)`);
        askLetter();
        }
    });
    }
    
function startGame(){
    if (wordToGuess.string().includes("_") && attempts >= 0) {
        attempts--;
        askLetter();
    }
    else if (wordToGuess.string().includes("_") === false && attempts >= 0) {
        console.log(`\nCongratulations, you have successfully guessed the French translation for "${wordToGuessEng}": "${wordToGuessFren}"\n`);
    }
    else if (attempts < 0) {
        console.log(`Sorry about that. Do you want to play again?`);
        
    }
}    
startGame()
