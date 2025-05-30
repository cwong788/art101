// lab.js - Javascript file for Lab 14
// Author: Cindy Wong
// Date: 27 May 2025

// Variables

// Functions
// click listener for button
$("#activate").click(function(){
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://api.chucknorris.io/jokes/random",
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        success: function(data) {
            console.log("Success");
            console.log(data);
            let result = data.value;
            $("#output").append('<p>' + result + '</p>');
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }
    })
});

// Ask for user's name and sort it
function main() {
}

// let's get this party started
main();
