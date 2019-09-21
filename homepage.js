//############### express
var express = require("express");
var app = express();
//###############

app.use(express.static("Style"));


//############### bodyparser
var bodyParser = require("body-parser");
//###############

app.set("view engine", "ejs");


app.get("/", function (req, res) {
    res.render("\homepage");
});

app.get("/expenses", function (req, res) {
    res.render("outputpage");
});

app.listen(3000, function () {
});