const navigation = require('./navigation');
const gam = require('./gam');

module.exports = {
  gam,
  navigation,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.foodlogistics.com/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=45',
      srcset: [
        'https://img.foodlogistics.com/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.foodlogistics.com/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=60',
      srcset: [
        'https://img.foodlogistics.com/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/FoodLogistics', target: '_blank' },
    { provider: 'twitter', href: 'https://www.twitter.com/FoodLogistics', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/food-logistics-magazine/', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-MQ68SRH',
  },
  gcse: {
    id: '017383739850048358259:-mlkn4aclei',
  },
  wufoo: {
    userName: '<NOT SET>',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#1a93f9',
      logo: 'https://img.foodlogistics.com/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=60',
    },
    to: 'nraether@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'nraether@acbusinessmedia.com',
    sendFrom: 'Food Logistics <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.foodlogistics.com/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=60',
    bgColor: '#1a93f9',
  },
};
