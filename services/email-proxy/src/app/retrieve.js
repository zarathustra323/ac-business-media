const fetch = require('node-fetch');
const moment = require('moment');
const pretty = require('pretty');
const httpError = require('../utils/http-error');
const asyncRoute = require('../utils/async-route');
const pkg = require('../../package.json');
const processOmedaLinks = require('../hooks/process-omeda-links');

module.exports = () => asyncRoute(async (req, res) => {
  const {
    protocol = 'https',
    host,
    alias,
    day,
    tenantKey,
  } = req.query;
  if (!host || !alias) throw httpError(400, 'The `host` and `alias` parameters are required.');
  if (!tenantKey) throw httpError(400, 'The `tenantKey` parameter is required.');

  let url = `${protocol}://${host}/${alias}`;
  if (day) {
    const date = moment(day);
    if (!date.isValid()) throw httpError(400, `The day value of ${day} is invalid.`);
    url = `${url}/${date.format('YYYY/MM/DD')}`;
  }
  const response = await fetch(url, {
    headers: { 'user-agent': `${pkg.name}/${pkg.version}` },
  });
  const html = await response.text();
  const out = await processOmedaLinks({
    html: Object.hasOwnProperty.call(req.query, 'pretty') ? pretty(html, { ocd: true }) : html,
    tenantKey,
  });
  res.status(response.status).send(out);
});
