const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21772951814', { basePath: 'Green-Industry-Pros' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('CONTENT', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'GIP_BS' },
    { name: 'lb2', templateName: 'LB', path: 'GIP_BS' },
    { name: 'rail1', templateName: 'CONTENT', path: 'GIP_MR' },
    { name: 'rail2', templateName: 'CONTENT', path: 'GIP_MR' },
    { name: 'load-more', templateName: 'CONTENT', path: 'GIP_HP' },
    { name: 'reskin', path: 'GIP_Reskin' },
    { name: 'wa', path: 'GIP_WA' },
  ]);

module.exports = config;
