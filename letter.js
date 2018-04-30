// var letterInput = require("./game.js")
// console.log(`${letterInput} successfully imported`);

function Letter(setValue) {
    this.hiddenChar = setValue,
    this.isGuessed = false,
    this.reveal = function(playerInput){
        if (this.isGuessed === true) {
            // console.log(`If you see this, "this.isGuessed" = true (=> ${this.isGuessed})`);
            // console.log("loggin this.hiddenChar " + this.hiddenChar);
            // console.log("loggin input: " + playerInput);
            // console.log("loggin this.isGuessed: " + this.isGuessed)
            // console.log("this.hidden char in show true: " + this.hiddenChar);
            console.log(this.hiddenChar);
            return this.hiddenChar;
        }
        else {
            // console.log(`Boolean still shows false: ${this.isGuessed} + ${setValue} + ${playerInput} + ${this.hiddenChar}`);
            var placeHolder = "_";
            console.log(placeHolder);
            return this.hiddenChar;
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
            this.isGuessed = false;
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