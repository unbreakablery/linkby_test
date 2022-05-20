const { Service } = require('feathers-knex');

exports.Campaigns = class Campaigns extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'campaigns'
    });
  }
};
