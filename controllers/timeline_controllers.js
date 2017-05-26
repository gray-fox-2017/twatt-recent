const OAuth = require('oauth');
const helper = require('../helper/util.js');

const showTimeline = (req,res) => {

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
  let count = req.body.count;
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    //`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}&count=${count}`,
    '298117495-rwhkUqAwcrOigoSUkcM5cqJiutYBqujCP08Yacpi', //test user token
    'i0BfSb3MnHSmfxzYrulu94eJb24IKud4fdtE8HRveiZVc', //test user secret
    function (err, data, result){
      data = JSON.parse(data);

      let status = data.map((dt)=>dt.created_at+' : \n'+dt.text);
      // console.log(status.join('\n'));
      // res.send(data);
      res.send(err? err :  status.join('\n'));
    });

}


module.exports = {
  showTimeline
}