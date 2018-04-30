// let newWord = require("./index.js") // activate when ready
let Letter = require("./letter.js") //
let arrayOfLetterObj = [];
let charToString = [];
let tempArray = [];
let lettersEntered = [];
/*
Word.js: The constructor should define:
An array of new Letter objects representing the letters of the underlying word
A function that returns a string representing the word. This should call the function 
on each letter object (the first function defined in Letter.js) 
that displays the character or an underscore and concatenate those together.
A function that takes a character as an argument and calls the guess function 
on each letter object (the second function defined in Letter.js)
*/

function Word(word) {
    this.split = function(word) {
        // split the word into an array of letters
        splitWord = word.split("");
        // pass every letter to the constructor to create Letter objects, pushed in arrayOfLetterObj
        if (arrayOfLetterObj.length === 0) {
            for (let i = 0; i < splitWord.length; i++) {
                let char = new Letter(splitWord[i])
                arrayOfLetterObj.push(char);
            } 
            return arrayOfLetterObj;
        }
        else {
            for (let i = 0; i < splitWord.length; i++) {
                let char = new Letter(splitWord[i])
                // arrayOfLetterObj.push(char);            
            }
        return arrayOfLetterObj;
        }
    }
    this.string = function() {
        // call the split method on input
        this.split(word);
        // then for each letter of random word, push value from Letter method in array
        charToString = [];
            for (let i = 0; i < arrayOfLetterObj.length; i++) {
                charToString.push(arrayOfLetterObj[i].reveal());                            
            }
            // console.log("\n" + charToString.join(" ") + "\n")
            // should be the "char to display" joined
            return charToString.join(" ")
        } 
    this.checkLetters = function(char) { 
        for (let i = 0; i < arrayOfLetterObj.length; i++) {
            arrayOfLetterObj[i].test(char);
                }
                lettersEntered.push(char)
                return lettersEntered;
            }
        }  

// var testing = new Word("bac")
// testing.split(testing)
// testing.string();
// testing.checkLetters(testing);


module.exports = Word;