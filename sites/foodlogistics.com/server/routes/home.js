const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const home = require('@ac-business-media/vivify-shared/templates/index');
const queryFragment = require('@ac-business-media/vivify-shared/graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
