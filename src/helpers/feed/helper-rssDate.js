'use strict';

const rssDate = require('./rssDate');

module.exports.register = function(Handlebars, options, params)  {

  Handlebars.registerHelper('rssDate', function(date = Date.now()) {
    return new Handlebars.SafeString(rssDate(date));
  });
};