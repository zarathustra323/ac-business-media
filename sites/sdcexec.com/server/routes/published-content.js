const webinars = require('@ac-business-media/refresh-theme/templates/published-content/webinars');
const podcasts = require('@ac-business-media/refresh-theme/templates/published-content/podcasts');

module.exports = (app) => {
  app.get('/webinars', (_, res) => { res.marko(webinars); });
  // note: the `/podcast` route is intentional
  app.get('/podcast', (_, res) => { res.marko(podcasts); });
};
