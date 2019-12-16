const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('@ac-business-media/refresh-theme/templates/website-section');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
