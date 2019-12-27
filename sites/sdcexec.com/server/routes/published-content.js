const webinars = require('@ac-business-media/refresh-theme/templates/published-content/webinars');

module.exports = (app) => {
  app.get('/webinars', (_, res) => { res.marko(webinars); });
};
