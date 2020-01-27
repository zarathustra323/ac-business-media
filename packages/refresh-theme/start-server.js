const newrelic = require('newrelic');
const { startServer } = require('@base-cms/marko-web');
const { set, get, getAsObject } = require('@base-cms/object-path');
const cleanResponse = require('@base-cms/marko-core/middleware/clean-marko-response');
const contactUsHandler = require('@ac-business-media/package-common/contact-us');
const loadInquiry = require('@ac-business-media/package-inquiry/load-from-config');
const sharedRedirectHandler = require('./redirect-handler');

const buildGAMConfig = require('./gam/build-config');
const buildNativeXConfig = require('./native-x/build-config');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');

const routes = siteRoutes => (app) => {
  // Handle submissions on /__inquiry
  loadInquiry(app);
  // Handle contact submissions on /__contact-us
  contactUsHandler(app);
  // Load site routes.
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart, redirectHandler } = options;
  const gamConfig = get(options, 'siteConfig.gam');
  const nativeXConfig = getAsObject(options, 'siteConfig.nativeX');
  return startServer({
    ...options,
    routes: routes(options.routes),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');
      // Setup GAM.
      if (gamConfig) {
        set(app.locals, 'GAM', buildGAMConfig(gamConfig));
      }
      // Setup NativeX.
      set(app.locals, 'nativeX', buildNativeXConfig(nativeXConfig));
      // Force set all date formats.
      app.use((req, res, next) => {
        set(app.locals, 'markoCoreDate.format', 'MMMM D, YYYY');
        next();
      });
      // Clean all response bodies.
      app.use(cleanResponse());
    },
    redirectHandler: async (redirectOps) => {
      if (typeof redirectHandler === 'function') {
        const result = await redirectHandler(redirectOps);
        if (result) return result;
      }
      return sharedRedirectHandler(redirectOps);
    },
    onAsyncBlockError: e => newrelic.noticeError(e),
  });
};
