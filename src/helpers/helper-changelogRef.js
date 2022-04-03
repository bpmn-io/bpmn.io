'use strict';

module.exports.register = function(Handlebars, options, params)  {

  Handlebars.registerHelper('changelogRef', function(toolkit) {

    const {
      version,
      changelog
    } = toolkit;

    const url = `${changelog}#${version.replace(/[v.]+/g, '')}`;

    return new Handlebars.SafeString(url);
  });
};