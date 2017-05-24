const OAuth = require('oauth');
require('dotenv').config();

function index(req, res) {
  res.send('Welcome to the Twitter API');
}

function search(req, res) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY, //consumer key
      process.env.APPLICATION_SECRET, //application secret
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=hacktiv8&src=typd',
      process.env.USER_TOKEN, //user token
      process.env.USER_SECRET, //user secret
    function (e, data) {
      let result = [];
      data = JSON.parse(data);
      if (e) console.error(e);
      data.statuses.forEach(element => {
        result.push(element.user.name);
        result.push(element.text);
      });
      console.log(result);
      res.send(result);
    });
}

module.exports = {
  index, search
}
