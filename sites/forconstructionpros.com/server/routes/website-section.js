const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('@ac-business-media/refresh-theme/templates/website-section');
const contactUs = require('@ac-business-media/refresh-theme/templates/website-section/contact-us');
const events = require('@ac-business-media/refresh-theme/templates/website-section/events');
const podcasts = require('@ac-business-media/refresh-theme/templates/website-section/podcasts');
const webinars = require('@ac-business-media/refresh-theme/templates/website-section/webinars');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');

const economics = require('../templates/website-section/economics');
const directory = require('../templates/website-section/directory');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(events)', withWebsiteSection({
    template: events,
    queryFragment,
  }));
  app.get('/:alias(podcasts)', withWebsiteSection({
    template: podcasts,
    queryFragment,
  }));
  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias(economics)', withWebsiteSection({
    template: economics,
    queryFragment,
  }));
  app.get('/:alias(directory)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(directory/[a-z0-9-/]+)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
