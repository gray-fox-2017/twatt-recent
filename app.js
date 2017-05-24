var express = require('express');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

app.use('/', index);

app.listen (3000, ()=>{
  console.log('app run on port 3000')
})

module.express = app;
