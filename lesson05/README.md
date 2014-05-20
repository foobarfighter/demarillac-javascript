# Review

## If Statement

An if statement lets us decide whether to do something or not.

````javascript
var apples = 3;
var oranges = 7;
if (apples > oranges) {
  alert('You have more apples than oranges.');
}
else {
  alert('You have more oranges than apples.');
}
````

## Loops

### For loop

A for loop lets us repeat doing something a number of times

````javascript
alert('Countdown...');
for (var i = 10; i > 0; i++) {
  alert(i + '...');
}
alert('Blast off!');
````

### While loop

A while loop lets us repeat doing something until a condition becomes true

````javascript
var num = 16;
while (num > 1) {
  console.log(num);
  num = num / 2;
}
````

### Do while loop

A do while loop is like a while loop, but the condition is checked at the end instead of the beginning.

````javascript
var done = false;
do {
  var password = prompt();
  if (password.length < 6) {
    console.log('Your password is too short!');
  }
  else {
    done = true;
} while (password.length < 6);
console.log('Nice password');
````

## Functions

A function lets us package up some work and give it a name. A function can take parameters as input that it uses to produce output. Using functions we can break a problem down into smaller pieces and build a solution one piece at a time.

````javascript
function sum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
````

# Simple games

We have a couple of simple game examples that use all of the different parts of JavaScript that we've seen so far. You can copy the code we've provided, and then try all the challenges.

[Guess the Number](GuessTheNumber.md)

[Hangman](Hangman.md)

