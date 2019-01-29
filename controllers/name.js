var express = require('express'),
router = express.Router(),
Name = require('../models/name')

router.post('/', function(req, res) {
  var name = req.body.name

  Name.create(name, function(err, myName) {
    if (err) {res.send(err)}
      res.redirect('/')
  })
})

router.delete('/:id',function(req,res){
  Name.delete(req.params.id, function(err, myName){
    if(err) {res.send(err)}
    res.send("success");
  });
})

module.exports = router