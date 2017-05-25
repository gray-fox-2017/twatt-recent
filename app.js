const express = require('express');
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var timeline = require('./routes/timeline')

app.use('/timeline', timeline)

app.listen(3000)