const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const specGuides = require('./spec-guides');

module.exports = {
  gam,
  nativeX,
  navigation,
  specGuides,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/acbm/fcp/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/acbm/fcp/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/ForConstructionPros', target: '_blank' },
    { provider: 'twitter', href: 'https://www.twitter.com/4ConstructnPros', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/forconstructionpros', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/ForConstructionPros', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-PNBSZL4',
  },
  mediaFuse: {
    id: 6060,
  },
  gcse: {
    id: '003355913687346718228:la4zrhjf2r9',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#000',
      logo: 'https://base.imgix.net/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45',
    },
    to: 'support@forconstructionpros.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'jsage@acbusinessmedia.com',
    sendFrom: 'ForConstructionPros.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://base.imgix.net/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45',
    bgColor: '#000',
  },
};
