// lab.js - Javascript file for Lab 12 to experiment with conditionals
// Author: Cindy Wong
// Date: 20 May 2025

// Variables
// Source for descriptino of houses: https://harrypotter.fandom.com/wiki/Hogwarts_Houses#The_four_Houses_of_Hogwarts
// Second source for descriptino of houses: https://www.harrypotter.com/news/discover-your-hogwarts-house-on-wizarding-world 
const houses = [
  "House of Gryffindor: They value bravery, daringness, nerve, and chivalry. Their emblematic animal is the lion. Notable members include Harry Potter, Hermione Granger and Ron Weasley.",
  "House of Hufflepuff: They value hard work, dedication, patience, loyalty, and fair play. Their emblematic animal is the badger. Notable members include Newt Scamander, Cedric Diggory and Nymphadora Tonks.",
  "House of Ravenclaw: They value intelligence, knowledge, curiosity, creativity and wit. Their emblematic animal is the eagle. Notable members include Luna Lovegood, Gilderoy Lockhart and Filius Flitwick.",
  "House of Slytherin: They value ambition, leadership, self-preservation, cunning and resourcefulness. Their emblematic animal is the serpent. Notable members include Severus Snape, Draco Malfoy and Lord Voldemort."
];

// Functions
// Sorts user into a house based on number of letters in input
function sortingHat(str) {
  // Count the letters in str and assigns it to variable length
  let length = str.length;
  // Get remainder when dividing by the number of houses
  let mod = length % houses.length;
  // Conditional that picks house based on remainder
  return houses[mod];
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
