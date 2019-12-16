const home = require('./home');
const search = require('./search');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Search
  search(app);

  // Website Sections
  websiteSections(app);
};
