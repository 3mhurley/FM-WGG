// Object

var game = {
    uGuess: [],
    words: [],
    sWord: [],
    hWord: [],
    wins: 0,
    loses: 0,
    numAttempts: 10 + this.sWord.length,
    alphaCheck: function(element) {
        if (element.match(/^[a-zA-Z]+$/)) {  
            return true; 
        } else {
            alert('error');
        }
    },
    reset: function(element) {
        // Clear guesses
        uGuess = [];

        // Call Word Chooser
        this.wordChooser();

        // Reset remaining
        numAttempts = 10 + this.sWord.length;

    },
    wordChooser: function() {

    }
}