module.exports = {
  engine: {
    title: '',
    image: '',
    pdfLink: '',
    measures: {
      metric: { label: 'Metric' },
      standard: { label: 'Standard' },
    },
    initialMeasureKey: 'standard',
    columns: {
      hp: {
        measure: 'standard',
        range: ['hp-low', 'hp-high'],
      },
      kw: {
        label: 'kW',
        measure: 'metric',
        range: ['kw-low', 'kw-high'],
      },
      disp: {
        label: 'Disp. (l)',
        range: ['disp-low', 'disp-high'],
      },
      torque: {
        label: 'Torque (lb.-ft.)',
        measure: 'standard',
        range: ['torque-low', 'torque-high'],
      },
      torquenm: {
        label: 'Torque (Nm)',
        measure: 'metric',
        range: ['torque-lownm', 'torque-highnm'],
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
      weightdrylb: {
        label: 'Dry Weight (lb.)',
        measure: 'standard',
      },
      weightdrykg: {
        label: 'Dry Weight (kg.)',
        measure: 'metric',
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
