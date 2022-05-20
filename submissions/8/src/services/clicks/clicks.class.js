const { Service } = require('feathers-knex');

exports.Clicks = class Clicks extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'clicks'
    });
  }
};
