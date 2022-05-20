const app = require('../../src/app');

describe('\'clicks\' service', () => {
  it('registered the service', () => {
    const service = app.service('clicks');
    expect(service).toBeTruthy();
  });
});
