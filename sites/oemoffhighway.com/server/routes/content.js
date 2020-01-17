const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('@ac-business-media/refresh-theme/templates/content');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/content-page');

module.exports = (app) => {
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
