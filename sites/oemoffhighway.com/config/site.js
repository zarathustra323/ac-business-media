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
      src: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=45',
      srcset: [
        'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=60',
      srcset: [
        'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/OEMOffHighway', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/OEMOffHighway', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/1831755/profile', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCuAwQzKyZOqJolRTNYa0ZyA', target: '_blank' },
  ],
  radix: {
    enabled: true,
    appId: '3415bd29-da4c-463a-8c3f-fce02de88347',
    submissionFieldIds: [
      { name: 'comments', id: '580f6cc935ab46ff40b015b7' },
    ],
  },
  gtm: {
    containerId: 'GTM-KFFMFV4',
  },
  mediaFuse: {
    id: 6063,
  },
  gcse: {
    id: '017383739850048358259:aj4j1qbs7ai',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#ed1c24',
      logo: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=60',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'jsage@acbusinessmedia.com',
    sendFrom: 'OEM Off-Highway <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=60',
    bgColor: '#ed1c24',
  },
};
