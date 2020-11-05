var express = require('express');
var app = express();

//routes are handled in the order that they are put

app.get('/test', function (request, response, next) {
    response.send("Got a GETto /test path");
});

app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path);
});
app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here
