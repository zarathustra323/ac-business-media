const webinars = require('@ac-business-media/refresh-theme/templates/published-content/webinars');
const podcasts = require('@ac-business-media/refresh-theme/templates/published-content/podcasts');
const whitepapers = require('@ac-business-media/refresh-theme/templates/published-content/whitepapers');
const blogs = require('@ac-business-media/refresh-theme/templates/published-content/blogs');

module.exports = (app) => {
  app.get('/blogs', (_, res) => { res.marko(blogs); });
  app.get('/webinars', (_, res) => { res.marko(webinars); });
  // note: the `/podcast` route is intentional
  app.get('/podcast', (_, res) => { res.marko(podcasts); });
  app.get('/sponsored-research', (_, res) => { res.marko(whitepapers, { title: 'Sponsored Research' }); });
};
