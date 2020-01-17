const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');

module.exports = {
  gam,
  nativeX,
  navigation,
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
    { provider: 'facebook', href: 'http://www.facebook.com/sdcexec', target: '_blank' },
    { provider: 'twitter', href: 'http://www.twitter.com/sdcexec', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/supply-demand-chain-executive/', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-KK6K97N',
  },
  gcse: {
    id: '017383739850048358259:xbexltkrwbk',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#ec131c',
      logo: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=60',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'jsage@acbusinessmedia.com',
    sendFrom: 'Supply & Demand Chain Executive <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=60',
    bgColor: '#ec131c',
  },
};
