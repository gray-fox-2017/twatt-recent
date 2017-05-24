var modelsRecent = require('../models/twatt-recent')
require('dotenv').config()

module.exports = {
	timeline : (req, res) => {
	  modelsRecent.getOauth(oauth => {
	    oauth.get(
	      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+req.body.user,
	      process.env.ACCESS_TOKEN, //test user token
	      process.env.TOKEN_SECRET, //test user secret
	      function (e, data){
	        if (e) console.error(e);
	        res.send(data)
	      });
	  })
	}
}