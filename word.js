var verbs = require("./db.js") // get word from word database

let randomWordObj = verbs.verbArray[Math.floor(Math.random()*verbs.verbArray.length)]; // generate random word to guess

let wordToGuess = randomWordObj.frenchTrans // the word to guess is in French, this is its stored value
let wordToGuessTrans = randomWordObj.englishTrans // English translation of the word to guess (to be used in key or as hint?)
// console.log(wordToGuess + " = " + wordToGuessTrans);

