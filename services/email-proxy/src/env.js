const {
  cleanEnv,
  port,
} = require('@base-cms/env');

module.exports = cleanEnv(process.env, {
  EXPOSED_PORT: port({ desc: 'The external port that express is exposed on.', default: 80 }),
  PORT: port({ desc: 'The internal port that express will run on.', default: 80 }),
});
