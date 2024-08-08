import EEvent from 'src/models/enums/EEvent'

export default [
  {
    time: {
      name: 'Mitgliederversammlung',
      start: new Date('2024-02-02'),
    },
    category: EEvent.Mitgliederversammlung,
    contact: 'Diana Vialon',
    kilometer: 50,
  },
  {
    time: {
      name: 'Jahreshauptversammlung',
      start: new Date('2024-03-01'),
    },
    category: EEvent.Mitgliederversammlung,
    contact: 'Diana Vialon',
    kilometer: 50,
  },
  {
    time: {
      name: 'RC Mistral',
      start: new Date('2024-03-09'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://rc-mistral.koeln'),
  },
  {
    time: {
      name: 'Mitgliederversammlung',
      start: new Date('2024-04-05'),
    },
    category: EEvent.Mitgliederversammlung,
    contact: 'Diana Vialon',
    kilometer: 50,
  },
  {
    time: {
      name: 'RTC-Permanente abfahren',
      start: new Date('2024-04-13'),
    },
    contact: 'Manfred Türk-Vialon',
    kilometer: 50,
  },
  {
    time: {
      name: 'RSV Staubwolke Refrath',
      start: new Date('2024-05-01'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://staubwolke-refrath.de'),
  },
  {
    time: {
      name: 'Mitgliederversammlung',
      start: new Date('2024-05-10'),
    },
    category: EEvent.Mitgliederversammlung,
    contact: 'Diana Vialon',
    kilometer: 50,
  },
  {
    time: {
      name: 'Vatertagstour in die Eifel',
      start: new Date('2024-05-09'),
    },
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
  },
  {
    time: {
      name: 'RSC Erftstadt',
      start: new Date('2024-05-11'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://www.rsc-erftstadt.de'),
  },
  {
    time: {
      name: 'Vortour RTF',
      start: new Date('2024-05-18'),
    },
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
  },
  {
    time: {
      name: 'RTC Mehlem',
      start: new Date('2024-05-20'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://rtc-mehlem.de'),
  },
  {
    time: {
      name: 'RSV Euskirchen',
      start: new Date('2024-05-25'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://rsv-euskirchen.de'),
  },
  {
    time: {
      name: 'Auschildern RTF',
      start: new Date('2024-06-01'),
    },
    contact: 'Manfred Türk-Vialon',
    kilometer: 250,
  },
  {
    time: {
      name: '52. Forsbachtour',
      start: new Date('2024-06-02'),
    },
    category: EEvent.RTF,
    contact: 'Manfred Türk-Vialon',
    kilometer: 250,
  },
  {
    time: {
      name: 'Mitgliederversammlung',
      start: new Date('2024-06-07'),
    },
    category: EEvent.Mitgliederversammlung,
    contact: 'Diana Vialon',
    kilometer: 50,
  },
  {
    time: {
      name: 'RTC Rodenkirchen',
      start: new Date('2024-06-23'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://rtc-rodenkirchen.de'),
  },
  {
    time: {
      name: 'RSC Kolpingstadt Kerpen',
      start: new Date('2024-06-29'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://www.rsc-kerpen.de'),
  },
  {
    time: {
      end: new Date('2024-07-07'),
      name: 'St. Vith',
      start: new Date('2024-07-05'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://www.rsv.be/3laenderfahrt'),
  },
  {
    time: {
      name: 'Mitgliederversammlung',
      start: new Date('2024-07-12'),
    },
    category: EEvent.Mitgliederversammlung,
    contact: 'Diana Vialon',
    kilometer: 50,
  },
  {
    time: {
      name: 'TSV Immendorf',
      start: new Date('2024-07-14'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://www.tsv-immendorf.de/sportarten/radsport'),
  },
  {
    time: {
      name: 'RTV Lohmar',
      start: new Date('2024-08-03'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://sites.google.com/view/rtvlohmar'),
  },
  {
    time: {
      name: 'RC Cito Hennef',
      start: new Date('2024-08-11'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://www.cito-hennef.de'),
  },
  {
    time: {
      name: 'RSV Lövenich',
      start: new Date('2024-08-25'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://www.viktoria-loevenich.de'),
  },
  {
    time: {
      name: 'Mitgliederversammlung',
      start: new Date('2024-09-06'),
    },
    category: EEvent.Mitgliederversammlung,
    contact: 'Diana Vialon',
    kilometer: 50,
  },
  {
    time: {
      name: 'SV Malefinkbach',
      start: new Date('2024-09-08'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://www.svmalefinkbach.de'),
  },
  {
    time: {
      name: 'VfR Büttgen',
      start: new Date('2024-09-28'),
    },
    category: EEvent.Vereinsfahrt,
    contact: 'Manfred Türk-Vialon',
    kilometer: 100,
    url: new URL('https://www.vfr-buettgen.de'),
  },
  {
    time: {
      name: 'Mitgliederversammlung',
      start: new Date('2024-10-04'),
    },
    category: EEvent.Mitgliederversammlung,
    contact: 'Diana Vialon',
    kilometer: 50,
  },
  {
    time: {
      name: 'Weihnachtsfeier',
      start: new Date('2024-12-07'),
    },
    category: EEvent.Mitgliederversammlung,
    contact: 'Diana Vialon',
    kilometer: 50,
  },
]
