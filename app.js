var express = require('express')
var bodyParser = require('body-parser')

var twitter = require('./routes/twitter')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use('/api', twitter)

app.listen(3000, ()=>{
	console.log('Your connected to port 3000')
})