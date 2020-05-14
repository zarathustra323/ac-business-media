const extractUrls = require('./extract-urls');
const processContentLinks = require('./process-content-links');
const processEmailxAds = require('./process-emailx-ads');

module.exports = async ({ html, tenantKey }) => {
  const urls = extractUrls(html);

  const withContentComments = await processContentLinks({ html, tenantKey, urls });
  const withAdComments = await processEmailxAds({ html: withContentComments, urls });
  return withAdComments;
};
