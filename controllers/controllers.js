'use strict'
require('dotenv').config()
var OAuth = require('oauth');
var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY,
  process.env.APPLICATION_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);

var recentTimeline = (req, res) => {
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json`,
    process.env.TOKEN_KEY, //test user token
    process.env.SECRET_TOKEN, //test user secret
    function (e, data){
      if (e) res.send(e);
      else {
        let arr = []
        JSON.parse(data).forEach((data) => {
          let tweetData = {}
          tweetData.created_at = data.created_at
          tweetData.text = data.text
          tweetData.user_id = data.user.id
          tweetData.user_name = data.user.screen_name
          arr.push(tweetData)
        })
        res.send(arr);
      }
    });
}

module.exports = {
  recentTimeline
}
