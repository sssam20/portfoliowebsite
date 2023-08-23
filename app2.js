// App.js
  

var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser");

  var  path = require('path')
        var app = express();
  
        mongoose.connect("mongodb://127.0.0.1:27017/portfolio", {   useNewUrlParser: true,
        useUnifiedTopology: true
        })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));
app.use(express.static( path.join(__dirname, 'views')));
app.use(express.static( path.join(__dirname, 'images')));

//=====================
// ROUTES
//=====================
  
// Showing home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,"home"));
});
  
// Showing secret page
app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname,"about"));
});
  
// Showing register form
app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname,"contact"));
});
app.get("/projects", function (req, res) {
    res.sendFile(path.join(__dirname,"projects"));
});
  

  
var port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log("Server Has Started!");
});