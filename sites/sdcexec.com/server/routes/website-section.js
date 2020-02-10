const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('@ac-business-media/refresh-theme/templates/website-section');
const awards = require('@ac-business-media/refresh-theme/templates/website-section/awards');
const contactUs = require('@ac-business-media/refresh-theme/templates/website-section/contact-us');
const events = require('@ac-business-media/refresh-theme/templates/website-section/events');
const feed = require('@ac-business-media/refresh-theme/templates/website-section/feed');
const podcasts = require('@ac-business-media/refresh-theme/templates/website-section/podcasts');
const webinars = require('@ac-business-media/refresh-theme/templates/website-section/webinars');
const whitepapers = require('@ac-business-media/refresh-theme/templates/website-section/whitepapers');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(awards)', withWebsiteSection({
    template: awards,
    queryFragment,
  }));
  app.get('/:alias(blogs)', withWebsiteSection({
    template: feed,
    queryFragment,
    context: ({ section: s }) => ({
      query: {
        name: 'website-optioned-content',
        params: { sectionId: s.id, optionName: 'Pinned', limit: 12 },
      },
    }),
  }));
  app.get('/:alias(case-studies)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias(events)', withWebsiteSection({
    template: events,
    queryFragment,
  }));
  app.get('/:alias(podcast)', withWebsiteSection({
    template: podcasts,
    queryFragment,
  }));
  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias(sponsored-research)', withWebsiteSection({
    template: whitepapers,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
