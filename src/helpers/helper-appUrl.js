'use strict';

module.exports.register = function(Handlebars, options, params)  {

  Handlebars.registerHelper('appUrl', function(url, page) {

    if (typeof url !== 'string') {
      return this.app.base_url;
    }

    if (!/^https?:\/\//.test(url)) {
      const base = this.app.base_url;

      url = base + '/' + url;
    }

    return new Handlebars.SafeString(url);
  });
};