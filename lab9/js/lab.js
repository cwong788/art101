// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Author: Cindy Wong
// Date: 8 May 2025

// Variables

// Functions

// Output

// Use jQuery to add buttons for challenge, problems, and results section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#reflection").append("<button id='button-reflection'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

// Add a click listener to the three buttons: challenge, problems, results
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});
$("#button-reflection").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
});
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
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
