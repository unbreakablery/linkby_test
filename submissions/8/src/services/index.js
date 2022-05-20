const users = require('./users/users.service.js');
const accounts = require('./accounts/accounts.service.js');
const campaigns = require('./campaigns/campaigns.service.js');
const clicks = require('./clicks/clicks.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(accounts);
  app.configure(campaigns);
  app.configure(clicks);
};
