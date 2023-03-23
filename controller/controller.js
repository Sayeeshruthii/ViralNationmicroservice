'use strict';

var properties = require('../package.json');
var controllers = { 
  aboutme: function(req,res){ 
      var aboutInfo = { name:properties.author, description: properties.description }
      res.json(aboutInfo); 
  }, 
 
};

module.exports = controllers;