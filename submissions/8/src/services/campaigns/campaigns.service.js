// Initializes the `campaigns` service on path `/campaigns`
const { Campaigns } = require('./campaigns.class');
const createModel = require('../../models/campaigns.model');
const hooks = require('./campaigns.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/campaigns', new Campaigns(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('campaigns');

  service.hooks(hooks);
};
