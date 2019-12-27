const webinars = require('@ac-business-media/refresh-theme/templates/published-content/webinars');
const podcasts = require('@ac-business-media/refresh-theme/templates/published-content/podcasts');
const whitepapers = require('@ac-business-media/refresh-theme/templates/published-content/whitepapers');

module.exports = (app) => {
  app.get('/webinars', (_, res) => { res.marko(webinars); });
  // note: the `/podcast` route is intentional
  app.get('/podcast', (_, res) => { res.marko(podcasts); });
  app.get('/sponsored-research', (_, res) => { res.marko(whitepapers, { title: 'Sponsored Research' }); });
};
