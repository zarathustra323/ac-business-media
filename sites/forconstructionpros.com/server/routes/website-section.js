const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('@ac-business-media/refresh-theme/templates/website-section');
const contactUs = require('@ac-business-media/refresh-theme/templates/website-section/contact-us');
const events = require('@ac-business-media/refresh-theme/templates/website-section/events');
const feed = require('@ac-business-media/refresh-theme/templates/website-section/feed');
const mediaGalleries = require('@ac-business-media/refresh-theme/templates/website-section/media-galleries');
const webinars = require('@ac-business-media/refresh-theme/templates/website-section/webinars');
const whitepapers = require('@ac-business-media/refresh-theme/templates/website-section/whitepapers');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');

const mediaCenter = require('../templates/website-section/media-center');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(events)', withWebsiteSection({
    template: events,
    queryFragment,
  }));
  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias(media-center)', withWebsiteSection({
    template: mediaCenter,
    queryFragment,
  }));
  app.get('/:alias(media-center/photo-galleries)', withWebsiteSection({
    template: mediaGalleries,
    queryFragment,
  }));
  app.get('/:alias(media-center/whitepapers-ebooks)', withWebsiteSection({
    template: whitepapers,
    queryFragment,
  }));
  app.get('/:alias(media-center/videos/industry-videos)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias(media-center/videos/technology-news-tracker)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
