var express = require("express");

var fs = require("fs");

var app = express();
var PORT = 8080;

app.get("/", function(req, res) {
  res.send("Welcome to the Page!");
  var http = fs.readFileSync("./reservation.html")
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});