let twatt = require('../models/twatt')
methods = {}
require('dotenv').config()

methods.recentTwatt = (req, res) => {
  twatt.getOauth(oauth => {
    oauth.get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?${encodeURIComponent(req.body.akun)}=twitterapi&count=${encodeURIComponent(req.body.count)}`,
      process.env.TOKEN, //test user token
      process.env.TOKEN_SECRET, //test user secret
      function (e, data){
        if (e) console.error(e);
        let dataParse = JSON.parse(data)
        console.log(dataParse);
        let tempData = []
        dataParse.forEach(record => {
          let newData = {
            created_at: record.created_at,
            text: record.text,
            user: record.user.name,
            retweet_count: record.retweet_count,
            language: record.lang
          }
          tempData.push(newData)
        })
        res.send(tempData)
        res.send(data)
      });
  })
}

module.exports = methods