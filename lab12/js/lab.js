// lab.js - Javascript file for Lab 12 to experiment with conditionals
// Author: Cindy Wong
// Date: 20 May 2025

// Variables

// Functions
// Sorts user into a house based on number of letters in input
function sortingHat(str) {
  // Count the letters in str and assigns it to variable length
  let length = str.length;
  // Get remainder when dividing by 4
  let mod = length % 4;
  // Conditional that picks house based on remainder
  if (mod == 0) {
    return("House of Gryffindor");
  } else if (mod == 1) {
    return("House of Hufflepuff");
  } else if (mod == 2) {
    return("House of Ravenclaw");
  } else {
    return("House of Slytherin");
  }
}

// click listener for sorting hat
$("#button").click(function(){
  // get value of input field
  let name = $("#input").val();
  // get house
  let house = sortingHat(name);
  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + "The Sorting Hat has sorted you into: " + house + '</p></div>');
});

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

// Ask for user's name and sort it
function main() {
  
}

// let's get this party started
main();
