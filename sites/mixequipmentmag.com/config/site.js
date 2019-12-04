const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Astec Industries, Inc.',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=45',
      srcset: [
        'https://base.imgix.net/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=60',
      srcset: [
        'https://base.imgix.net/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=120 2x',
      ],
    },
  },
  gtm: {
    containerId: '<NOT SET>',
  },
  contactUs: {
    branding: {
      bgColor: '#ec131c',
      logo: 'https://base.imgix.net/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=60',
    },
    to: 'nraether@acbusinessmedia.com',
  },
};
