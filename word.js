// let newWord = require("./index.js") // activate when ready
let Letter = require("./letter.js") //
let arrayOfLetterObj = [];
let charToString = [];
let tempArray = [];
/*
Word.js: The constructor should define:

An array of new Letter objects representing the letters of the underlying word

A function that returns a string representing the word. 

This should call the function on each letter object (the first function defined in Letter.js) 
that displays the character or an underscore and concatenate those together.

A function that takes a character as an argument and calls the guess function 
on each letter object (the second function defined in Letter.js)
*/

function Word(word) {
    this.split = function (word) {
        splitWord = word.split("");
        splitWord.forEach(function(e){
            tempArray = new Letter(e);
            arrayOfLetterObj.push(tempArray);
        });
        return arrayOfLetterObj;
    }
    this.string = function () {
            for (let i = 0; i < arrayOfLetterObj.length; i++) {
                // console.log(arrayOfLetterObj[i].hiddenChar);
                charToString.push(arrayOfLetterObj[i].hiddenChar);
                 }
            console.log(charToString.join(" "));
        } 
    this.checkLetters = function(char) {
        for (let i = 0; i < arrayOfLetterObj.length; i++) {
            tempArray.test(char);
            // console.log(arrayOfLetterObj.test(char));
                }
            }
        }  

// var testing = new Word("bac")
// testing.split("bac")
// testing.string();
// testing.checkLetters("c");


module.exports = Word;