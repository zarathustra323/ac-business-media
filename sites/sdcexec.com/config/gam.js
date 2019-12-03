const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21772951814', { basePath: 'SDCExec' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('LB2', {
    size: [[320, 50], [300, 50]],
    sizeMapping: [
      { viewport: [576, 0], size: [] },
      { viewport: [320, 0], size: [[300, 50], [320, 50]] },
    ],
  })
  .setTemplate('CONTENT', { size: [[300, 250], [300, 600]] })
  .setTemplate('INFINITE-RAIL', {
    size: [[300, 250], [300, 600]],
    sizeMapping: [
      { viewport: [992, 0], size: [[300, 250], [300, 600]] },
      { viewport: [0, 0], size: [] },
    ],
  })
  .setTemplate('INFINITE-INTERSTITIAL', {
    size: [[300, 250], [300, 600]],
    sizeMapping: [
      { viewport: [992, 0], size: [] },
      { viewport: [300, 0], size: [[300, 250], [300, 600]] },
    ],
  });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'SDC_BS' },
    { name: 'lb2', templateName: 'LB2', path: 'SDC_BS' },
    { name: 'rail1', templateName: 'CONTENT', path: 'SDC_MR' },
    { name: 'rail2', templateName: 'CONTENT', path: 'SDC_MR' },
    { name: 'infinite-rail', templateName: 'INFINITE-RAIL', path: 'SDC_MR' },
    { name: 'infinite-interstitial', templateName: 'INFINITE-INTERSTITIAL', path: 'SDC_MR' },
    { name: 'load-more', templateName: 'CONTENT', path: 'SDC_HP' },
    { name: 'reskin', path: 'SDC_Reskin' },
    { name: 'wa', path: 'SDC_WA' },
  ]);

module.exports = config;
