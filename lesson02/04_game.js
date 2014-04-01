console.log("WELCOME TO THE GAME!\n");

console.log("What is your age")
var age = prompt();

if (age > 13) {
    console.log("Get ready for an adventure");
} else {
	console.log("Your too young, but you can still play");
}

console.log("You are looking at two doors'");
console.log("There is two RED and Blue'");

var door = prompt("Which door do you open?");

if (door == "RED") {
    console.log("you picked red");
} else if (door == "blue") {
    console.log("you picked blue");
} else {
    console.log("wrong");
}