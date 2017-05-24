const model = require('../models/twats');

module.exports = {
  search: (req, res, next)=>{
    let username = req.params.search
    model.search(username, (data)=>{
      res.send(data);
    })
  },
  trend: (req, res, next)=>{
    model.trends((data)=>{
      res.send(data);
    })
  }
}
