var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var feeds = require('./routes/feeds');
var cors = require('cors');


var app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(express.static(__dirname + '/dist'));

module.exports = app;
