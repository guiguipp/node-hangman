// var letterInput = require("./game.js")
// console.log(`${letterInput} successfully imported`);

function Letter(setValue) {
    this.hiddenChar = setValue,
    this.isGuessed = false,
    this.show = function(playerInput){
        if (this.isGuessed === true) {
            console.log(`If you see this, "this.isGuessed" = true (=> ${this.isGuessed})`);
            console.log("loggin this.hiddenChar " + this.hiddenChar);
            console.log("loggin input: " + playerInput);
            console.log("loggin this.isGuessed: " + this.isGuessed)
            console.log("this.hidden char in show true: " + this.hiddenChar);
            return this.hiddenChar;
        }
        else {
            console.log(`Boolean still shows false: ${this.isGuessed} + ${setValue} + ${playerInput} + ${this.hiddenChar}`);
            this.hiddenChar = "_";            
            return this.hiddenChar;
        }
    },
    this.test = function(playerInput) {
        if (playerInput === this.hiddenChar) {
            console.log(`If you see this, it means that the user guessed the character right. ${playerInput} compare to ${this.hiddenChar}`);
            this.isGuessed = true;
            console.log(`(new value of the boolean: ${this.isGuessed})`);
            
            return this.isGuessed;
        }
        else {
            console.log(`If you see this, it means that the user did not guess the character. ${playerInput} compare to ${this.hiddenChar}`);
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