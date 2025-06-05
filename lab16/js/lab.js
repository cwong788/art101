// lab.js - Javascript file for Lab 15
// Author: Cindy Wong
// Date: 4 June 2025

// Variables

// Functions
// Function comic gets comic from website
function comic(num) {
    // If not default comic, which I check as -1, then add comic number to url
    let numString = "";
    if (num != -1) {
        numString = num.toString();
    }
    let link = "https://xkcd.com/" + numString + "/info.0.json";
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
            let numComic = data.num;
            let result = '<div><h2>'+ title + '</h2><img src="' + image + '" alt="' + alt + '" title="' + alt + '"><br></div>'
            $("#comic").html('<p>' + result + '</p>');
            // Previous button goes to the comic before, which is the current comic number - 1
            $("#previous").click(function(){
                comic(numComic - 1);
            });
            // Next button goes to the next comic, which is the current comic number + 1
            $("#next").click(function(){
                comic(numComic + 1);
            });
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }
    })
}

// Ask for user's name and sort it
function main() {
    // Call for default comic, which I number as -1
    comic(-1);
}

// let's get this party started
main();
