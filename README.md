# Twatt Recent
API practice app to get home and user twitter timeline using respective user screen name. This app is using two GET API from twitter to gather user's home and timeline.

## Routes
List of routes for books:

Route | HTTP | Description
------|------|------------
/timeline | GET | Get home timeline for my own twitter account (@hakiemaul)
/timeline/user/:username | GET | Get username's user timeline


## List of collected data
This app will send JSON based data containing username, tweet's content, and posting date.