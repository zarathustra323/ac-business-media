const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/acbm/gip/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/acbm/gip/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/acbm/gip/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/acbm/gip/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/3916625/profile', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/greenindpros', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/GreenIndustryPros', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-T2K6NQQ',
  },
  wufoo: {
    userName: '<NOT SET>',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#164f77',
      logo: 'https://base.imgix.net/files/base/acbm/gip/image/static/logo/site_logo.png?h=60',
    },
    to: 'nraether@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'nraether@acbusinessmedia.com',
    sendFrom: 'GreenIndustryPros.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://base.imgix.net/files/base/acbm/gip/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
