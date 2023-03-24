var express = require('express');
var app = express(); 
var port =process.env.PORT || 8080; 
var routes = require('../routes');
routes(app); 
app.listen(port,function(){ console.log('Server started on port: ' + port); });