const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.laserfocusworld.com/files/base/pennwell/lfw/logo.png?h=45',
      srcset: [
        'https://img.laserfocusworld.com/files/base/pennwell/lfw/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.laserfocusworld.com/files/base/pennwell/lfw/logo.png?h=60',
      srcset: [
        'https://img.laserfocusworld.com/files/base/pennwell/lfw/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/2896249/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/LaserFocusWorld', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/pages/Laser-Focus-World/126899915297', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-MFCT2LV',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#164f77',
      logo: 'https://img.laserfocusworld.com/files/base/pennwell/lfw/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'juliac@pennwell.com',
    sendFrom: 'LaserFocusWorld.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.laserfocusworld.com/files/base/pennwell/lfw/logo.png?h=60',
    bgColor: '#164f77',
  },
};
