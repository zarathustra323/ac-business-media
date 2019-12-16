const content = require('./content');
const home = require('./home');
const magazine = require('./magazine');
const search = require('./search');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Magazine Pages
  magazine(app);

  // Content Pages
  content(app);

  // Search
  search(app);

  // Website Sections
  websiteSections(app);
};
