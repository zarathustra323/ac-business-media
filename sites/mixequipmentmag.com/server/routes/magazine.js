const { withMagazineIssue, withMagazinePublication } = require('@base-cms/marko-web/middleware');
const publication = require('../templates/magazine/publication');
const publicationFragment = require('../graphql/fragments/magazine-publication-page');
const issue = require('../templates/magazine/issue');
const issueFragment = require('../graphql/fragments/magazine-issue-page');

module.exports = (app) => {
  app.get('/magazine', (req, res) => {
    // Force redirect to publication archive page.
    res.redirect(301, '/magazine/5dea77962231ca27128b45f9');
  });

  app.get('/magazine/:id([a-fA-F0-9]{24})', withMagazinePublication({
    template: publication,
    queryFragment: publicationFragment,
  }));

  app.get('/magazine/:id(\\d+)', withMagazineIssue({
    template: issue,
    queryFragment: issueFragment,
  }));
};
