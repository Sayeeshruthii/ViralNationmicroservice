'use strict';

var controller = require('./controller/controller');

module.exports = function(app) {

   app.route('/aboutme')

       .get(controller.aboutme);

};

