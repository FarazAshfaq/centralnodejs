var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("hi i am faraz")
});

app.get("/about", (req, res) => {
    res.send("hi tell me something")
});


const port = process.env.PORT || 5000;