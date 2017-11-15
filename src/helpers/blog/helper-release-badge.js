module.exports.register = function(Handlebars, options, params)  {

  var PATTERN = /^(.+)@(.+)$/;

  Handlebars.registerHelper('releaseBadge', function(release, options) {
    var result;

    var match = PATTERN.exec(release);

    if (match) {
      result =
        '<a class="release-badge with-version" href="https://github.com/bpmn-io/' + match[1] + '/releases/tag/v' + match[2] + '">' +
          '<span class="project">' + match[1] + '</span>' +
          '<span class="version">' + match[2] + '</span>' +
        '</a>';
    } else {
      result =
        '<a class="release-badge" href="https://github.com/bpmn-io/' + release + '">' +
          '<span class="project">' +
            release +
          '</span>' +
        '</a>';
    }

    return new Handlebars.SafeString(result);
  });
};