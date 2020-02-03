const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('@ac-business-media/refresh-theme/templates/website-section');
const contactUs = require('@ac-business-media/refresh-theme/templates/website-section/contact-us');
const events = require('@ac-business-media/refresh-theme/templates/website-section/events');
const webinars = require('@ac-business-media/refresh-theme/templates/website-section/webinars');
const whitepapers = require('@ac-business-media/refresh-theme/templates/website-section/whitepapers');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');

const equipmentMarketOutlook = require('../templates/website-section/market-analysis/equipment-market-outlook');

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
  app.get('/:alias(media-center/whitepapers-ebooks)', withWebsiteSection({
    template: whitepapers,
    queryFragment,
  }));
  app.get('/:alias(market-analysis/equipment-market-outlook)', withWebsiteSection({
    template: equipmentMarketOutlook,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
