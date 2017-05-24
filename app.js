const express = require('express')
const app = express()
var logger = require('morgan');
var OAuth = require('oauth');


const recent = require('./routes/recent');

app.use(logger('dev'));
app.get('/', function(req, res){
  res.send('live!')
})
app.use('/recent', recent)


app.listen(3000, ()=> {
  console.log('server is listening at port 3000')}
)
