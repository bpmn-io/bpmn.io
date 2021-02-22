module.exports.register = function(Handlebars, options, params)  {

  var PATTERN = /^(.+)\s*<(.+)>$/;

  Handlebars.registerHelper('author', function(author, options) {
    if (!Array.isArray(author)) {
      author = [ author ];
    };

    const html = author.map(author => {
      var match = PATTERN.exec(author);
      if (match) {
        return '<a class="author" href="' + match[2] + '">' + match[1].trim() + '</a>';
      } else {
        return '<span class="author">' + author.trim() + '</span>';
      }
    }).join(', ');

    return new Handlebars.SafeString(html);
  });
};