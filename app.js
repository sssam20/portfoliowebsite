var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser");

  var  path = require('path')
        var app = express();
  
        mongoose.connect("mongodb://127.0.0.1:27017/portfolio", {   useNewUrlParser: true,
        useUnifiedTopology: true
        })

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(require("express-session")({
//     secret: "Rusty is a dog",
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(express.static( path.join(__dirname, 'PortfolioWebsite')));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,"views\\home"));
});
var port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log("Server Has Started!");
});