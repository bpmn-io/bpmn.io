module.exports.register = function(Handlebars, options, params)  {
  
  var PATTERN = /^(.+)\s*<(.+)>$/;

  Handlebars.registerHelper('author', function(author, options) {
    var result;

    var match = PATTERN.exec(author);
    if (match) {
      result = '<a class="author" href="' + match[2] + '">' + match[1] + '</a>';
    } else {
      result = '<span class="author">' + author + '</a>';
    }

    return new Handlebars.SafeString(result);
  });
};