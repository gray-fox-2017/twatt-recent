let twatt = require('../models/twatt')
methods = {}
require('dotenv').config()

methods.recentTwatt = (req, res) => {
  twatt.getOauth(oauth => {
    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?%40jakarta=twitterapi&count=2',
      process.env.TOKEN, //test user token
      process.env.TOKEN_SECRET, //test user secret
      function (e, data){
        if (e) console.error(e);
        res.send(data)
      });
  })
}

module.exports = methods