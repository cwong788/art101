// lab.js - Javascript file for Lab 15
// Author: Cindy Wong
// Date: 29 May 2025

// Variables

// Functions
// click listener for Chuck Norris joke
$("#joke").click(function(){
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

// click listener for Nasa's Photo of the Day button
$("#nasa").click(function(){
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://api.nasa.gov/planetary/apod?api_key=Kapi8KVznDOGhCGvf1r3iAEstyKhfAtl6gfdvl9B",
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        success: function(data) {
            console.log("Success");
            console.log(data);
            let result = data.url;
            $("#output").append("<img class=photo src=" + data.url + ">");
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
