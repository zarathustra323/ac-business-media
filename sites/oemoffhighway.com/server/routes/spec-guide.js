const index = require('@ac-business-media/refresh-theme/templates/spec-guide');

module.exports = (app) => {
  app.get('/specguide/:alias(engine)', (req, res) => {
    res.marko(index, {
      alias: req.params.alias,
      title: 'Engine Spec Guide',
    });
  });
};
