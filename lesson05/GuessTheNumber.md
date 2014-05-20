## Guess the Number

````javascript
function randomNumberBetween(low, high)
{
    return Math.floor((Math.random() * high) + 1);
}

function askForGuess()
{
    console.log('What is your guess?');
    var g = prompt('What is your guess?');
    var guess = parseInt(g, 10);
    if (isNaN(guess))
        console.log('That is not a number.');
    return guess;
}

var low = 1;
var high = 10;
var number = randomNumberBetween(low, high);
console.log('I have chosen a number between ' + low + ' and ' + high + '.');

var finished = false;
do {
    var guess = askForGuess();
    if (guess == number) {
        finished = true;
    }
    else {
        console.log('Nope! Guess again!');
    }
} while (!finished);

console.log('Congratulations! You guessed the number!');
````

### Challenges
1. Change the low and high numbers that the computer chooses between.
2. Change the code to let someone else choose the number.
   **HINT:** The ````prompt("What's your name?")```` function can help.
3. Change the code to tell the guesser whether they were too high or low.
   **HINT:** You can use an if statement.
````javascript
if (/*something*/) {
  console.log('Your guess was too high!');
}
else {
  console.log('Your guess was too low!');
}
````