const moment = require('moment');

module.exports = function(date) {
  return moment(date).format('ddd, DD MMM YYYY HH:mm:ss ZZ');
};