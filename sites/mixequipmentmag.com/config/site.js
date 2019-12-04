const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Astec Industries, Inc.',
  logos: {
    navbar: {
      src: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=45',
      srcset: [
        'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=60',
      srcset: [
        'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=120 2x',
      ],
    },
  },
  gtm: {
    containerId: '<NOT SET>',
  },
  contactUs: {
    branding: {
      bgColor: '#ec131c',
      logo: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=60',
    },
    to: 'nraether@acbusinessmedia.com',
  },
};
