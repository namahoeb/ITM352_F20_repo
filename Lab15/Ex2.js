var express = require('express');
var app = express();
var myParser = require("body-parser");
const fs = require('fs');
var cookieParser = require('cookie-parser');
const { request, response } = require('express');

var session = require('express-session');
app.use(session({secret: "ITM352 rocks!"}));


const user_data_filename = 'user_data.json';

// check if file exists before reading

if (fs.existsSync(user_data_filename) ) {
    stats = fs.statSync(user_data_filename);
    console.log(`user_data.json has ${stats['size']} characters`);

    var data = fs. readFileSync(user_data_filename, 'utf-8');
    users_reg_data = JSON.parse(data);


app.use(myParser.urlencoded({ extended: true }));

app.all("*", function (request, response, next) {
    console.log(request.session, request.cookies);
    next();
});

app.get("/use_session", function (request, response) {
    console.log('session id is ' + session.id);
    if(typeof session.id != 'undefined') {
        response.send(`Welcome, your session ID is ${session.id}`);
    }
});

app.get("/use_cookie", function (request, response) {
    console.log(request.cookies);
    response.cookie('Welcome to the Use Cookie page ${}', )
});

app.get("/register", function (request, response) {
    // Give a simple register form
    // clicking submit will make a post to register
    // makes a request to self
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit"> 
</form>
</body>
    `;
    response.send(str);
 });

 app.post("/process_register", function (request, response) {
    // process a simple register form
    // validate the reg info

    // if all data is valide, write to the user_data_filename and send to the invoice

     // add an example new user reg info. new addition to object
     username = request.body.username;
     users_reg_data[username] = {};
     users_reg_data[username].password = request.body.password;
     users_reg_data[username].email = request.body.email; // all this data will come from reg_data_form for Assignment 2 (this will not be here in Assignment 2)
 
     // write updated object to user_data_filename
     reg_info_str = JSON.stringify(users_reg_data); // turns users_reg_data into a string because can only write a string to the data file
     fs.writeFileSync(user_data_filename, reg_info_str); // reads noew json data, parsed.
 });


app.get("/login", function (request, response) {
    // Give a simple login form
    if(typeof request.session.lastLogin != 'undefined') {
        lastLogin = request.session.lastLogin;
    } else {
        lastLogin = 'First login!';
    }
    str = `
<body>
<form action="process_login" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });


app.post("/process_login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    response.send(request.body);
});

if(typeof users_reg_data[request.body.username] != 'undefined') {

    if (request.body.password == users_reg_data [request.body.username].password) {
        response.send(`Thank you ${request.body.username} for logging in.`);
        var now = new Date();
    }    else {
        response.send(`Hey! ${request.body.username} does not match what we have for you!`);
    }
} else {
        response.send(`Hey! ${request.body.username} does not exist!`);
    }
    console.log(users_reg_data['itm352']['password']=='xxx');


app.listen(8080, () => console.log(`listening on port 8080`));
}