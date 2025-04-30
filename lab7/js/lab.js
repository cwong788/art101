// Task 7 Functions Javascript File
// Author: Cindy Wong
// Date: 29 April 2025

// Variables


// Functions
// sortName function alphabetically sorts the name of the user and returns it
function sortName(name) {
  var userName = name;
  // Split string into an array
  var arrayName = userName.split('');
  // Sort the array
  var sortedArray = arrayName.sort();
  // Convert the array back to a string
  var sortedName = sortedArray.join('');
  // Return sorted name
  return sortedName;
}

// sortIgnoreCase function sorts the name with uppercase and lowercase together
// Reference: https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
function sortIgnoreCase(name) {
  var userName = name;
  // Split string into an array
  var arrayName = userName.split('');
  // Sort the array with upper and lowercase together
  var sortedArray = arrayName.sort(
    function(a, b) {
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      return 0;
    }
  );
  // Convert the array back to a string
  var sortedName = sortedArray.join('');
  // Return sorted name
  return sortedName;
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

// sortIgnoreSpace function sorts the name while ignoting/omitting spaces
// Reference: https://www.w3schools.com/js/js_string_methods.asp#mark_replace
function sortIgnoreSpace(name) {
  var userName = name.replace(/ /g, '');
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

// Ask for user's name and sort it
function main() {
  var name = window.prompt("What is your name?");
  var sortedName = sortName(name);
  document.writeln("Sorted Name: " + sortedName + "</br>");
  var sortedNameIgnoreCase = sortIgnoreCase(name);
  document.writeln("Sorted Name with Upper and Lowercase Together: " + sortedNameIgnoreCase + "</br>");
  var sortedNameIgnoreSpace = sortIgnoreSpace(name);
  document.writeln("Sorted Name Ignoring Spaces: " + sortedNameIgnoreSpace + "</br>");
  var sortedNameAnagram = sortAnagram(name);
  document.writeln("Shuffled Name as Anagram: " + sortedNameAnagram + "</br>");
  document.writeln("Sorted Name Stylized: ");
  document.writeln("<div class='nameStyle'>" + sortedName + "</div>")
}

// let's get this party started
main();
