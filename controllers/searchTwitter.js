const OAuth = require('oauth');
const dotenvConfig = require('dotenv').config();

const fixedEncodeURIComponent = ((str) => {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
});

const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.consumer_key,
  process.env.consumer_secret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

let search = ((req,res) => {
  let query = fixedEncodeURIComponent(req.body.search);
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${query}`,
    process.env.access_token, //test user token
    process.env.access_token_secret, //test user secret
    (err, data) => {
      let statusText = [];
      data = JSON.parse(data);
      data.statuses.forEach(status => {
        statusText.push(status.text);
      });
      res.send(err ? err : statusText);
    });
});

let userTimeline = ((req,res) => {
  let query = req.body.username;
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${query}`,
    process.env.access_token,
    process.env.access_token_secret,
    (err,data) => {
      let statusText = [];
      data = JSON.parse(data);
      data.forEach(datum => {
        statusText.push(datum.text);
      });
      res.send(statusText);
    });
});

module.exports = {
  search,
  userTimeline
};
