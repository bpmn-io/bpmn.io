'use strict';

module.exports.register = function(Handlebars, options, params)  {

  Handlebars.registerHelper('isActive', function(pattern, page, options) {
  
    var dirname = page.dirname;
    
    var active = new RegExp(pattern).test(dirname);

    return new Handlebars.SafeString(active ? 'active' : '');
  });
};