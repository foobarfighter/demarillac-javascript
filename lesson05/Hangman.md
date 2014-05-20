## Hangman

````javascript
var word = "blueberry";
var knownLetters = [];
var spaces = new Array(word.length);

function pretty_printed(word)
{
    var pretty_word = '';
    for (var i = 0; i < word.length; i++) {
        if (knownLetters.indexOf(word[i]) >= 0)
            pretty_word += word[i];
        else
            pretty_word += '_';
    }
    
    return pretty_word;
}

function wordHasLetter(word, letter)
{
    return word.indexOf(letter) >= 0;
}

var finished = false;
do {
    console.log("enter a letter:");
    var letter = prompt();
    knownLetters.push(letter);
    
    var pretty_word = pretty_printed(word);
    if (pretty_word == word) {
        console.log('You got it!');
        finished = true;
    }
    else if (wordHasLetter(word, letter)) {
        console.log('Good guess!');
    }
    
    console.log(pretty_word);    
} while (!finished);
````

### Challenges
1. Change the code to ask the user for a word.
   **HINT:** The ````prompt("What's your name?")```` function can help.
2. Change the code to show an error if the word is too long (more than 10 letters)
   **HINT:** You can use an if statement.
````javascript
if (/*something*/) {
  console.log('Your word is too long!);
}
````
3. Change the code to put a space between each character when printing, so it's easier to see what's happening.
   **HINT:** You'll need to modify the pretty_print function, inside the loop.
