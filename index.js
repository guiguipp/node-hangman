const values = require("./word.js")
const colors = require('colors');
const inquirer = require('inquirer'); 
/* 
Tried prompt. Has 2 fatal flaws: 
1. Said "Prompt: " in the prompt (not elegant) 
2. Doesn't allow multiple words prompts (allows them, but then can't retrieve the data) 
*/
const Word = values.Word;
let charToString = values.charToString;
let arrayOfLetterObj = values.arrayOfLetterObj;
let lettersEntered = values.lettersEntered;
let attempts = 10;
let randomWordObj
let wordToGuess;
let wordToGuessEng;
let wordToGuessFren;


const verbs = require("./db.js") // get word from word database

resetGameParam()
gameLogic()

const validInput = /^[a-z\u00E0-\u00FC]{1}$/i;
/*
first attempt at regex. Tests for: 
- characters + accented characters (because: French), 
- limits to one 
- insensitive to case 
*/


function resetGameParam(){
    if (wordToGuess != undefined) {
        for (let i = 0; i < arrayOfLetterObj.length; i++) {
            arrayOfLetterObj[i].isGuessed = false; // resets the flags
        }
        /* I do not manage to reset all the value from my initial setup 
        which is why my game is truck in a loop after a win */

        /* I think it's due to how I define the word to guess (which should probably be
        based on wordToGuessFren, not wordToGuess?) */
    }
    attempts = 10;
    randomWordObj = verbs.verbArray[Math.floor(Math.random()*verbs.verbArray.length)]; // generate random word to guess
    wordToGuess = randomWordObj.frenchTrans; // the word to guess is in French, this is its stored value
    wordToGuessEng = randomWordObj.englishTrans; // English translation of the word to guess (to be used in key or as hint?)
    wordToGuessFren = randomWordObj.frenchTrans;
    
    console.log("\nGuess what is the French for: " + colors.blue(wordToGuessEng) + "\n");
    wordToGuess = new Word(wordToGuess);
    console.log("après new word" + arrayOfLetterObj[1]);

    wordToGuess.string();
    console.log(`${wordToGuess.string()}\n`);
} 

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
        console.log(`\nGuesses so far: ${wordToGuess.checkLetters(r.letter)}\n`);  // riddle is not updating if this is not there
        console.log(`\n${wordToGuess.string()}\n`);
        gameLogic();
        }
        else {
        console.log(`Sorry, "${r.letter}" is not a valid input\nPlease enter a single letter! :)`);
        askLetter();
        }
    });
    }
    
function gameLogic(){
    if (wordToGuess.string().includes("_") && attempts >= 0) {
        attempts--;
        askLetter();
    }
    else if (wordToGuess.string().includes("_") === false && attempts >= 0) {
        console.log(colors.green(`\nCongratulations, you have successfully guessed the French translation for "${wordToGuessEng}": "${wordToGuessFren}"\n`));
        anotherGame();
    }
    else if (attempts < 0) {
        console.log(colors.red(`Sorry about that. The French translation for "${wordToGuessEng}" is "${wordToGuessFren}"`));
        anotherGame(); // this function is not ready yet :(
    }
}    



function anotherGame(){
    inquirer.prompt([
        {
        type: "list",
        message: "Do you want to play another game?",
        choices: ["YES", "NO"],
        name: "again"
        }
    ])
    .then(function(choice) {        
        if (choice.again == "YES") {
            console.log("\nOkay then!\n");
            resetGameParam();
            gameLogic()
        }
        else {
        console.log("\nSorry to see you go. Hope you play again sometime!");
        }
    });
    }