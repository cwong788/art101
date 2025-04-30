// Task 7 Functions Javascript File
// Author: Cindy Wong
// Date: 29 April 2025

// Variables


// Functions
// sortName function alphabetically sorts the name of the user and returns it
function sortName() {
  var userName = window.prompt("What is your name?");
  // Split string into an array
  var arrayName = userName.split('');
  // Sort the array
  var sortedArray = arrayName.sort();
  // Convert the array back to a string
  var sortedName = sortedArray.join('');
  // Return sorted name
  return sortedName;
}

// Output

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  // Ask for user's name and sort it
  var name = sortName();
  document.writeln("Sorted Name: " + name + "</br>");
}

// let's get this party started
main();
