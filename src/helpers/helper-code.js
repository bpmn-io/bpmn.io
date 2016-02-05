'use strict';

var hjs = require('highlight.js');

function trim(str) {
  return str.replace(/^[\s]+|[\s]+$/g, '');
}


hjs.configure({
  tabReplace: '  ' // 2 spaces
});


module.exports.register = function(Handlebars, options, params)  {

  Handlebars.registerHelper('code', function(lang, options) {
    
    var splitLang,
        formating;
    
    if (typeof lang === 'object') {
      options = lang;
      lang = null;
    }
    
    if (lang) {
      splitLang = lang.split(':');
      
      lang = splitLang.pop();
      formating = splitLang.pop();
    }

    var code = trim(options.fn(this));

    var result;
    
    if (lang) {
      result = hjs.highlight(lang, code);
    } else {
      result = hjs.highlightAuto(code);
    }

    var html = 
      '<code class="hljs language-' + (lang || 'plain') + '">' + 
        result.value +
      '</code>';
    
    if (formating !== 'no-pre') {
      html = '<pre>' + html + '</pre>'; 
    }
    
    return new Handlebars.SafeString(html);
  });
};