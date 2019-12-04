const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('../templates/content');
const contact = require('../templates/content/contact');
const queryFragment = require('../graphql/fragments/content-page');

module.exports = (app) => {
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
