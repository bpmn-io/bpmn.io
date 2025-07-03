'use strict';

const moment = require('moment');

module.exports.register = function(Handlebars)  {

  Handlebars.registerHelper('year', function() {
    return moment(Date.now()).format('YYYY');
  });
};
