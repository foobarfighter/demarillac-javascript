## Guess the Number

In this example, the computer chooses a random number, and you have to guess what number was chosen.

````javascript
/* This is how Adam chooses a random number in a certain range. */
function randomNumberBetween(low, high)
{
    /* Math.random() is a function that returns a random number between 0 and 1        *
     * We multiply that by the number range to get a number between 0 and (high - low) *
     * Then we add the low number to get a number between low and high                 *
     * Then we "floor" the number, or round it down to an integer                      */
    return Math.floor((Math.random() * (high - low)) + low);
}

/* This function asks the user for a guess and returns the number they entered. */
function askForGuess()
{
    /* Ask the user to give us a guess */
    var g = prompt('What is your guess?');
    /* Convert the guess from a string of characters into an actual number */
    var guess = parseInt(g, 10);
    /* If we were unable to convert the user's input, the function isNaN will return true */
    if (isNaN(guess))
        console.log('That is not a number.');

    return guess;
}

/* First challenge */
var low = 1;
var high = 10;

/* Adam chooses a secret number between 1 and 10 */
var number = randomNumberBetween(low, high);
console.log('I have chosen a number between ' + low + ' and ' + high + '.');

var finished = false;
do {
    /* Adam asks for someone to guess the number */
    var guess = askForGuess();

    /* If the guess was correct, we're all done! */
    if (guess == number) {
        finished = true;
    }
    else {
        /* Otherwise, we have to try again. */
        console.log('Nope! Guess again!');
    }
} while (!finished);

console.log('Congratulations! You guessed the number!');
````

### Challenges

#### Change the low and high numbers that the computer chooses between.

#### Change the code to let someone else choose the number.
   **Hint:** The ````prompt("What's your secret number?")```` function can help.

#### Change the code to tell the guesser whether they were too high or low.
   **Hint:** You can use an if statement.
````javascript
if (/*something*/) {
  console.log('Your guess was too high!');
}
else {
  console.log('Your guess was too low!');
}
````
