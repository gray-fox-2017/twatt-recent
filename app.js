const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
const twatt = require('./routes/api');
//const timeline = require('./routes/api/timeline');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/api/', twatt);
//app.use('/api/timeline', timeline);

app.listen(3000, () => console.log("Listening on port 3000"));
