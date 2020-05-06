const channels = [
  { href: '/equipment', label: 'Equipment' },
  { href: '/rental', label: 'Rental' },
  { href: '/concrete', label: 'Concrete' },
  { href: '/asphalt', label: 'Asphalt' },
  { href: '/business', label: 'Business' },
  { href: '/construction-technology', label: 'Technology' },
  { href: '/profit-matters', label: 'Profit Matters' },
];

const resources = [
  { href: '/directory', label: 'New Equipment Directory' },
  { href: '/specguide', label: 'Spec Guides' },
  { href: '/video', label: 'Video Network' },
  { href: '/magazine', label: 'Magazine' },
  { href: '/events', label: 'Events' },
  { href: '/podcast', label: 'Podcasts' },
  { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
];

const tertiaryItems = [
  {
    href: '/magazinew',
    label: 'Magazine',
    icon: 'book',
    forceLabel: true,
  },
  {
    href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=FCP_prefs_ProgReg',
    label: 'Sign Up',
    icon: 'mail',
    forceLabel: true,
    target: '_blank',
  },
  {
    href: '/search',
    label: 'Search',
    icon: 'search',
    forceLabel: true,
  },
];

module.exports = {
  secondary: { items: channels },
  primary: { items: resources },
  tertiary: { items: tertiaryItems },

  contexts: [
    {
      when: ['/equipment', '/trucks'],
      secondary: { items: channels },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/trucks', label: 'Trucks' },
          { href: '/equipment/earthmoving', label: 'Earthmoving' },
          { href: '/equipment/fleet-maintenance', label: 'Fleet Maintenance' },
          { href: '/equipment/attachments', label: 'Attachments' },
          { href: '/equipment/compaction', label: 'Compaction' },
        ],
      },
    },
    {
      when: ['/rental'],
      secondary: { items: channels },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/rental/lifting-equipment', label: 'Lifting' },
          { href: '/rental/lifting-equipment/telescopic-handler', label: 'Telescopic Lifts' },
          { href: '/rental/lifting-equipment/boom-lift', label: 'Boom Lifts' },
          { href: '/rental/lifting-equipment/crane', label: 'Crane' },
          { href: '/rental/inventory', label: 'Inventory' },
        ],
      },
    },
    {
      when: ['/concrete'],
      secondary: { items: channels },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/concrete/decorative', label: 'Decorative' },
          { href: '/concrete/equipment-products', label: 'Equipment & Products' },
          { href: '/concrete/equipment-products/concrete-pumps', label: 'Pumps' },
          { href: '/concrete/equipment-products/power-trowels', label: 'Trowels' },
          { href: '/concrete/equipment-products/repair-rehabilitation-products', label: 'Repair' },
        ],
      },
    },
    {
      when: ['/asphalt', '/pavement-maintenance'],
      secondary: { items: channels },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/asphalt/additives', label: 'Additives' },
          { href: '/asphalt/plants', label: 'Plants' },
          { href: '/asphalt/recycling', label: 'Recycling' },
          { href: '/asphalt/pavers', label: 'Pavers' },
          { href: '/asphalt/material-transfer-vehicles', label: 'MTV\'s' },
          { href: '/pavement-maintenance', label: 'Pavement Maintenance' },
        ],
      },
    },
    {
      when: ['/business'],
      secondary: { items: channels },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/business/business-services', label: 'Services' },
          { href: '/business/construction-safety', label: 'Safety' },
          { href: '/business/business-services/training-education', label: 'Training & Education' },
          { href: '/business/labor-workforce-development', label: 'Labor' },
        ],
      },
    },
    {
      when: ['/construction-technology'],
      secondary: { items: channels },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/construction-technology/apps', label: 'Apps' },
          { href: '/construction-technology/theft-prevention', label: 'Theft Prevention' },
          { href: '/construction-technology/personnel-management', label: 'Personnel Management' },
          { href: '/construction-technology/equipment-monitoring-logistics', label: 'Equipment Monitoring' },
          { href: '/construction-technology/machine-grade-control-gps-laser-other', label: 'Machine Grade Control, GPS, Laser & Other' },
        ],
      },
    },
  ],

  footer: {
    items: [
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/equipment', label: 'Equipment' },
        { href: '/rental', label: 'Rental' },
        { href: '/concrete', label: 'Concrete' },
        { href: '/asphalt', label: 'Asphalt' },
        { href: '/business', label: 'Business' },
        { href: '/construction-technology', label: 'Technology' },
        { href: '/profit-matters', label: 'Profit Matters' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/directory', label: 'New Equipment Directory' },
        { href: '/asphalt-industry-directory', label: 'Asphalt Industry Directory' },
        { href: '/economics', label: 'Economics' },
        { href: '/specguide', label: 'Spec Guides' },
        { href: '/video', label: 'Video Network' },
        { href: '/magazine', label: 'Magazine' },
        { href: '/events', label: 'Events' },
        { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '#', label: 'Newsletters', target: '_blank' },
        { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
        { href: '/magazine', label: 'Current Issue' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
