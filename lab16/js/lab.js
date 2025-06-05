// lab.js - Javascript file for Lab 15
// Author: Cindy Wong
// Date: 4 June 2025

// Variables
let link = "https://xkcd.com/info.0.json";

// Functions
// Function comic gets comic from website
function comic() {
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request
        url: link,
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        success: function(data) {
            console.log("Success");
            console.log(data);
            let title = data.safe_title;
            let image = data.img;
            let alt = data.alt;
            let result = '<div><h2>'+ title + '</h2><img src="' + image + '" alt="' + alt + '" title="' + alt + '"><br></div>'
            $("#comic").html('<p>' + result + '</p>');
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }
    })
}

// Ask for user's name and sort it
function main() {
    comic();
}

// let's get this party started
main();
