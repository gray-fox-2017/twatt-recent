describe('OAuth1.0',function(){
var OAuth = require('oauth');

it('tests home_timeline Twitter API v1.1',function(done){
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'w1pFHbFKtnKQIxsL7RIElRBYW',
    'tFPSMXDtdiTOJrTLUEoZb5HckhwrHVG0geIlJHWVZRpUefkExd',
    '1.0',
    null,
    'HMAC-SHA1'
  )

  //let username = helper.fixedEncodeURIComponent(req.body.username);
  let count = 5;//req.body.count;
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    '298117495-rwhkUqAwcrOigoSUkcM5cqJiutYBqujCP08Yacpi', //test user token
    'i0BfSb3MnHSmfxzYrulu94eJb24IKud4fdtE8HRveiZVc', //test user secret
    function (err, data, result){
      data = JSON.parse(data);
      let status = data.map((dt)=>dt.created_at+' : \n'+dt.text);
      // console.log(status.join('\n'));
      done();
      // res.send(err? err :  status.join('\n'))
    });
});
});
