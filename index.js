var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("hi i am faraz")
});
const port = process.env.PORT || 5000;

