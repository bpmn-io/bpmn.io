'use strict';

module.exports.register = function(Handlebars, options, params)  {

  function addScript(page, script) {
    if (!page.scripts) {
      page.scripts = [];
    }

    page.scripts.push(script);
  }

  function getScripts(page) {
    return page.scripts || [];
  }

  Handlebars.registerHelper('script', function(options) {
    addScript(this.page, options.fn(this));
    return '';
  });

  Handlebars.registerHelper('scripts', function() {

    var result = '';

    getScripts(this.page).forEach(function(e) {
      result += e;
    });

    return new Handlebars.SafeString(result);
  });
};