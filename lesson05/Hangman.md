## Hangman

This example lets you play a simple game of hangman. Keep guessing letters until you get the word!

````javascript
/* The secret word */
var word = "blueberry";

/* The list of letters that the user has already guessed. */
var knownLetters = [];

/* This function prints the secret word, letters that haven't yet been guessed are replaced with _ */
function pretty_printed(word)
{
    var pretty_word = '';
    for (var i = 0; i < word.length; i++) {
        if (isKnown(word[i]))
            pretty_word += word[i];
        else
            pretty_word += '_';
    }
    
    return pretty_word;
}

/* This function returns true if `letter` has already been guessed by the user */
function isKnown(letter)
{
    return knownLetters.indexOf(letter) >= 0;
}

/* This function returns true if `word` contains `letter` */
function wordHasLetter(word, letter)
{
    return word.indexOf(letter) >= 0;
}

var finished = false;
do {
    console.log("enter a letter:");
    var letter = prompt();

    /* Save the letter to the list of letters that have already been guessed. */
    knownLetters.push(letter);
    
    /* Get the word printed with underscores for unguessed letters */
    var pretty_word = pretty_printed(word);

    /* If no letters are unguessed, then the user is all done */
    if (pretty_word == word) {
        console.log('You got it!');
        finished = true;
    }
    else if (wordHasLetter(word, letter)) {
        /* If the word has the guessed letter, then congratulate the user */
        console.log('Good guess!');
    }
    
    /* Display the word so the user can see progress */
    console.log(pretty_word);    
} while (!finished);
````

### Challenges

#### Change the code to ask the user for a word.
   **Hint:** The ````prompt("What's your name?")```` function can help.

#### Change the code to show an error if the word is too long (more than 10 letters)
   **Hint:** You can use an if statement.
````javascript
if (/*something*/) {
  console.log('Your word is too long!);
}
````

#### Change the code to put a space between each character when printing, so it's easier to see what's happening.
   **Hint:** You'll need to modify the pretty_print function, inside the loop.

#### Change the code to only give you a limited number of wrong guesses.
   **Hint:** You'll need to keep track of the number of wrong guesses that have happened, and use an if statement to see if that number has been reached yet.
