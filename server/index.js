var express = require('express');
let cors = require("cors");

var app = express(); 
var port =process.env.PORT || 8080; 
app.use(cors());
var routes = require('../routes');
routes(app); 
app.listen(port,function(){ console.log('Server started on port: ' + port); });