const fetch = require('node-fetch');
const httpError = require('../utils/http-error');
const asyncRoute = require('../utils/async-route');
const pkg = require('../../package.json');

module.exports = () => asyncRoute(async (req, res) => {
  const {
    protocol = 'https',
    host,
    alias,
    day,
  } = req.query;
  if (!host || !alias) throw httpError(400, 'The host and alias parameters are required.');

  let url = `${protocol}://${host}/${alias}`;
  if (day) url = `${url}/${day}`; // @todo moment format this.
  const response = await fetch(url, {
    headers: { 'user-agent': `${pkg.name}/${pkg.version}` },
  });
  const html = await response.text();
  res.status(response.status).send(html);
});
