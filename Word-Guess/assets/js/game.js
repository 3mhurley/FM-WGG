// Object

var game = {
    uGuess: [],
    words: ['mongoose','badger'],
    sWord: [], // Randomly Selected Word e.g. 'mongoose'
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
        // Using math.random to select a number which we use to select a random index in our word array
        this.sWord = this.word[Math.floor(Math.random() * this.word.length)].split('');

        // Using the length of the selected word we loop and add underscores to the hidden word array
        for (i = 0; i < sWord.length; i++) {
            hWord.push("_");
        }
    }
}

// Event Listener
$('.wrapper').keyup(function (event) {

    // Start game
    // Select Word
    game.wordChooser();

    // Display the hidden word
    

})