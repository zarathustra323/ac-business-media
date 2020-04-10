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
      src: 'https://img.greenindustrypros.com/files/base/acbm/static/GIP_Logo2013_Reverse.png?h=45',
      srcset: [
        'https://img.greenindustrypros.com/files/base/acbm/static/GIP_Logo2013_Reverse.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.greenindustrypros.com/files/base/acbm/static/GIP_Logo2013_Reverse.png?h=60',
      srcset: [
        'https://img.greenindustrypros.com/files/base/acbm/static/GIP_Logo2013_Reverse.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/green-industry-pros/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/greenindpros', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/GreenIndustryPros', target: '_blank' },
  ],
  radix: {
    enabled: true,
    appId: '436dd265-a7ac-4608-8331-d5ea70e65102',
    submissionFieldIds: [
      { name: 'comments', id: '5b99725a81284d4fc4e58233' },
    ],
  },
  gtm: {
    containerId: 'GTM-T2K6NQQ',
  },
  mediaFuse: {
    id: 6062,
  },
  gcse: {
    id: '017383739850048358259:WMX-939532962',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#164f77',
      logo: 'https://img.greenindustrypros.com/files/base/acbm/static/GIP_Logo2013_Reverse.png?h=60',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'jsage@acbusinessmedia.com',
    sendFrom: 'GreenIndustryPros.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.greenindustrypros.com/files/base/acbm/static/GIP_Logo2013_Reverse.png?h=60',
    bgColor: '#164f77',
  },
};
