'use strict';

const rssDate = require('./rssDate');

module.exports.register = function(Handlebars, options, params)  {

  var CONTINUE = '<!-- continue -->';

  function parseAuthor(author) {
    return (!Array.isArray(author) ? [ author ] : author).map(author => author.split(/\s?</)[0]).join(', ');
  }

  function parseDescription(content) {
    const splitIdx = content.indexOf(CONTINUE);

    if (splitIdx !== -1) {
      content = content.substring(0, splitIdx);
    }

    return content.split(/\n\n/)[0];
  }

  Handlebars.registerHelper('rssPost', function(options) {

    const {
      title,
      author,
      releases = [],
      description,
      published,
      slug,
      content,
      knownHelpers,
      app: {
        base_url
      }
    } = options.data;

    return new Handlebars.SafeString(`
      <item>
        <title><![CDATA[${ title }]]></title>
        <dc:creator><![CDATA[${ parseAuthor(author) }]]></dc:creator>
        <description><![CDATA[${ description || parseDescription(content) }]]></description>
        <link>${ base_url }/blog/posts/${ slug }.html</link>
        <pubDate>${ rssDate(published) }</pubDate>
        <guid isPermaLink="false">${ base_url }/blog/posts/${ slug }.html</guid>
      </item>
    `);
  });

};