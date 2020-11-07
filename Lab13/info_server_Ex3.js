var express = require('express');
var app = express();
var myParser = require("body-parser");

//routes are handled in the order that they are put

app.get('/test', function (request, response, next) {
    response.send("Got a GETto /test path");
});

app.use(myParser.urlencoded({ extended: true }));

app.post("/process_form", function (request, response) {
   let POST = request.body;
   console.log(POST);
   response.send(POST); 
});

app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path);

app.use(myParser.urlencoded({ extended: true }));

app.post("/process_form", function (request, response) {
       let POST = request.body;
       response.send(POST); 
    });
    

app.use(express.static('./public'));

});
app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here


function isNonNegInt(val, returnErrors = false) {
    errors = [];
    // assume no errors at first
    if (Number(val) != val) {
        errors.push('Not a number!');
        // Check if string is a number value
    } else {
        if (val < 0) errors.push('Negative value!');
        // Check if it is non-negative
        if (parseInt(val) != val) errors.push('Not an integer!');
        // Check that it is an integer
    }
    return returnErrors ? errors : ((errors.length > 0) ? false : true)
        ;
}