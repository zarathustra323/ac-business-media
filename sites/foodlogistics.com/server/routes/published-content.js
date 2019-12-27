const webinars = require('@ac-business-media/refresh-theme/templates/published-content/webinars');
const podcasts = require('@ac-business-media/refresh-theme/templates/published-content/podcasts');
const blogs = require('@ac-business-media/refresh-theme/templates/published-content/blogs');
const events = require('@ac-business-media/refresh-theme/templates/published-content/events');

module.exports = (app) => {
  app.get('/blogs', (_, res) => { res.marko(blogs); });
  app.get('/events', (_, res) => { res.marko(events); });
  app.get('/webinars', (_, res) => { res.marko(webinars); });
  app.get('/podcasts', (_, res) => { res.marko(podcasts); });
};
