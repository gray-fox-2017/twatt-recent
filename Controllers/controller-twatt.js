const twatt = require ('../Models/oauth')
require('dotenv').config()

function searchStory (req,res,next){
  twatt.Auth(oauth=>{
    oauth.get(
        'https://api.twitter.com/1.1/search/tweets.json?q=%40story',
        process.env.Access_token, 
        process.env.Access_token_secret,             
        function (e, data){
          if (e) console.error(e);        
          res.send(data)  
        }); 
      })  
    }  

function timeline (req,res,next){
  twatt.Auth(oauth=>{
    oauth.get(
        'https://api.twitter.com/1.1/statuses/user_timeline.json',
        process.env.Access_token, 
        process.env.Access_token_secret,             
        function (e, data){
          if (e) console.error(e);        
           res.send(data)
           //res.send(`On ${data[0].id}\n${data[0].source}`)  
        }); 
      })
    }
           
  module.exports = {
    searchStory,timeline
  }