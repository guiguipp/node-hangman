// let newWord = require("./index.js") // activate when ready
let Letter = require("./letter.js") //
let arrayOfLetterObj = [];
let charToString = [];
let tempArray = [];
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
        // split the word
        splitWord = word.split("");
        // push every letter from the word in arrayOfLetterObj
        splitWord.forEach(function(e){
            tempArray = new Letter(e);
            arrayOfLetterObj.push(tempArray);
        });
        return arrayOfLetterObj;
    }
    this.string = function() {
        // run the split method on input
        this.split(word);
        // then for each letter of input, push value from Letter method in array
            for (let i = 0; i < arrayOfLetterObj.length; i++) {
                charToString.push(arrayOfLetterObj[i].reveal());                
            }
            console.log("current state of the riddle: " + charToString.join(" "))            
        } 
    this.checkLetters = function(char) {
        for (let i = 0; i < arrayOfLetterObj.length; i++) {
            arrayOfLetterObj[i].test(char);
                }
            }
        }  

// var testing = new Word("bac")
// testing.split(testing)
// testing.string();
// testing.checkLetters(testing);


module.exports = Word;