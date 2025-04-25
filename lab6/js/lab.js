// Holds variables created from Task 1
// Author: Cindy Wong
// Date: 24 April 2025

// Define Variables
myTransport = ["walking", "riding a bus", "driving a car"];
myMainRide = {
  make: "Toyota",
  model: "Camry",
  color: "Beige",
  year: 2005,
  age: function() {
    return 2025 - year;
  }
}

// Output
document.writeln("How I Get Around: " + myTransport[0] + ", " + myTransport[1] + ", " + myTransport[2] + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
