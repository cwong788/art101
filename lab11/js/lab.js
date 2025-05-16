// lab.js - Javascript file for Lab 11 to experiment with events and input forms
// Author: Cindy Wong
// Date: 15 May 2025

// Variables

// Functions
// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// sortAnagram function shuffles the name to create an anagram
// Reference: https://www.w3schools.com/js/js_array_sort.asp#mark_random
function sortAnagram(name) {
  var userName = name;
  // Split string into an array
  var arrayName = userName.split('');
  // Sort the array by doing so randomly
  var sortedArray = arrayName.sort(function(){return 0.5 - Math.random();});
  // Convert the array back to a string
  var sortedName = sortedArray.join('');
  // Return sorted name
  return sortedName;
}

// click listener for normal submit button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  // now let's sort it
  userNameSorted = sortString(userName);
  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
});

// click listener for anagram submit button
$("#anagram").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  // now let's sort it
  userNameSorted = sortAnagram(userName);
  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
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
