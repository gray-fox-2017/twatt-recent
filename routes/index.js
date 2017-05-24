var express = require('express');
var router = express.Router();
require('dotenv').config()


/* GET home page. */
var OAuth = require('oauth');

router.get('/search/:q', function(req, res) {
  //res.send('Hello World!')
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.consumerkey,
    process.env.consumersecret,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.q}`,//&lang=id&count=5', //puppy filter:twimg
      process.env.token, //test user token
      process.env.tokensecret, //test user secret
      function (e, data){
        if (e) console.error(e);
        // res.send(JSON.parse(data).statuses);

        var result = []

        var statuses = JSON.parse(data).statuses
        statuses.forEach((value) => {
          var obj = {}
          //obj.value.user.screen_name,
          obj.name = value.user.screen_name,
          obj.text = value.text
          result.push(obj)
          // result.push(value.text)
          // result.push(value.text)
        })
        res.send(result)
        // var text = JSON.parse(statuses).text
        // res.send(JSON.parse(text))
        // console.log(data.text);
        //console.log(require('util').inspect(data.split(',')));

        // var tamp = data.split(',')
        // res.send(tamp)
        //var tamp2 = tamp.replace(/[id]/,'')
        // res.send(tamp2)
        // tamp.forEach((value) => {
        //   res.send(value)
        // })
        // var tamp = data.split(' , ')
        // res.send(data.split(','))
      });
})


router.get('/timeline', function(req, res) {
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.consumerkey,
    process.env.consumersecret,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
    oauth.get(`https://api.twitter.com/1.1/statuses/user_timeline.json`,//&lang=id&count=5', //puppy filter:twimg
      process.env.token, //test user token
      process.env.tokensecret, //test user secret
      function (e, data){
        if (e) console.error(e);
        res.send(JSON.parse(data))
      });
})


module.exports = router;
