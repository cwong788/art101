// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Author: Cindy Wong
// Date: 8 May 2025

// Variables

// Functions

// Output

// Use jQuery to add buttons for each section with the "minor-section" id
$(".minor-section").append("<button class='button-special'>Make Special</button>");

// Add a click listener to all buttons with the "button-special" class
$(".button-special").click(function(){
  // "this" refers to the button being clicks
  // Then we traverse the DOM to the parent
  $(this).parent().toggleClass("special");
})

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
