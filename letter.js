// var letterInput = require("./game.js")
// console.log(`${letterInput} successfully imported`);

function Letter(setValue) {
    this.hiddenChar = setValue,
    this.isGuessed = false,
    this.reveal = function(playerInput){
        var charDisplayed;
        if (this.isGuessed) {
            charDisplayed = this.hiddenChar;
            return charDisplayed;
        }
        else {
            charDisplayed = "_";            
            return charDisplayed;
        }
    },
    this.test = function(playerInput) {
        if (playerInput === this.hiddenChar) {
            // console.log(`!!! Guessed right. ${playerInput} compare to ${this.hiddenChar} !!!`);
            this.isGuessed = true;
            this.reveal()                        
            return this.isGuessed;
        }
        else {
            // console.log(`--- Guessed wrong. ${playerInput} compare to ${this.hiddenChar} ---`);
            this.reveal();
            // this.isGuessed = false;
        }
    }
}
// var testing = new Letter("z");
// console.log("------------------");
// console.log("testing hidden char: " + testing.hiddenChar)
// console.log("testing boolean: " + testing.isGuessed);
// console.log("------------------");
// testing.show("z");
// testing.test("z");

module.exports = Letter;