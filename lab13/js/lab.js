// lab.js - Javascript file for Lab 13 to experiment with loops
// Author: Cindy Wong
// Date: 22 May 2025

// Variables

// Functions
// Function fizzBuzz loops through numbers 1 to 200 and outputs if they meet certain conditions
function fizzBuzz() {
  result = "";
  for(i = 1; i<=200; i++) {
    if (i % 105 == 0) { // multiple of 3, 5, 7
      result += i + " FizzBuzzBoom!<br>";
    } else if (i % 21 == 0) { // multiple of 3, 7
      result += i + " FizzBoom!<br>";
    } else if (i % 15 == 0) { // multiple of 3, 5
      result += i + " FizzBuzz!<br>";
    } else if (i % 35 == 0) { // multiple of 5, 7
      result += i + " BuzzBoom!<br>";
    } else if (i % 3 == 0) { // multiple of 3
      result += i + " Fizz!<br>";
    } else if (i % 5 == 0) { // multiple of 5
      result += i + " Buzz!<br>";
    } else if (i % 7 == 0) { // multiple of 7
      result += i + " Boom!<br>";
    } else {
      result += i + "<br>"
    }
  }
  $("#output").html(result);
}

// Ask for user's name and sort it
function main() {
  fizzBuzz();
}

// let's get this party started
main();
