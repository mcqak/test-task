"use strict";
exports.__esModule = true;
var express = require('express');
var cors = require('cors');
var parser = require('body-parser');
var app = express();
app.use(parser.json());
app.use(cors());
app.post("/calculate", function (req, res) {
    var numberX = req.body.numberX;
    var numberY = req.body.numberY;
    console.log(req.body.numberX);
    var calc = numberX + numberY;
    res.json({ calc: calc });
});
app.listen(8000, function () {
    console.log('server running at port 8000');
});
