// ASSIGNMENT NO 27:

/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

console.log("ASSIGNMENT NO 27:");

// Define Variable:
let alienColor = "green";

// Using If and Else-If Statements:

if(alienColor === "green"){
    console.log("(Version 1) You shot down green alien you have earned 5 points");
}
else if(alienColor === "yellow"){
    console.log("You shot down yellow alien you have earned 10 points");
}
else if(alienColor === "red"){
    console.log("You shot down red alien you have earned 15 points");
}

// Verison 2:

let alienColor2 = "yellow";

if(alienColor2 === "green"){
    console.log("You shot down green alien you have earned 5 points");
}
else if(alienColor2 === "yellow"){
    console.log("(Version 2) You shot down yellow alien you have earned 10 points");
}
else if(alienColor2 === "red"){
    console.log("You shot down red alien you have earned 15 points");
}

// Verison 3:

let alienColor3 = "red";

if(alienColor3 === "green"){
    console.log("You shot down green alien you have earned 5 points");
}
else if(alienColor3 === "yellow"){
    console.log("You shot down yellow alien you have earned 10 points");
}
else if(alienColor3 === "red"){
    console.log("(Version 3) You shot down red alien you have earned 15 points");
}