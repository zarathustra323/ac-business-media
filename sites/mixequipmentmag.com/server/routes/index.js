const contactUsHandler = require('@ac-business-media/package-common/contact-us');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Handle contact is submissions on /__contact-us
  // @todo This should be removed once contact-us is moved to core.
  contactUsHandler(app);

  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Website Sections
  websiteSections(app);
};
