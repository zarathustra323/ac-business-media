const asphaltPaver = require('./asphalt-paver');
const backhoeLoader = require('./backhoe-loader');
const excavator = require('./excavator');
const roller = require('./roller');
const skidSteer = require('./skid-steer');

module.exports = {
  rootPath: '/specguide',
  title: 'For Construction Pros Spec Guides',
  description: '<em>ForConstructionPros.com</em> Spec Guides are essential industry tools to help you make the right choices when purchasing or renting heavy construction equipment. Use the industry’s first and only completely interactive component specifiers custom built <strong>for construction equipment owners and end users.</strong>',
  guides: {
    asphaltPaver,
    backhoeLoader,
    excavator,
    roller,
    skidSteer,
  },
};
