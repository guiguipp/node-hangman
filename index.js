const Word = require("./word.js") //
const inquirer = require('inquirer'); 
/* 
Tried prompt. Has 2 fatal flaws: 
1. Said "Prompt: " in the prompt (not elegant) 
2. Doesn't allow multiple words prompts (allows them, but then can't retrieve the data) 
*/

const verbs = require("./db.js") // get word from word database

let randomWordObj = verbs.verbArray[Math.floor(Math.random()*verbs.verbArray.length)]; // generate random word to guess

let wordToGuess = randomWordObj.frenchTrans; // the word to guess is in French, this is its stored value
let wordToGuessTrans = randomWordObj.englishTrans; // English translation of the word to guess (to be used in key or as hint?)
console.log(wordToGuess + " = " + wordToGuessTrans);
wordToGuess = new Word(wordToGuess);
// console.log("wordToGuess: " + wordToGuess);
// console.log("wordToGuess.split(): " + wordToGuess.split(wordToGuess));
console.log("wordToGuess.string(): " + wordToGuess.string());


const validInput = /^[a-z\u00E0-\u00FC]{1}$/i;
/*
first attempt at regex. Tests for: 
- characters + accented characters (because: French), 
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
        // console.log(`${r.letter} is a valid input\n`);
        console.log("Letters entered: " + wordToGuess.checkLetters(r.letter));  // riddle is not updating if this is not there
        console.log("wordToGuess.string(): " + wordToGuess.string());
        }
        else {
        console.log(`Sorry, "${r.letter}" is not a valid input\nPlease enter a single letter! :)`);
        askLetter();
        }
    });
    }
    
    // while (wordToGuess.indexOf("_") != -1) {
    //     askLetter();
    // }
