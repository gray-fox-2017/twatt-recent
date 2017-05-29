const dotenvConfig = require('dotenv').config();
describe('OAuth1.0',function(){
  var OAuth = require('oauth');

  it('tests home timeline Twitter API v1.1',function(done){
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.consumer_key,
      process.env.consumer_secret,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.access_token, //test user token
      process.env.access_token_secret, //test user secret
      function (e, data, res){
        if (e) console.error(e);
        console.log(require('util').inspect(data));
        done();
      });
  });
});
