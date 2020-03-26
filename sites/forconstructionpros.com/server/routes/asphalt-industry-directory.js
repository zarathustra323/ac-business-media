const template = require('../templates/asphalt-industry-directory');

module.exports = (app) => {
  app.get('/asphalt-industry-directory', (_, res) => { res.marko(template); });
};
