// Lab 8: Anon Functions and Callbacks, Task 3
// Author: Cindy Wong
// Date: 6 May 2025

// Variables
array = [1, 2, 3, 4, 5, 6];

// Functions
// double function multiplies the number x by 2
function double (x){ 
  return x*2; 
}

// Output

// Test Function
console.log("Double 5 is: ", double(5));
console.log("Double 10 is: ", double(10));

// Double each number in the array
var result = array.map(double);
console.log("Double the array: ", result);

// Adds 10 to each number in the array
var result = array.map(function(x){
  return x + 10;
})
console.log("Added 10 to each number in array: ", result);

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
