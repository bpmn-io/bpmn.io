module.exports.register = function(Handlebars, options, params)  {

  var CONTINUE = '<!-- continue -->';

  Handlebars.registerHelper('exerpt', function(url, options) {
    var result = options.fn(this);

    var splitIdx = result.indexOf(CONTINUE);
    if (splitIdx !== -1) {
      result = result.substring(0, splitIdx);

      result += '<p class="read-more"><a href="posts/' + url + '.html">Read more »</a></p>';
    }

    return new Handlebars.SafeString(result);
  });
};