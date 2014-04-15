# Define a function
```javascript
function sum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
```

# Execute a function
```javascript
var total = sum(1, 3);
console.log(total);
```

# Functions have three important properties
1. Calculate an output from the inputs
2. Represent a large number of instructions as one statement.
3. Allow us to make complicated programs by calling functions inside of other functions.

```javascript
function launchRocketShip(destination) {
  runPreflightChecks();
  setNavigationTo(destination);
  startCountDown(5);
  pumpFuel();
  igniteEngines();
  liftOff();
}

launchRocketShip('mars');
```

# Try the exercises yourself
Open a separate web browser to http://repl.it/languages/JavaScript

# Fun googly eye demo
http://jsfiddle.net/NLxPR/5/
