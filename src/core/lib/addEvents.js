var sendEvents = require("../utils/sendEvents");

module.exports = function(payload, callback) {
  sendEvents.apply(this, arguments);
};