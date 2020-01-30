module.exports = {
  engine: {
    title: '',
    image: '',
    pdfLink: '',
    sheetSrc: 'https://spreadsheets.google.com/feeds/list/10EKomL-SVMZ4imnCaoO86t48T7ngVaopWXie04AveUo/4/public/values?alt=json',
    measures: {
      metric: { label: 'Metric' },
      standard: { label: 'Standard' },
    },
    initialMeasureKey: 'standard',
    columns: {
      hp: {
        measure: 'standard',
        range: ['hp-low', 'hp-high'],
        type: 'number',
      },
      kw: {
        label: 'kW',
        measure: 'metric',
        range: ['kw-low', 'kw-high'],
        type: 'number',
      },
      disp: {
        label: 'Disp. (L)',
        range: ['disp-low', 'disp-high'],
        type: 'number',
      },
      torque: {
        label: 'Torque (lb.-ft.)',
        measure: 'standard',
        range: ['torque-low', 'torque-high'],
        type: 'number',
      },
      torquenm: {
        label: 'Torque (Nm)',
        measure: 'metric',
        range: ['torque-lownm', 'torque-highnm'],
        type: 'number',
      },
      fuel: {
        label: 'Fuel',
      },
      tierregcompliant: {
        label: 'Emissions Certifications',
      },
      aftertreatment: {
        label: 'Aftertreatment',
      },
      // Dimension group here.
      ldimensionsin: {
        label: 'L (in.)',
        measure: 'standard',
        type: 'number',
      },
      wdimensionsin: {
        label: 'W (in.)',
        measure: 'standard',
        type: 'number',
      },
      hdimensionsin: {
        label: 'H (in.)',
        measure: 'standard',
        type: 'number',
      },
      ldimensionsmm: {
        label: 'L (mm)',
        measure: 'metric',
        type: 'number',
      },
      wdimensionsmm: {
        label: 'W (mm)',
        measure: 'metric',
        type: 'number',
      },
      hdimensionsmm: {
        label: 'H (mm)',
        measure: 'metric',
        type: 'number',
      },
      weightdrylb: {
        label: 'Dry Weight (lb.)',
        measure: 'standard',
        type: 'number',
      },
      weightdrykg: {
        label: 'Dry Weight (kg.)',
        measure: 'metric',
        type: 'number',
      },
      model: {
        label: 'Model',
      },
      familyseries: {
        label: 'Family / Series',
      },
      company: {
        label: 'Company',
      },
    },
  },
};
