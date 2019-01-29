var express = require('express'),
    router = express.Router(),
    Names = require('../models/name')

// Load the router module for names.
router.use('/names',require('./name'));
router.use('/hello',require('./hello'));

var getNames = function(res){
  Names.all(function(err, result){
    var obj = {
      names:result
    }

    console.log(result);

    res.render("insertName",obj);
  });  
}

// Define the home page route.
router.get('/', function(req, res) {
    getNames(res);
})

module.exports = router
