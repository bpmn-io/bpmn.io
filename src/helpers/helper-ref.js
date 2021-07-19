'use strict';

module.exports.register = function(Handlebars) {

  Handlebars.registerHelper('ref', function(content) {
    return new Handlebars.SafeString(content);
  });
};
