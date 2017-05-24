const OAuth = require('oauth');
require('dotenv').config();

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.consumerKey,
  process.env.consumerSecret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

module.exports = {
  search: (datasearch, callback)=>{
    oauth.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+datasearch+'&count=4',
    process.env.accessToken,
    process.env.accessTokenSecret,
    (e, data)=>{
      if(e){
        console.log(e);
      } else {
        callback(data)
      }
    })
  },
  trends: (callback)=>{
    oauth.get(
      'https://api.twitter.com/1.1/trends/user_timeline.json',
      process.env.accessToken,
      process.env.accessTokenSecret,
      (e, data)=>{
        if(e){
          console.log(e);
        } else {
          callback(data);
        }
      }
    )
  }
}
