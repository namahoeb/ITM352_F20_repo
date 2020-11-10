/*
    Coded By: Brandy Namahoe
    Parts of code used from Lab 13 and Daniel Port's Assignment 1 example video
*/

// To access code from node packages
var express = require('express'); // to load express module
var myParser = require("body-parser"); // to load and cache body parser module
var products = require('./products.js'); // load products.json file and set to variable 'products'
var fs = require('fs');
var app = express(); // express 'app'
const queryString = require('query-string'); // read variable 'queryString' as the loaded query-string module

app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path); // write in the console the request method and its path
    next(); // continue
});

app.use(myParser.urlencoded({ extended: true })); // put products in the body

// Response when /process_form is requested, when purchase form is submitted
app.post("process_form", function (request, response, next) { // to access invoice
    let POST = request.body; // products packaged in body
    params = request.query;
    console.log(params);

    //check if quantities are nonnegative integers 
    if (typeof POST['submitPurchase'] != 'undefined') {
        var hasvalidquantities = true; // creating a varibale assuming that it'll be true
        var hasquantities = false
        for (i = 0; i < products.length; i++) {
            
                        qty=POST[`quantity${i}`];
                        hasquantities=hasquantities || qty>0; // If it has a value larger than 0 then it is good
                        hasvalidquantities=hasvalidquantities && isNonNegInt(qty);    // if it is both a quantity over 0 and is valid    
        } 
        // if all quantities are valid, will generate the invoice
        const stringified = queryString.stringify(POST);
        if (hasvalidquantities && hasquantities) {
            response.redirect("./invoice.html?"+stringified); // using the invoice.html and all the data that is input
        }  
        else { 
            response.redirect("./products_display.html?" + stringified) 
        }
    }
});

//repeats the isNonNegInt function from the products_display.html file 
function isNonNegInt(q, returnErrors = false) {
    errors = []; // assume that quantity data is valid 
    if (q == "") { q = 0; }
    if (Number(q) != q) errors.push('Not a number!'); //check if the string is a number
    if (q < 0) errors.push('Negative value!'); //check if value is a positive
    if (parseInt(q) != q) errors.push('Not an integer!'); //check if value is an integer
    return returnErrors ? errors : (errors.length == 0);
}

app.use(express.static('./public')); // root in the 'public' directory so that express will serve up files from here
app.listen(8080, () => console.log(`listening on port 8080`)); //run the server on port 8080 and show it in the console
